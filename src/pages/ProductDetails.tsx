import React from 'react';
import { useSearchParams } from 'react-router-dom';
import '../styles/ProductDetails.css';
import { IProduct } from '../types/types';
import Button from '../UI/Button/Button';

const ProductDetails: React.FC = () => {
    const [searchparams] = useSearchParams();
    const product: IProduct = JSON.parse(`${searchparams.get('product')}`)
    const addToBasket = (product: IProduct) => {
        return 1
    }

    const getBasket = (product: IProduct) => {
        let basket: any = localStorage.getItem('basket');
        basket = basket ? basket : [];
        basket = typeof basket === 'string' ? JSON.parse(basket) : basket;
        for(let basketProd of basket)
            if(basketProd.id === product.id) return
        
        const newProd:IProduct = {
            ...product,
            productAmount: 1,
            staticPrice: product.price
        }
        
        basket?.push(newProd)

        localStorage.setItem('basket', JSON.stringify(basket));
    };

    return (
        <div className="product__details">
            <div className="product">
                <h3>{product.name}</h3>
                <div className="product__image__block">
                    <img src={`../${product.img}`} alt="product" className="product__img" />
                </div>
            </div>
            <div className="description">
                <h3>Описание:</h3>
                <br />
                <p>{product.description}</p>
                <h3 style={{margin: '20px 0'}}>Цена: { product.price }&#8376;</h3> 
                <h3 style={{marginBottom: 20}}>Дата публикации: { product.data }</h3>
                <Button onClick={() => getBasket(product)}>Добавить в корзину</Button>
            </div>
        </div>
    );
};

export default ProductDetails;