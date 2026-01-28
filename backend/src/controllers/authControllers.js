import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

/* REGISTRO */
export const register = async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    if (!nombre || !email || !password) {
      return res.status(400).json({ success: false, msg: "Todos los campos son obligatorios" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, msg: "El usuario ya existe" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      nombre,
      email,
      password: hashedPassword,
    });

    return res.status(201).json({
      success: true,
      msg: "Usuario registrado correctamente",
      userId: user._id,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, msg: "Error en el servidor" });
  }
};

/* LOGIN */
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ success: false, msg: "Todos los campos son obligatorios" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, msg: "Email o contraseña incorrectos" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, msg: "Email o contraseña incorrectos" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });

    return res.status(200).json({
      success: true,
      msg: "Login correcto",
      token,
      user: {
        id: user._id,
        nombre: user.nombre,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, msg: "Error en el servidor" });
  }
};
