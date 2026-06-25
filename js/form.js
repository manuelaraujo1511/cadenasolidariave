/**
 * form.js
 * Maneja el formulario de donación.
 *
 * BACKEND: Google Apps Script Web App (GAS)
 * → Publica el script como Web App con acceso "Anyone"
 * → Pega la URL en GAS_ENDPOINT abajo
 * → El script escribe cada fila en un Google Sheet y
 *   opcionalmente envía un email de confirmación.
 *
 * Si GAS_ENDPOINT está vacío, el formulario igual funciona
 * localmente (útil para pruebas offline).
 */

const GAS_ENDPOINT = "https://script.google.com/macros/s/AKfycbzuYgvCn7KfYhE6G0GbiRUpulg638TzKQ4Ng6nE6jV89o_TuQiHRhbYUX4KMY0M5WTe/exec"; // ← Pega aquí la URL de tu Apps Script Web App

const form = document.getElementById("form-donacion");
const successBanner = document.getElementById("success-banner");
const chipButtons = document.querySelectorAll("#chips-donacion .chip");
const ciudadSelect = document.getElementById("ciudad");
const zonaSelect = document.getElementById("zona");

// Filtrado de localidades por ciudad
ciudadSelect.addEventListener("change", () => {
  const ciudadKey = ciudadSelect.value;
  const ciudad = CIUDADES[ciudadKey];

  // Limpiar opciones previas
  zonaSelect.innerHTML = '<option value="">Selecciona tu localidad…</option>';

  if (ciudad) {
    // Llenar con localidades de la ciudad seleccionada
    ciudad.localidades.forEach(loc => {
      const opt = document.createElement("option");
      opt.value = loc;
      opt.textContent = loc;
      zonaSelect.appendChild(opt);
    });
    zonaSelect.disabled = false;
  } else {
    zonaSelect.disabled = true;
  }

  // Limpiar error de validación
  zonaSelect.classList.remove("error");
});

// Toggle chips
chipButtons.forEach(btn => {
  btn.addEventListener("click", () => btn.classList.toggle("active"));
});

// Validación simple
function validate() {
  let ok = true;

  const campos = ["nombre", "whatsapp", "ciudad", "zona"];
  campos.forEach(id => {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
      el.classList.add("error");
      ok = false;
    } else {
      el.classList.remove("error");
    }
  });

  const activos = [...chipButtons].filter(b => b.classList.contains("active"));
  if (activos.length === 0) {
    alert("Por favor selecciona al menos un tipo de donación.");
    ok = false;
  }

  return ok;
}

// Recoger datos del form
function getFormData() {
  const entrega = document.querySelector('input[name="entrega"]:checked')?.value || "";
  const donaciones = [...chipButtons]
    .filter(b => b.classList.contains("active"))
    .map(b => b.dataset.val)
    .join(", ");

  const ciudadKey = ciudadSelect.value;
  const ciudadNombre = ciudadKey ? CIUDADES[ciudadKey].nombre : "";

  let whatsapp = document.getElementById("whatsapp").value.trim();
  if (whatsapp.startsWith("+57")) {
    whatsapp = whatsapp.substring(3);
  }

  return {
    nombre: document.getElementById("nombre").value.trim(),
    whatsapp,
    ciudad: ciudadNombre,
    zona: document.getElementById("zona").value,
    donaciones,
    entrega,
    notas: document.getElementById("notas").value.trim(),
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent
  };
}

// Submit
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!validate()) return;

  const data = getFormData();
  const submitBtn = form.querySelector('button[type="submit"]');

  submitBtn.textContent = "Enviando…";
  submitBtn.disabled = true;

  try {
    if (GAS_ENDPOINT) {
      await fetch(GAS_ENDPOINT, {
        method: "POST",
        mode: "no-cors", // GAS requiere no-cors
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
    }

    // Mostrar success independientemente del resultado (no-cors no da respuesta)
    form.classList.add("hidden");
    successBanner.classList.remove("hidden");
    successBanner.scrollIntoView({ behavior: "smooth", block: "center" });

    // Actualizar stat de donantes
    const statEl = document.getElementById("stat-donantes");
    const current = parseInt(statEl.textContent) || 0;
    statEl.textContent = current + 1;

    if (data.entrega === "recoger") {
      const recEl = document.getElementById("stat-recolecciones");
      const curr2 = parseInt(recEl.textContent) || 0;
      recEl.textContent = curr2 + 1;
    }

    // Links de share dinámicos
    const msg = encodeURIComponent(
      `Acabo de registrar mi donación en CadenaSolidariaVE para ayudar a Venezuela 🇻🇪❤️\n\nSi quieres ayudar: cadenasolidariave.vercel.app`
    );
    document.getElementById("share-wa-link").href =
      `https://api.whatsapp.com/send?text=${msg}`;
    document.getElementById("share-x-link").href =
      `https://twitter.com/intent/tweet?text=${msg}`;

  } catch (err) {
    console.error("Error al enviar:", err);
    alert("Hubo un problema al enviar. Por favor intenta de nuevo o escríbenos directamente por WhatsApp.");
    submitBtn.textContent = "Registrar mi donación";
    submitBtn.disabled = false;
  }
});

// Inicializar stats con guión hasta que carguen datos reales
document.getElementById("stat-donantes").textContent = "0";
document.getElementById("stat-recolecciones").textContent = "0";

async function actualizarContadores() {
  try {
    const res = await fetch(GAS_ENDPOINT);
    const data = await res.json();
    
    document.getElementById("stat-donantes").textContent = data.donantes;
    document.getElementById("stat-recolecciones").textContent = data.recolecciones;
    document.getElementById("stat-acopios").textContent = data.acopios;
  } catch (err) {
    console.error("Error actualizando contadores:", err);
  }
}

// Corre al cargar la página y cada 60 segundos
actualizarContadores();
setInterval(actualizarContadores, 60000);