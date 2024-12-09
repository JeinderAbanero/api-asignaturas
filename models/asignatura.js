// models/asignatura.js
const mongoose = require("mongoose");

const asignaturaSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  creditos: {
    type: Number,
    required: true,
  },
  profesor: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
  },
  horario: {
    type: String,
    required: true,
  },
  aula: {
    type: String,
    required: true,
  },
  prerrequisitos: {
    type: String,
  },
  cupoMaximo: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Asignatura", asignaturaSchema);
