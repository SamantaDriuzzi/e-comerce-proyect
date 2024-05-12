import { Product } from "@/types/product/types";

const topProducts: Product[] = [
  {
    id: 1,
    name: "Smartphone X12 Pro",
    description:
      "Último modelo de 6.5 pulgadas con cámara triple y 128GB de memoria interna.",
    price: 899.99,
    stock: 25,
    image:
      "https://samsungar.vtexassets.com/arquivos/ids/191115-800-auto?width=800&height=auto&aspect=true",
    categoryId: 1,
  },
  {
    id: 2,
    name: "Laptop Gamer MaxRev",
    description:
      "Portátil gamer con pantalla de 17 pulgadas, RTX 3070 y 16GB de RAM.",
    price: 1500,
    stock: 15,
    image:
      "https://samsungar.vtexassets.com/arquivos/ids/191115-800-auto?width=800&height=auto&aspect=true",
    categoryId: 2,
  },
  {
    id: 3,
    name: "Tablet S8 Ultra",
    description:
      "Tablet de 12 pulgadas perfecta para diseño y multitarea con lápiz óptico.",
    price: 599.99,
    stock: 30,
    image:
      "https://samsungar.vtexassets.com/arquivos/ids/191115-800-auto?width=800&height=auto&aspect=true",
    categoryId: 3,
  },
  
];

export default topProducts;
