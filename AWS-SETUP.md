# 🚀 Guía de Deploy a AWS - HACK MTY 2025 Dashboard

## 📋 Prerequisitos

### 1. Instalar AWS CLI (si no lo tienes)

```bash
# macOS
brew install awscli

# Verificar instalación
aws --version
```

### 2. Configurar credenciales de AWS

```bash
aws configure
```

Te pedirá:

- **AWS Access Key ID**: Tu access key de IAM
- **AWS Secret Access Key**: Tu secret key de IAM
- **Default region name**: `us-east-2`
- **Default output format**: `json`

#### 🔐 ¿Cómo obtener las credenciales?

1. Ve a la consola de AWS: https://console.aws.amazon.com
2. Busca **IAM** (Identity and Access Management)
3. Ve a **Users** → Tu usuario
4. Tab **Security credentials**
5. **Create access key** → CLI
6. Guarda el Access Key ID y Secret Access Key

---

## 🎯 Opción 1: Deploy Rápido (S3 únicamente)

### Deploy en 1 comando:

```bash
# Dar permisos de ejecución
chmod +x deploy-s3.sh

# Ejecutar deploy
./deploy-s3.sh
```

Esto:

- ✅ Hace build del proyecto
- ✅ Crea el bucket S3 (si no existe)
- ✅ Configura hosting estático
- ✅ Sube todos los archivos
- ✅ Te da la URL pública

**URL resultante:**

```
http://hack-mty-2025-dashboard.s3-website.us-east-2.amazonaws.com
```

### 📝 Notas:

- ⚡ Deploy en ~2 minutos
- 💰 Costo: ~$0.50-2/mes (muy económico)
- 🌍 Sin CDN global
- 🔓 HTTP únicamente (sin HTTPS)

---

## 🌐 Opción 2: Deploy con CloudFront (Recomendado para producción)

### Paso 1: Deploy a S3

```bash
./deploy-s3.sh
```

### Paso 2: Configurar CloudFront

```bash
# Dar permisos
chmod +x setup-cloudfront.sh

# Configurar CloudFront
./setup-cloudfront.sh
```

Esto te dará:

- ✅ HTTPS automático (certificado gratis de AWS)
- ✅ CDN global (mejor rendimiento)
- ✅ Dominio de CloudFront (ej: d111111abcdef8.cloudfront.net)

### ⏳ Tiempo de despliegue:

- S3: ~2 minutos
- CloudFront: ~15-20 minutos (se deploya en todos los edge locations)

**URL resultante:**

```
https://d111111abcdef8.cloudfront.net
```

---

## 🔄 Actualizaciones posteriores

Cada vez que hagas cambios al código:

```bash
# Deploy rápido (solo S3)
./deploy-s3.sh

# Si usas CloudFront, invalidar caché
aws cloudfront create-invalidation \
  --distribution-id TU_DISTRIBUTION_ID \
  --paths "/*"
```

---

## 🛠️ Configuración del Backend

Ya está configurado para usar tu backend en:

```
http://18.216.25.43:8080
```

Archivos modificados:

- ✅ `src/services/userService.ts` - Apunta a tu backend
- ✅ `.env.production` - Variables de producción
- ✅ `.env.development` - Variables de desarrollo local

---

## 💰 Costos estimados (tráfico bajo/medio)

### Solo S3:

- S3 Storage: ~$0.50/mes (por 5GB)
- S3 Requests: ~$0.10/mes
- S3 Transfer: ~$1/mes
- **Total: ~$2-3/mes**

### S3 + CloudFront:

- S3: ~$1/mes
- CloudFront: ~$1-5/mes (incluye 1TB gratis el primer año)
- **Total: ~$2-6/mes**

---

## 🐛 Troubleshooting

### Error: "Bucket already exists"

El nombre del bucket debe ser único globalmente. Edita `deploy-s3.sh` y cambia:

```bash
BUCKET_NAME="hack-mty-2025-dashboard-tuempresa"
```

### Error: "Access Denied"

Verifica tus credenciales:

```bash
aws sts get-caller-identity
```

### El sitio no carga después del deploy

1. Espera 2-3 minutos para propagación
2. Verifica en la consola de AWS: S3 → tu bucket → Properties → Static website hosting
3. Verifica que la URL sea la correcta

### Errores de CORS con el backend

Tu backend necesita permitir el origen de S3/CloudFront. En tu backend, configura CORS:

```
Access-Control-Allow-Origin: *
```

O específicamente la URL de tu frontend.

---

## 📚 Recursos adicionales

- [AWS S3 Hosting Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [AWS CLI Reference](https://awscli.amazonaws.com/v2/documentation/api/latest/index.html)

---

## 🎉 ¡Listo!

Tu dashboard está deployado y conectado a tu backend en AWS.

**¿Preguntas?** Revisa la sección de troubleshooting arriba.
