export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export interface ProductProps {
  key: number;
  product: Product;
}
