const API_URL = process.env.API_URL;

export const getProducts = async () => {
  try {
    const res = await fetch(`${API_URL}/products`, {
      cache: "no-cache",
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    const products = await res.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};
export const getProductsById = async (id: string) => {
  try {
    const response = await fetch(`${API_URL}/products/${id}`, {
      cache: "no-cache",
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });
    const product = await response.json();
    return product;
  } catch (error: any) {
    throw new Error(error);
  }
};
