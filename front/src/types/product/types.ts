import Image from "next/image";
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}
export interface BuyProducts {
  productId: number;
  quantity: number;
  image: string;
  name: string;
  description: string;
  price: number;
}
export interface IOrders {
  id: number;
  date: Date;
  status: string;
  products: Product[];
}
