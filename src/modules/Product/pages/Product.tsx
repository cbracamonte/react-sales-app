import React, { useEffect, useState } from "react";

import ListProduct from "../components/ListProduct";
import { IProduct } from "../models/Product";
import { getProducts } from "../services/product.service";

const Product = () => {
	const [products, setProduct] = useState<IProduct[]>([]);

	const getProductsResponse = () => {
		const response = getProducts();
		setProduct(response);
	};

	useEffect(() => {
		getProductsResponse();
	}, []);

	return (
		<>
			<ListProduct products={products} />
		</>
	);
};

export default Product;
