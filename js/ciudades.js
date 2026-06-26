/**
 * ciudades.js
 * Mapeo de ciudades → localidades disponibles.
 * Se usa en form.js para filtrar dinámicamente.
 */

const CIUDADES = {
  bogota: {
    nombre: "Bogotá",
    localidades: [
      "Usaquén", "Chapinero", "Santa Fe", "San Cristóbal", "Usme", "Tunjuelito",
      "Bosa", "Kennedy", "Fontibón", "Engativá", "Suba", "Barrios Unidos",
      "Teusaquillo", "Los Mártires", "Antonio Nariño", "Puente Aranda",
      "La Candelaria", "Rafael Uribe Uribe", "Ciudad Bolívar"
    ]
  },
  medellin: {
    nombre: "Medellín",
    localidades: ["Poblado", "Laureles", "Centro", "Envigado", "Bello"]
  },
  cali: {
    nombre: "Cali",
    localidades: ["Jorge Zawadsky", "Centro", "San Fernando", "Norte", "Sur"]
  },
  barranquilla: {
    nombre: "Barranquilla",
    localidades: ["Ciudad Jardín"]
  },
  cucuta: {
    nombre: "Cúcuta",
    localidades: ["Zona Industrial"]
  }
};