const mongoose = require("mongoose");

const asignaturaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  creditos: { type: Number, required: true },
  profesor: { type: String, required: true },
  descripcion: String,
  horario: String,
  aula: String,
  prerrequisitos: String,
  cupoMaximo: { type: Number, required: true },
});

const Asignatura = mongoose.model("Asignatura", asignaturaSchema);

module.exports = Asignatura;
