# CadenaSolidariaVE

Plataforma ciudadana para coordinar donaciones desde Bogotá hacia las víctimas del terremoto en Venezuela (junio 2026).

## Stack

- HTML / CSS / JS vanilla — sin frameworks, carga rápida en conexiones lentas
- Vercel para hosting (deploy automático en cada push)
- Google Apps Script como backend para persistir los registros en Google Sheets

---

## Estructura

```
cadenasolidariave/
├── index.html          # Página principal
├── vercel.json         # Config de Vercel (headers de seguridad)
├── css/
│   └── main.css        # Estilos (mobile-first)
├── js/
│   ├── acopios.js      # ← Edita aquí los centros de acopio
│   ├── mensajes.js     # ← Edita aquí los mensajes de difusión
│   └── form.js         # Lógica del formulario + integración GAS
└── assets/
    ├── favicon.svg
    └── og-image.png    # 1200×630px para Open Graph
```

---

## Deploy en Vercel

### Primera vez

```bash
# Instala Vercel CLI si no la tienes
npm i -g vercel

# En la carpeta del proyecto
vercel

# Para producción
vercel --prod
```

Vercel detecta automáticamente el proyecto estático y lo despliega.
Conecta tu repo de GitHub en vercel.com para deploy automático en cada push.

### Dominio personalizado (opcional)

En el dashboard de Vercel → Settings → Domains → agrega `cadenasolidariave.com` o similar.

---

## Backend: Google Apps Script → Google Sheets

### 1. Crear el Sheet

En Google Drive crea un Spreadsheet con estas columnas en la primera fila:

```
Timestamp | Nombre | WhatsApp | Zona | Donaciones | Entrega | Notas | UserAgent
```

### 2. Crear el Apps Script

Desde el Spreadsheet → Extensiones → Apps Script. Pega este código:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    data.timestamp,
    data.nombre,
    data.whatsapp,
    data.zona,
    data.donaciones,
    data.entrega,
    data.notas,
    data.userAgent
  ]);

  // Opcional: notificación por email al coordinador
  // MailApp.sendEmail({
  //   to: "tu@email.com",
  //   subject: `Nueva donación de ${data.nombre} — ${data.zona}`,
  //   body: JSON.stringify(data, null, 2)
  // });

  return ContentService
    .createTextOutput(JSON.stringify({ status: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

### 3. Publicar como Web App

Implementar → Nueva implementación → Tipo: Web App
- Ejecutar como: **Yo**
- Quién tiene acceso: **Cualquier usuario**

Copia la URL y pégala en `js/form.js` en la variable `GAS_ENDPOINT`.

---

## Actualizar centros de acopio

Edita el array `ACOPIOS` en `js/acopios.js`. Cada entrada:

```javascript
{
  nombre: "Nombre del centro",
  direccion: "Dirección completa",
  horario: "Horario de atención",
  acepta: ["Alimentos", "Medicamentos"],  // tags visibles
  gmaps: "https://maps.google.com/?q=..."  // opcional
}
```

---

## Variables a reemplazar en index.html

- `57XXXXXXXXXX` → tu número de WhatsApp real (en el footer)
- `cadenasolidariave.vercel.app` → tu URL real (en los mensajes de js/mensajes.js)

---

## Próximos pasos sugeridos

- [ ] Agregar los centros de acopio reales con direcciones verificadas
- [ ] Conectar el GAS endpoint
- [ ] Crear cuenta de Instagram `@cadenasolidariave`
- [ ] Crear número de WhatsApp Business dedicado
- [ ] Agregar foto OG (assets/og-image.png, 1200×630px)
- [ ] Considerar Airtable o Notion como alternativa a GAS para el backoffice
