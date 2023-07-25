import React, { useEffect, useState } from 'react';
import { getProducts } from '../services/product.service';
import { Product } from '../models/Product';
import ListProduct from '../components/ListProduct';

const Product = () => {
    const [products, setProduct] = useState<Product[]>([]);

    useEffect(() => {
        getProductsResponse();
      }, []);

    
    const getProductsResponse = async () => {
        const response = await getProducts();
        setProduct(response);
      }

  return (
    <>
      <ListProduct products={products} />
    </>
  );
};

export default Product;