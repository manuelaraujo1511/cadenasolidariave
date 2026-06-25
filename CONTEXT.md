# CadenaSolidariaVE — Contexto del proyecto

Iniciativa ciudadana para coordinar donaciones desde Bogotá hacia las víctimas
del terremoto en Venezuela (24 junio 2026, magnitud 7.5).

## URLs

- **Producción:** https://cadenasolidariave.vercel.app
- **Repo:** https://github.com/manuelaraujo1511/cadenasolidariave
- **Google Sheet:** (pega aquí el link de tu Sheet)

## Stack

- HTML / CSS / JS vanilla — sin frameworks
- Vercel para hosting (deploy manual con `vercel --prod`)
- Google Apps Script como backend → escribe en Google Sheets
- Sin npm, sin build step — sitio estático puro

## Estructura

```
cadenasolidariave/
├── index.html          # Página principal
├── vercel.json         # Headers de seguridad
├── css/
│   └── main.css        # Estilos mobile-first
├── js/
│   ├── acopios.js      # ← Editar para agregar centros de acopio
│   ├── mensajes.js     # ← Editar mensajes de difusión en redes
│   └── form.js         # Formulario + integración GAS
├── gas/
│   └── doPost.js       # Código del Apps Script (referencia)
└── assets/
    ├── favicon.svg
    └── og-image.png    # 1200×630px — pendiente crear
```

## Deploy

```bash
# Cada vez que quieras publicar cambios:
cd C:\Users\maraujo\Documents\CadenaSolidariaVE
vercel --prod
```

La integración automática GitHub→Vercel no está activa (requiere plan pago).
El deploy se hace manualmente con la CLI.

## Backend — Google Apps Script

- El formulario envía un POST a `GAS_ENDPOINT` definido en `js/form.js`
- El script escribe una fila en Google Sheets y envía email al coordinador
- Las filas que necesitan recolección quedan resaltadas en amarillo
- Código fuente en `gas/doPost.js`

## Pendientes

- [ ] Agregar direcciones reales en `js/acopios.js`
- [ ] Actualizar número de WhatsApp real en `index.html` footer (`57XXXXXXXXXX`)
- [ ] Crear imagen OG (`assets/og-image.png`, 1200×630px)
- [ ] Crear cuenta Instagram `@cadenasolidariave`
- [ ] Crear número WhatsApp Business dedicado

## Cómo agregar un centro de acopio

Edita el array `ACOPIOS` en `js/acopios.js`:

```js
{
  nombre: "Nombre del centro",
  direccion: "Dirección completa, Bogotá",
  horario: "Lun – Vie · 8:00 am – 5:00 pm",
  acepta: ["Alimentos", "Medicamentos", "Ropa"],
  gmaps: "https://maps.google.com/?q=..."
}
```

Luego: `vercel --prod`

## Decisiones de diseño

- **Sin frameworks** — prioridad en velocidad de carga para usuarios con señal débil
- **Mobile-first** — la mayoría llega desde celular vía link de WhatsApp
- **GAS + Sheets** — backend sin servidor, gratis, fácil de operar por no-técnicos
- **Mensajes pre-redactados** — reduce fricción para difundir en redes