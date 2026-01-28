// ACCESORIOS
import anilloOro from "../assets/images/accesorios/anillooro.jpg";
import lentesSol from "../assets/images/accesorios/lentesdemujersol.jpg";
import relojPulsera from "../assets/images/accesorios/relojdepulsera.jpg";

// ELECTRONICA
import auricularDj from "../assets/images/electronica/auriculardj.jpg";
import auricularesBt from "../assets/images/electronica/auricularesbluethooth.jpg";
import notebook from "../assets/images/electronica/notebook.jpg";

// ROPA
import remeraBlanca from "../assets/images/ropa/remerablanca.jpg";
import remeraHombre from "../assets/images/ropa/remerahombre.jpg";
import shortsPlaya from "../assets/images/ropa/shortsdeplaya.jpg";

const products = [
  {
    _id: "1",
    nombre: "Anillo de Oro",
    descripcion: "Anillo de oro clásico",
    precio: 45000,
    categoria: "accesorios",
    imagen: anilloOro,
  },
  {
    _id: "2",
    nombre: "Lentes de Sol",
    descripcion: "Lentes de sol para mujer",
    precio: 18000,
    categoria: "accesorios",
    imagen: lentesSol,
  },
  {
    _id: "3",
    nombre: "Reloj de Pulsera",
    descripcion: "Reloj elegante de pulsera",
    precio: 35000,
    categoria: "accesorios",
    imagen: relojPulsera,
  },

  {
    _id: "4",
    nombre: "Auricular DJ",
    descripcion: "Auricular profesional para DJ",
    precio: 52000,
    categoria: "electronica",
    imagen: auricularDj,
  },
  {
    _id: "5",
    nombre: "Auriculares Bluetooth",
    descripcion: "Auriculares inalámbricos",
    precio: 28000,
    categoria: "electronica",
    imagen: auricularesBt,
  },
  {
    _id: "6",
    nombre: "Notebook",
    descripcion: "Notebook para estudio y trabajo",
    precio: 420000,
    categoria: "electronica",
    imagen: notebook,
  },

  {
    _id: "7",
    nombre: "Remera Blanca",
    descripcion: "Remera blanca de algodón",
    precio: 9000,
    categoria: "ropa",
    imagen: remeraBlanca,
  },
  {
    _id: "8",
    nombre: "Remera Hombre",
    descripcion: "Remera casual para hombre",
    precio: 11000,
    categoria: "ropa",
    imagen: remeraHombre,
  },
  {
    _id: "9",
    nombre: "Short de Playa",
    descripcion: "Short cómodo para verano",
    precio: 13000,
    categoria: "ropa",
    imagen: shortsPlaya,
  },
];

export default products;
