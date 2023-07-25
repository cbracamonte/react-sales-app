import { Product } from '../models/Product';

const CardProduct = (product: Product) => {
  return (
    <section className="card">
        <header className="card-header">
            <h1 className="card-header__title">{product.name}</h1>
            <p className='card-header__description'>{product.description}</p>
        </header>
        <div className="card-body">
            <img src="https://via.placeholder.com/150" alt="Product image" className="card-body__img-product" />
            <p className="card-body__price">{product.price}</p>
        </div>
        <footer className="card-footer">
            <button className="card-footer__add">Agregar</button>
        </footer>
    </section>
  );
};

export default CardProduct;