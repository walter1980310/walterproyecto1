import Product from "../models/Product.js";

/* ===============================
   CREAR PRODUCTO
================================ */
export const createProduct = async (req, res) => {
  try {
    console.log("BODY RECIBIDO:", req.body);

    let { nombre, descripcion, precio, imagen, categoria } = req.body;

    // Convertir precio a número
    precio = Number(precio);

    // Validación de campos
    if (!nombre || !descripcion || !precio || !imagen || !categoria) {
      return res.status(400).json({
        success: false,
        msg: "Nombre, descripción, precio, imagen y categoría son obligatorios",
      });
    }

    // Validación del precio
    if (isNaN(precio) || precio <= 0) {
      return res.status(400).json({
        success: false,
        msg: "Precio inválido",
      });
    }

    // Crear producto
    const nuevoProducto = new Product({
      nombre,
      descripcion,
      precio,
      imagen,
      categoria,
    });

    // Guardar en MongoDB
    await nuevoProducto.save();

    return res.status(201).json({
      success: true,
      data: nuevoProducto,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      msg: "Error al crear el producto",
      error: error.message,
    });
  }
};

/* ===============================
   OBTENER TODOS LOS PRODUCTOS
================================ */
export const getProducts = async (req, res) => {
  try {
    const productos = await Product.find();

    return res.json({
      success: true,
      data: productos,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error al obtener productos",
      error: error.message,
    });
  }
};

/* ===============================
   OBTENER PRODUCTO POR ID
================================ */
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const producto = await Product.findById(id);

    if (!producto) {
      return res.status(404).json({
        success: false,
        msg: "Producto no encontrado",
      });
    }

    return res.json({
      success: true,
      data: producto,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      msg: "Error al obtener el producto",
      error: error.message,
    });
  }
};
