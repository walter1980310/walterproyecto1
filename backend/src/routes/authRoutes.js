import express from "express";
import { register, login } from "../controllers/authControllers.js";

const router = express.Router();

// ------------------ RUTAS DE AUTENTICACIÓN ------------------

// Registrar un usuario
// POST http://localhost:3000/api/auth/register
router.post("/register", register);

// Login de usuario
// POST http://localhost:3000/api/auth/login
router.post("/login", login);

export default router;
