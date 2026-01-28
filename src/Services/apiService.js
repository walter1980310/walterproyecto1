const API_URL = "http://localhost:3000/api";

export const getProducts = async () => {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Error al obtener los productos");
  }

  const data = await response.json();
  return data;
};
