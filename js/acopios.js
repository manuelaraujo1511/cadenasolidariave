/**
 * acopios.js
 * Edita este array para agregar/quitar centros de acopio.
 * Centros se agrupan automáticamente por ciudad.
 * Cada objeto puede tener:
 *   nombre     (string, requerido)
 *   ciudad     (string, requerido — para agrupar)
 *   direccion  (string, requerido)
 *   telefono   (string, requerido)
 *   horario    (string, requerido)
 *   acepta     (array de strings — tags visibles)
 *   gmaps      (string — URL de Google Maps, opcional)
 */

const ACOPIOS = [
  // BOGOTÁ
  {
    nombre: "Cedritos (Principal)",
    ciudad: "Bogotá",
    direccion: "Calle 142 #17A-40 Local 1",
    telefono: "+57 317 765 2294",
    horario: "Consultar disponibilidad",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    gmaps: "https://maps.google.com/?q=Calle+142+%2317A-40+Bogota"
  },
  {
    nombre: "20 de Julio",
    ciudad: "Bogotá",
    direccion: "Av. 1 de Mayo #8-22",
    telefono: "+57 320 438 3449",
    horario: "Consultar disponibilidad",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    gmaps: "https://maps.google.com/?q=Av.+1+de+Mayo+%238-22+Bogota"
  },
  {
    nombre: "Kennedy",
    ciudad: "Bogotá",
    direccion: "Av. Cra. 86 #44 Sur-10 Local 29",
    telefono: "+57 350 833 4029",
    horario: "Consultar disponibilidad",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    gmaps: "https://maps.google.com/?q=Av.+Cra.+86+%2344+Sur-10+Bogota"
  },
  {
    nombre: "Suba",
    ciudad: "Bogotá",
    direccion: "Centro Comercial Centro Suba, Av. Calle 145 #91-19 Local 12-101",
    telefono: "+57 318 534 2222",
    horario: "Consultar disponibilidad",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    gmaps: "https://maps.google.com/?q=Centro+Comercial+Centro+Suba+Bogota"
  },
  // MEDELLÍN
  {
    nombre: "Poblado",
    ciudad: "Medellín",
    direccion: "C.C. Automotriz PH, Cra. 43A #19A-87 Local 102",
    telefono: "+57 319 713 9149",
    horario: "Consultar disponibilidad",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    gmaps: "https://maps.google.com/?q=Cra.+43A+%2319A-87+Medellin"
  },
  // CALI
  {
    nombre: "Jorge Zawadsky",
    ciudad: "Cali",
    direccion: "Av. Paso Ancho 48A-29, Barrio Jorge Zawadsky",
    telefono: "+57 323 329 3517",
    horario: "Consultar disponibilidad",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    gmaps: "https://maps.google.com/?q=Av.+Paso+Ancho+48A-29+Cali"
  }
];

// ---- Render ----
function renderAcopios() {
  const container = document.getElementById("acopios-list");
  if (!container) return;

  // Agrupar por ciudad
  const porCiudad = {};
  ACOPIOS.forEach(a => {
    if (!porCiudad[a.ciudad]) porCiudad[a.ciudad] = [];
    porCiudad[a.ciudad].push(a);
  });

  let html = "";
  Object.keys(porCiudad).sort().forEach(ciudad => {
    html += `<div class="acopios-ciudad"><h3>${ciudad}</h3>`;
    html += porCiudad[ciudad].map(a => {
      const tags = a.acepta.map(t => `<span class="tag tag-green">${t}</span>`).join("");
      const mapsBtn = a.gmaps
        ? `<a href="${a.gmaps}" target="_blank" rel="noopener" class="tag tag-blue">Ver en Maps ↗</a>`
        : "";
      return `
        <div class="acopio-card">
          <div class="acopio-header">
            <div class="acopio-dot"></div>
            <div class="acopio-name">${a.nombre}</div>
          </div>
          <div class="acopio-dir">📍 ${a.direccion}</div>
          <div class="acopio-phone">📞 <a href="tel:${a.telefono.replace(/\s/g, '')}">${a.telefono}</a></div>
          <div class="acopio-horario">🕐 ${a.horario}</div>
          <div class="acopio-tags">${tags}${mapsBtn}</div>
        </div>`;
    }).join("");
    html += `</div>`;
  });

  container.innerHTML = html;

  const stat = document.getElementById("stat-acopios");
  if (stat) stat.textContent = ACOPIOS.length;
}

renderAcopios();
