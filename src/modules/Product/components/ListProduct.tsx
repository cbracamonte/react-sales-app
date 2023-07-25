import { IProduct } from "../models/Product";
import CardProduct from "./CardProduct";

const ListProduct = ({ products }: { products: IProduct[] }) => {
	return (
		<>
			{products.map((item, i) => (
				<CardProduct key={i} product={item}></CardProduct>
			))}
		</>
	);
};

export default ListProduct;
