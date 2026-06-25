/**
 * acopios.js
 * Edita este array para agregar/quitar centros de acopio.
 * Cada objeto puede tener:
 *   nombre    (string, requerido)
 *   direccion (string, requerido)
 *   horario   (string, requerido)
 *   acepta    (array de strings — tags visibles)
 *   gmaps     (string — URL de Google Maps, opcional)
 */

const ACOPIOS = [
  {
  nombre: "Bogotá Pádel Center",
  direccion: "Cra 45 #169-81, Bogotá (norte, cerca Calle 170)",
  horario: "Todos los días · 10:00 am – 6:00 pm",
  acepta: ["Alimentos", "Ropa", "Aseo", "Medicamentos"],
  gmaps: "https://maps.google.com/?q=Cra+45+%23169-81+Bogota"
},
  {
    nombre: "Ministerio de Relaciones Exteriores",
    direccion: "Calle 10 #5-51, La Candelaria",
    horario: "Lun – Vie · 8:00 am – 4:00 pm",
    acepta: ["Alimentos", "Aseo", "Ropa"],
    gmaps: "https://maps.google.com/?q=Ministerio+Relaciones+Exteriores+Bogota"
  },
  {
    nombre: "Migración Colombia — Sede Norte",
    direccion: "Cra 28A #47A-40, Palermo",
    horario: "Lun – Vie · 7:00 am – 5:00 pm",
    acepta: ["Alimentos", "Medicamentos", "Aseo"],
    gmaps: "https://maps.google.com/?q=Migracion+Colombia+Bogota+Norte"
  },
  {
    nombre: "Parroquia Cristo Rey (Kennedy)",
    direccion: "Cra 78 #38-07, Kennedy",
    horario: "Todos los días · 9:00 am – 7:00 pm",
    acepta: ["Alimentos", "Ropa", "Cobijas"],
    gmaps: "https://maps.google.com/?q=Parroquia+Cristo+Rey+Kennedy+Bogota"
  }
  // → Agrega más centros aquí con el mismo formato
];

// ---- Render ----
function renderAcopios() {
  const container = document.getElementById("acopios-list");
  if (!container) return;

  container.innerHTML = ACOPIOS.map(a => {
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
        <div class="acopio-horario">🕐 ${a.horario}</div>
        <div class="acopio-tags">${tags}${mapsBtn}</div>
      </div>`;
  }).join("");

  const stat = document.getElementById("stat-acopios");
  if (stat) stat.textContent = ACOPIOS.length;
}

renderAcopios();
