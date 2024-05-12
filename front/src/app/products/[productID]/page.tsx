import ProductDetails from "@/components/Products/ProductDetails";
import { getProductsById } from "@/helpers/products/get/getProducts";

const ProductDetail = async ({ params }: { params: { productID: string } }) => {
  const product = await getProductsById(params.productID);

  return <ProductDetails product={product} />;
};

export default ProductDetail;
