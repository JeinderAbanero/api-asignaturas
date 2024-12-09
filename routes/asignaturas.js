const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const asignaturasRoute = require("./routes/asignaturas"); // Aquí importas la ruta

require("dotenv").config();

const app = express();

// Configuración de CORS
app.use(cors());

// Middleware
app.use(bodyParser.json());

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Conectado a MongoDB"))
  .catch((error) => console.error("Error al conectar a MongoDB:", error));

// Rutas
app.use("/api/asignaturas", asignaturasRoute); // Usamos "/api/asignaturas" como prefijo de las rutas de asignaturas

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
