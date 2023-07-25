import { Product } from "../models/Product";
import CardProduct from "./CardProduct";

const ListProduct = (products: Product[]) => {
  return (
    <>
        {products.map((item, index) => (<CardProduct key={index} product={item}></CardProduct>))}
    </>
  );
};

export default ListProduct;