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
 *   disponible (boolean, default: true — si false, no se muestra)
 *   gmaps      (string — URL de Google Maps, opcional)
 */

const ACOPIOS = [
  // BOGOTÁ
  {
    nombre: "Wed Envios Venezuela (Cedritos)",
    ciudad: "Bogotá",
    direccion: "Calle 142 #17A-40 Local 1",
    telefono: "+57 317 765 2294",
    horario: "Consultar disponibilidad",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Calle+142+%2317A-40+Bogota"
  },
  {
    nombre: "20 de Julio",
    ciudad: "Bogotá",
    direccion: "Av. 1 de Mayo #8-22",
    telefono: "+57 320 438 3449",
    horario: "Consultar disponibilidad",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Av.+1+de+Mayo+%238-22+Bogota"
  },
  {
    nombre: "Fundación Juntos se puede",
    ciudad: "Bogotá",
    direccion: "Calle 104 #54-31",
    telefono: "Por confirmar",
    horario: "9:00 AM – 6:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Calle+104+%2354-31+Bogota"
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
  {
    nombre: "Engativá — Calidex",
    ciudad: "Bogotá",
    direccion: "Calle 72 #82-60, Local 13 (Piso 1). Centro Empresarial Punto 72",
    telefono: "+57 302 754 3225",
    horario: "Lunes a Viernes 8:00 AM – 5:30 PM / Sábados 9:00 AM – 1:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Calle+72+%2382-60+Bogota"
  },
  {
    nombre: "Cedritos — Calidex",
    ciudad: "Bogotá",
    direccion: "Cra 19 #147-30, Local 09. CC La Juguetería",
    telefono: "+57 302 754 3225",
    horario: "Lunes a Viernes 8:00 AM – 5:30 PM / Sábados 9:00 AM – 1:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Cra+19+%23147-30+Bogota"
  },
  {
    nombre: "San Victorino — Calidex",
    ciudad: "Bogotá",
    direccion: "Calle 12B #9-40. CC Neos, Nivel 0, Local 010",
    telefono: "+57 302 754 3225",
    horario: "Lunes a Viernes 8:00 AM – 5:30 PM / Sábados 9:00 AM – 1:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Calle+12B+%239-40+Bogota"
  },
  {
    nombre: "Chapinero — Hotel Matisse",
    ciudad: "Bogotá",
    direccion: "Calle 57 #5-55",
    telefono: "+57 305 867 9421",
    horario: "8:00 AM – 8:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Calle+57+%235-55+Chapinero+Bogota"
  },
  {
    nombre: "Chapinero — Centro Parque 63",
    ciudad: "Bogotá",
    direccion: "Carrera 13 #63-2",
    telefono: "+57 322 841 7046",
    horario: "8:00 AM – 7:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Carrera+13+%2363-2+Bogota"
  },
  {
    nombre: "Chapinero — Carrera 9",
    ciudad: "Bogotá",
    direccion: "Carrera 9 #57-70",
    telefono: "Por confirmar",
    horario: "9:00 AM – 7:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Carrera+9+%2357-70+Chapinero+Bogota"
  },
  {
    nombre: "Kennedy — Conjunto Oasis de Castilla",
    ciudad: "Bogotá",
    direccion: "Calle 19 #40-41",
    telefono: "+57 313 440 7049",
    horario: "8:00 AM – 8:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Calle+19+%2340-41+Kennedy+Bogota"
  },
  {
    nombre: "Barrios Unidos",
    ciudad: "Bogotá",
    direccion: "Carrera 65 #73-23",
    telefono: "Por confirmar",
    horario: "8:00 AM – 5:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Carrera+65+%2373-23+Barrios+Unidos+Bogota"
  },
  {
    nombre: "Cedritos — Panadería Ávila",
    ciudad: "Bogotá",
    direccion: "Carrera 17 #141-05",
    telefono: "Por confirmar",
    horario: "8:00 AM – 5:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Carrera+17+%23141-05+Cedritos+Bogota"
  },
  {
    nombre: "Centro Comercial Multiplaza",
    ciudad: "Bogotá",
    direccion: "Calle 19A #72-57",
    telefono: "Por confirmar",
    horario: "8:00 AM – 9:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Calle+19A+%2372-57+Bogota"
  },
  {
    nombre: "CC Granada Hills",
    ciudad: "Bogotá",
    direccion: "Autopista Norte #146-57",
    telefono: "+57 300 555 9550",
    horario: "7:00 AM – 7:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Autopista+Norte+%23146-57+Bogota"
  },
  {
    nombre: "Usaquén",
    ciudad: "Bogotá",
    direccion: "Carrera 8 #127-76 Local 1",
    telefono: "Por confirmar",
    horario: "9:00 AM – 6:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Carrera+8+%23127-76+Usaquen+Bogota"
  },
  {
    nombre: "Fontibón — Fundación Mahuampi",
    ciudad: "Bogotá",
    direccion: "Carrera 1166 #186-70",
    telefono: "+57 322 768 3589",
    horario: "Sábados y Domingos 3:00 PM – 8:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Carrera+1166+%23186-70+Fontibo+Bogota"
  },
  {
    nombre: "Candelaria",
    ciudad: "Bogotá",
    direccion: "Carrera 5 #17-69",
    telefono: "+57 301 482 7680",
    horario: "8:00 AM – 10:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Carrera+5+%2317-69+Candelaria+Bogota"
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
  {
    nombre: "Poblado — Calidex",
    ciudad: "Medellín",
    direccion: "Cra 35A #15B-35, Las Palmas – Poblado. Centro de Negocios Prisma, Oficina 101",
    telefono: "+57 302 754 3225",
    horario: "Lunes a Viernes 8:00 AM – 5:30 PM / Sábados 9:00 AM – 1:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Cra+35A+%2315B-35+Medellin"
  },
  {
    nombre: "Centro — Calidex",
    ciudad: "Medellín",
    direccion: "Carrera 51 #51-47, Estación Parque Berrío. CC Veracruz, Piso 3, Locales 3197–3199",
    telefono: "+57 302 754 3225",
    horario: "Lunes a Viernes 8:00 AM – 5:30 PM / Sábados 9:00 AM – 1:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Carrera+51+%2351-47+Medellin"
  },
  {
    nombre: "Bello Niquía — Calidex",
    ciudad: "Medellín",
    direccion: "Diagonal 55 #37-41. CC Estación Niquía, Local 147",
    telefono: "+57 302 754 3225",
    horario: "Lunes a Viernes 8:00 AM – 5:30 PM / Sábados 9:00 AM – 1:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Diagonal+55+%2337-41+Bello+Antioquia"
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
  },
  {
    nombre: "Norte — Calidex",
    ciudad: "Cali",
    direccion: "Carrera 1 #61A-30, Local 10. CC Colón Plaza",
    telefono: "+57 302 754 3225",
    horario: "Lunes a Viernes 8:00 AM – 5:30 PM / Sábados 9:00 AM – 1:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Carrera+1+%2361A-30+Cali"
  },
  {
    nombre: "Sur — Calidex",
    ciudad: "Cali",
    direccion: "Cra 56 #3-32, Local 5. Barrio Cuarto de Legua",
    telefono: "+57 302 754 3225",
    horario: "Lunes a Viernes 8:00 AM – 5:30 PM / Sábados 9:00 AM – 1:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Cra+56+%233-32+Cali"
  },
  // BARRANQUILLA
  {
    nombre: "Ciudad Jardín — Calidex",
    ciudad: "Barranquilla",
    direccion: "Calle 79 #42F-93, Local 102. Garden Plaza",
    telefono: "+57 302 754 3225",
    horario: "Lunes a Viernes 8:00 AM – 5:30 PM / Sábados 9:00 AM – 1:00 PM",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Calle+79+%2342F-93+Barranquilla"
  },
  // CÚCUTA
  {
    nombre: "Zona Industrial — Calidex",
    ciudad: "Cúcuta",
    direccion: "Avenida 6 #7N-109, Zona Industrial. Edificio Red Rubicam S.A.S.",
    telefono: "+57 302 754 3225",
    horario: "Lunes a Viernes 8:00 AM – 5:30 PM / Sábados Cerrado",
    acepta: ["Alimentos", "Ropa", "Medicamentos", "Aseo"],
    disponible: true,
    gmaps: "https://maps.google.com/?q=Avenida+6+%237N-109+Cucuta"
  }
];

// ---- Render ----
function renderAcopios() {
  const container = document.getElementById("acopios-list");
  if (!container) return;

  // Filtrar solo disponibles y agrupar por ciudad
  const porCiudad = {};
  ACOPIOS.filter(a => a.disponible !== false).forEach(a => {
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
  if (stat) {
    const disponibles = ACOPIOS.filter(a => a.disponible !== false).length;
    stat.textContent = disponibles;
  }
}

renderAcopios();
