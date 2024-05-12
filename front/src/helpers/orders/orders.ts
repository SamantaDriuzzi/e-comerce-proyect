import { IOrders } from "@/types/product/types";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

async function createOrder(productsId: number[], token: string | null) {
  try {
    if (!productsId.length) {
      throw new Error("No products in the order");
    } else if (!token) {
      throw new Error("No token provided");
    }

    const response = await fetch(`${API_URL}/orders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
        'ngrok-skip-browser-warning': 'true'
      },
      body: JSON.stringify({
        products: productsId,
      }),
    });

    if (!response.ok) {
      throw new Error(`Failed to create order: ${response.statusText}`);
    }

    const orderData = await response.json();

    // Actualizar el localStorage con la nueva orden
    const userDataStr = localStorage.getItem("userData");
    if (userDataStr) {
      const userData = JSON.parse(userDataStr);
      if (userData) {
        userData.orders.push(orderData);
        localStorage.setItem("userData", JSON.stringify(userData));
      }
    }

    return orderData;
  } catch (error: any) {
    throw new Error(error.message);
  }
}
async function getOrders(token: string): Promise<IOrders[]> {
  try {
    if (!token) {
      throw new Error("No token provided");
    }

    const response = await fetch(`http://localhost:3001/users/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch orders");
    }

    return response.json();
  } catch (error: any) {
    throw new Error(error);
  }
}
export { createOrder, getOrders };
