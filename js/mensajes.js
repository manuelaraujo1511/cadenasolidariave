/**
 * mensajes.js
 * Mensajes pre-redactados para difusión en redes sociales.
 * Edita el array MENSAJES para agregar o modificar.
 */

const MENSAJES = [
  {
    plataforma: "WhatsApp",
    texto: `🇻🇪❤️ *Venezuela nos necesita*

Dos terremotos devastaron Venezuela el 24 de junio. Desde Bogotá nos organizamos para enviar ayuda.

✅ Regístra tu donación en CadenaSolidariaVE
✅ Si no puedes llevar, pasamos a recoger
✅ Todo va directo a los centros de acopio

📦 ¿Qué donar? Alimentos no perecederos, medicamentos, ropa, artículos de aseo.

🔗 cadenasolidariave.vercel.app

Comparte este mensaje con tus contactos 🙏`
  },
  {
    plataforma: "Instagram / Facebook",
    texto: `🇻🇪 Bogotá con Venezuela

#CadenaSolidariaVE nos organizamos para que tu donación llegue al lugar correcto.

• Registra qué puedes donar
• Coordinamos la recolección o el transporte
• Todo llega a los centros de acopio activos en Bogotá

Etiqueta a alguien que quiera ayudar 👇

#VenezuelaNoEstáSola #TerremotoVenezuela #AyudaHumanitaria #Bogotá #Colombia`
  },
  {
    plataforma: "X / Twitter",
    texto: `🇻🇪 Desde Bogotá, organizados.

#CadenaSolidariaVE coordina donaciones para Venezuela post-terremoto.

Registra qué tienes → coordinamos la entrega → llega al centro de acopio.

🔗 https://cadenasolidariave.vercel.app/

#VenezuelaNoEstáSola #TerremotoVenezuela`
  },
  {
    plataforma: "Grupo de residentes / comunidad",
    texto: `Buenos días vecinos 👋

Como ya saben, Venezuela fue golpeada por dos terremotos ayer. Muchas familias venezolanas en Bogotá tienen familiares afectados.

Estamos organizando una cadena de donaciones desde el barrio. No necesitas salir de casa — si tienes algo que donar, lo recogemos nosotros.

¿Qué se necesita?
– Alimentos no perecederos (arroz, lentejas, enlatados)
– Medicamentos de uso común
– Artículos de aseo personal
– Ropa y cobijas

Regístrate en: cadenasolidariave.vercel.app

Gracias por su solidaridad 🙏`
  }
];

// ---- Render ----
function renderMensajes() {
  const container = document.getElementById("mensajes-list");
  if (!container) return;

  container.innerHTML = MENSAJES.map((m, i) => `
    <div class="mensaje-card">
      <div class="mensaje-header">
        <span class="mensaje-plat">${m.plataforma}</span>
        <button class="btn-copy" onclick="copiarMensaje(${i}, this)">Copiar</button>
      </div>
      <div class="mensaje-body">${m.texto}</div>
    </div>
  `).join("");
}

function copiarMensaje(idx, btn) {
  const texto = MENSAJES[idx].texto;
  navigator.clipboard.writeText(texto).then(() => {
    btn.textContent = "¡Copiado!";
    btn.classList.add("copied");
    setTimeout(() => {
      btn.textContent = "Copiar";
      btn.classList.remove("copied");
    }, 2000);
  }).catch(() => {
    // Fallback para navegadores sin clipboard API
    const ta = document.createElement("textarea");
    ta.value = texto;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    document.body.removeChild(ta);
    btn.textContent = "¡Copiado!";
    btn.classList.add("copied");
    setTimeout(() => { btn.textContent = "Copiar"; btn.classList.remove("copied"); }, 2000);
  });
}

renderMensajes();
