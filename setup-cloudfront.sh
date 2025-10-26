#!/bin/bash

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}☁️  Configurando CloudFront Distribution...${NC}\n"

BUCKET_NAME="hack-mty-2025-dashboard"
REGION="us-east-2"

# Verificar AWS CLI
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI no está instalado${NC}"
    exit 1
fi

echo -e "${BLUE}📝 Creando CloudFront Distribution...${NC}"
echo -e "${YELLOW}⚠️  Esto puede tomar 15-20 minutos...${NC}\n"

# Crear configuración de CloudFront
DISTRIBUTION_CONFIG=$(cat <<EOF
{
    "CallerReference": "$(date +%s)",
    "Comment": "HACK MTY 2025 Dashboard",
    "Enabled": true,
    "Origins": {
        "Quantity": 1,
        "Items": [
            {
                "Id": "S3-${BUCKET_NAME}",
                "DomainName": "${BUCKET_NAME}.s3-website.${REGION}.amazonaws.com",
                "CustomOriginConfig": {
                    "HTTPPort": 80,
                    "HTTPSPort": 443,
                    "OriginProtocolPolicy": "http-only"
                }
            }
        ]
    },
    "DefaultRootObject": "index.html",
    "DefaultCacheBehavior": {
        "TargetOriginId": "S3-${BUCKET_NAME}",
        "ViewerProtocolPolicy": "redirect-to-https",
        "AllowedMethods": {
            "Quantity": 2,
            "Items": ["GET", "HEAD"],
            "CachedMethods": {
                "Quantity": 2,
                "Items": ["GET", "HEAD"]
            }
        },
        "ForwardedValues": {
            "QueryString": false,
            "Cookies": {
                "Forward": "none"
            }
        },
        "MinTTL": 0,
        "DefaultTTL": 86400,
        "MaxTTL": 31536000,
        "Compress": true
    },
    "CustomErrorResponses": {
        "Quantity": 1,
        "Items": [
            {
                "ErrorCode": 404,
                "ResponsePagePath": "/index.html",
                "ResponseCode": "200",
                "ErrorCachingMinTTL": 300
            }
        ]
    },
    "PriceClass": "PriceClass_100"
}
EOF
)

# Crear la distribución
DISTRIBUTION_ID=$(aws cloudfront create-distribution \
    --distribution-config "${DISTRIBUTION_CONFIG}" \
    --query 'Distribution.Id' \
    --output text 2>&1)

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✅ CloudFront Distribution creada${NC}"
    echo -e "${BLUE}Distribution ID:${NC} ${DISTRIBUTION_ID}\n"
    
    # Obtener el dominio de CloudFront
    CLOUDFRONT_DOMAIN=$(aws cloudfront get-distribution \
        --id ${DISTRIBUTION_ID} \
        --query 'Distribution.DomainName' \
        --output text)
    
    echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
    echo -e "${GREEN}║         🎉 CLOUDFRONT CONFIGURADO EXITOSAMENTE 🎉         ║${NC}"
    echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
    echo -e "\n${BLUE}🌐 URL de CloudFront (con HTTPS):${NC}"
    echo -e "${GREEN}   https://${CLOUDFRONT_DOMAIN}${NC}\n"
    echo -e "${YELLOW}⏳ La distribución se está desplegando (15-20 min)${NC}"
    echo -e "${YELLOW}   Puedes verificar el estado en la consola de AWS${NC}\n"
    echo -e "${BLUE}📝 Distribution ID:${NC} ${DISTRIBUTION_ID}\n"
else
    echo -e "${RED}❌ Error al crear CloudFront Distribution${NC}"
    echo "${DISTRIBUTION_ID}"
    exit 1
fi
