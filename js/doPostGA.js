// CadenaSolidariaVE — Google Apps Script v2
// Cambios respecto a v1:
// - Donantes y repartidores van a hojas separadas del Sheet
// - Email diferenciado por tipo

const EMAIL_COORDINADOR = "cadenasolidariave@gmail.com"; // ← tu Gmail real

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const data = JSON.parse(e.postData.contents);
    const hora = new Date(data.timestamp).toLocaleString("es-CO", { timeZone: "America/Bogota" });

    if (data.entrega === "vehiculo") {
      // ── REPARTIDOR → hoja "Repartidores"
      const hoja = obtenerHoja(ss, "Repartidores", [
        "Timestamp", "Nombre", "WhatsApp", "Ciudad", "Zona", "Notas"
      ]);
      hoja.appendRow([hora, data.nombre, "'"+ data.whatsapp, data.ciudad || "", data.zona, data.notas || ""]);
      hoja.getRange(hoja.getLastRow(), 1, 1, 6).setBackground("#d4edda");
      enviarEmail(data, "repartidor");

    } else {
      // ── DONANTE → hoja "Donantes"
      const hoja = obtenerHoja(ss, "Donantes", [
        "Timestamp", "Nombre", "WhatsApp", "Ciudad", "Zona", "Donaciones", "Entrega", "Notas"
      ]);
      const entregaLabel =
        data.entrega === "llevo"   ? "Lleva al acopio" :
        data.entrega === "recoger" ? "⚠️ Necesita recolección" : data.entrega;

      hoja.appendRow([hora, data.nombre,"'"+ data.whatsapp, data.ciudad || "", data.zona, data.donaciones, entregaLabel, data.notas || ""]);

      if (data.entrega === "recoger") {
        hoja.getRange(hoja.getLastRow(), 1, 1, 8).setBackground("#fff3cd");
      }

      enviarEmail(data, "donante");
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    console.error("Error:", err);
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function obtenerHoja(ss, nombre, encabezados) {
  let hoja = ss.getSheetByName(nombre);
  if (!hoja) {
    hoja = ss.insertSheet(nombre);
    hoja.appendRow(encabezados);
    hoja.getRange(1, 1, 1, encabezados.length)
      .setFontWeight("bold")
      .setBackground("#f0f0f0");
  }
  return hoja;
}

function enviarEmail(data, tipo) {
  let asunto, cuerpo;

  if (tipo === "repartidor") {
    asunto = `🚗 Nuevo repartidor — ${data.nombre} (${data.ciudad} - ${data.zona})`;
    cuerpo = `
Nuevo voluntario con vehículo registrado en CadenaSolidariaVE
==============================================================

👤 Nombre:    ${data.nombre}
📱 WhatsApp:  ${data.whatsapp}
🏙️ Ciudad:    ${data.ciudad || "—"}
📍 Zona:      ${data.zona}
📝 Notas:     ${data.notas || "—"}

Este voluntario puede ayudar a RECOGER donaciones en su zona.
Coordina con él para optimizar las rutas de recolección.
    `.trim();

  } else {
    const necesitaRecoleccion = data.entrega === "recoger";
    asunto = necesitaRecoleccion
      ? `⚠️ RECOLECCIÓN — ${data.nombre} (${data.ciudad} - ${data.zona})`
      : `📦 Nueva donación — ${data.nombre} (${data.ciudad} - ${data.zona})`;

    cuerpo = `
Nueva donación registrada en CadenaSolidariaVE
===============================================

👤 Nombre:     ${data.nombre}
📱 WhatsApp:   ${data.whatsapp}
🏙️ Ciudad:     ${data.ciudad || "—"}
📍 Zona:       ${data.zona}
📦 Donaciones: ${data.donaciones}
🚚 Entrega:    ${necesitaRecoleccion ? "⚠️ NECESITA RECOLECCIÓN EN CASA" : "Lleva al centro de acopio"}
📝 Notas:      ${data.notas || "—"}

${necesitaRecoleccion ? "⚠️ Coordina un repartidor de su zona para recoger." : ""}
    `.trim();
  }

  MailApp.sendEmail({ to: EMAIL_COORDINADOR, subject: asunto, body: cuerpo });
}

function testDonante() {
  doPost({ postData: { contents: JSON.stringify({
    timestamp: new Date().toISOString(),
    nombre: "María Prueba",
    whatsapp: "+57 300 111 2222",
    ciudad: "Bogotá",
    zona: "Suba",
    donaciones: "alimentos, ropa",
    entrega: "recoger",
    notas: "Tengo 4 cajas"
  })}});
}

function testRepartidor() {
  doPost({ postData: { contents: JSON.stringify({
    timestamp: new Date().toISOString(),
    nombre: "Carlos Prueba",
    whatsapp: "+57 310 333 4444",
    ciudad: "Bogotá",
    zona: "Engativá",
    donaciones: "",
    entrega: "vehiculo",
    notas: "Disponible sábados y domingos, tengo camioneta"
  })}});
}