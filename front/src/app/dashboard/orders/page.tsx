"use client";

import { getOrders } from "@/helpers/orders/orders";
import { IOrders } from "@/types/product/types";
import { userSession } from "@/types/user/user";
import Image from "next/image";
import { useEffect, useState } from "react";

function Orders() {
  const [orders, setOrders] = useState<IOrders[]>();
  const [token, setToken] = useState<userSession>();

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      const userToken = localStorage.getItem("userSession");
      setToken(JSON.parse(userToken!));
    }
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await getOrders(token?.token!);
        setOrders(response);
      } catch (error: any) {
        throw new Error(error);
      }
    }
    token && fetchData();
  }, [token]);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-5xl font-bold mb-8">Mis Compras</h1>
      <div className=" shadow-md rounded-lg p-4 flex mb-4 flex-wrap flex-row justify-center gap-8">
        {orders?.length! > 0 ? (
          orders?.map((order) => (
            <div
              key={order.id}
              className="bg-yellow-100 shadow-md rounded-lg p-6 justify-center hover:shadow-2xl hover:bg-orangeBase"
            >
              <h2 className="text-xl font-semibold mb-2">Orden #{order.id}</h2>
              <p className=" text-gray-500 ">
                Status:{" "}
                <span className=" text-green-500"> {order.status} </span>
              </p>
              <p className="text-gray-600">
                Fecha: {new Date(order.date).toLocaleString()}
              </p>
              <div className="flex mt-4 flex-wrap flex-row">
                {order.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center mr-4 flex-col"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                      className="rounded"
                    />
                    <p className="ml-2 font-semibold">{product.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p>No hay órdenes disponibles.</p>
        )}
      </div>
    </div>
  );
}

export default Orders;
