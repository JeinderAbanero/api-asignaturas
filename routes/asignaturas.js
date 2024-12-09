const express = require("express");
const Asignatura = require("../models/asignatura");

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

    await nuevaAsignatura.save();
    return res.status(201).json({ message: "Asignatura creada con éxito" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al crear la asignatura" });
  }
});

module.exports = router;
