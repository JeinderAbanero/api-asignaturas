const express = require("express");
const Asignatura = require("../models/asignatura"); // Importa el modelo Asignatura

const router = express.Router();

// Ruta para crear una nueva asignatura
router.post("/", async (req, res) => {
  const {
    nombre,
    creditos,
    profesor,
    descripcion,
    horario,
    aula,
    prerrequisitos,
    cupoMaximo,
  } = req.body;

  try {
    // Crea una nueva instancia de Asignatura
    const nuevaAsignatura = new Asignatura({
      nombre,
      creditos,
      profesor,
      descripcion,
      horario,
      aula,
      prerrequisitos,
      cupoMaximo,
    });

    // Guarda la asignatura en la base de datos
    await nuevaAsignatura.save();

    // Responde con un mensaje de éxito
    return res.status(201).json({ message: "Asignatura creada con éxito" });
  } catch (error) {
    console.error("Error al crear la asignatura:", error);
    return res.status(500).json({ error: "Error al crear la asignatura" });
  }
});

// Ruta para obtener todas las asignaturas
router.get("/", async (req, res) => {
  try {
    const asignaturas = await Asignatura.find();
    res.status(200).json(asignaturas);
  } catch (error) {
    console.error("Error al obtener las asignaturas:", error);
    res.status(500).json({ error: "Error al obtener las asignaturas" });
  }
});

module.exports = router;
