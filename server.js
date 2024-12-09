const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const asignaturasRoute = require("./routes/asignaturas");
require("dotenv").config();

const app = express();

// Configuración de CORS para permitir solicitudes desde tu frontend desplegado en Vercel
const corsOptions = {
  origin: "https://react-eh9ml1ze1-jeinders-projects.vercel.app", // La URL de tu frontend desplegado
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type",
};

app.use(cors(corsOptions)); // Usa CORS con la configuración personalizada

// Middleware
app.use(bodyParser.json());

// Conectar a MongoDB
console.log("Conectando a MongoDB con URI:", process.env.MONGO_URI);

mongoose
  .connect(process.env.MONGO_URI) // Elimina las opciones obsoletas
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.error("Error al conectar a MongoDB:", error));

// Rutas
app.use("/api/asignaturas", asignaturasRoute);

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
