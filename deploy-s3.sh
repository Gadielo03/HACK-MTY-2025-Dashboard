#!/bin/bash

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${BLUE}🚀 Iniciando deploy a AWS S3...${NC}\n"

# Variables de configuración
BUCKET_NAME="hack-mty-2025-dashboard"
REGION="us-east-2"

# Verificar si AWS CLI está instalado
if ! command -v aws &> /dev/null; then
    echo -e "${RED}❌ AWS CLI no está instalado${NC}"
    echo "Instala AWS CLI: https://aws.amazon.com/cli/"
    exit 1
fi

# Verificar credenciales de AWS
echo -e "${BLUE}🔐 Verificando credenciales de AWS...${NC}"
if ! aws sts get-caller-identity &> /dev/null; then
    echo -e "${RED}❌ No hay credenciales de AWS configuradas${NC}"
    echo "Ejecuta: aws configure"
    exit 1
fi

echo -e "${GREEN}✅ Credenciales verificadas${NC}\n"

# Build del proyecto
echo -e "${BLUE}📦 Construyendo el proyecto...${NC}"
npm run build

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error en el build${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Build completado${NC}\n"

# Verificar si el bucket existe
echo -e "${BLUE}🪣 Verificando bucket S3...${NC}"
if ! aws s3 ls "s3://${BUCKET_NAME}" --region ${REGION} 2>&1 | grep -q 'NoSuchBucket'; then
    echo -e "${GREEN}✅ Bucket encontrado${NC}\n"
else
    echo -e "${BLUE}📝 Creando bucket S3...${NC}"
    aws s3 mb "s3://${BUCKET_NAME}" --region ${REGION}
    
    # Configurar bucket para hosting estático
    aws s3 website "s3://${BUCKET_NAME}" \
        --index-document index.html \
        --error-document index.html \
        --region ${REGION}
    
    # Configurar política pública del bucket
    cat > /tmp/bucket-policy.json <<EOF
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::${BUCKET_NAME}/*"
        }
    ]
}
EOF
    
    aws s3api put-bucket-policy \
        --bucket ${BUCKET_NAME} \
        --policy file:///tmp/bucket-policy.json \
        --region ${REGION}
    
    # Desactivar Block Public Access
    aws s3api put-public-access-block \
        --bucket ${BUCKET_NAME} \
        --public-access-block-configuration \
        "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false" \
        --region ${REGION}
    
    echo -e "${GREEN}✅ Bucket creado y configurado${NC}\n"
fi

# Subir archivos a S3
echo -e "${BLUE}☁️  Subiendo archivos a S3...${NC}"
aws s3 sync dist/ "s3://${BUCKET_NAME}" \
    --region ${REGION} \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "index.html" \
    --exclude "*.map"

# Subir index.html sin cache
aws s3 cp dist/index.html "s3://${BUCKET_NAME}/index.html" \
    --region ${REGION} \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/html"

echo -e "${GREEN}✅ Archivos subidos exitosamente${NC}\n"

# Obtener URL del sitio
WEBSITE_URL="http://${BUCKET_NAME}.s3-website.${REGION}.amazonaws.com"

echo -e "${GREEN}╔════════════════════════════════════════════════════════════╗${NC}"
echo -e "${GREEN}║                  🎉 DEPLOY EXITOSO 🎉                      ║${NC}"
echo -e "${GREEN}╚════════════════════════════════════════════════════════════╝${NC}"
echo -e "\n${BLUE}🌐 URL del sitio:${NC}"
echo -e "${GREEN}   ${WEBSITE_URL}${NC}\n"
echo -e "${BLUE}📝 Próximos pasos (OPCIONAL - para HTTPS):${NC}"
echo -e "   1. Configura CloudFront para CDN global"
echo -e "   2. Añade certificado SSL/TLS gratis con ACM"
echo -e "   3. Usa un dominio personalizado\n"
echo -e "${BLUE}💡 Para configurar CloudFront, ejecuta:${NC}"
echo -e "${GREEN}   ./setup-cloudfront.sh${NC}\n"
