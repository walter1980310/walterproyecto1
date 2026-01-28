import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js";
import protectedRoutes from "./routes/protectedRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

// --- Agregado: CORS ---
app.use(cors());

// --- Agregado: logging de requests ---
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB conectado"))
  .catch((err) => console.error(err));

app.use("/api/auth", authRoutes);
app.use("/api", protectedRoutes);
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Backend funcionando");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
