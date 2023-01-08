import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import '../styles/Products.css';
import { IProduct } from '../types/types';
import Button from '../UI/Button/Button';

interface ProductProps extends React.PropsWithChildren {
    product: IProduct
};

const Product: React.FC<ProductProps> = ({product}) => {
    const navigate = useNavigate();

    const productDetails = (product: IProduct) => {
        navigate({pathname: `/product/${product.id}`, search: createSearchParams({
            product: JSON.stringify(product)
        }).toString()});
    };

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
        <div className="product">
            <h4 className="product__name">{product.name}</h4>
            <div className="product__image__block">
                <img className="product__img" src={product.img} alt="product" />
            </div>
            <h4 className="product__price">Цена:  {product.price}&#x20B8;</h4>
            <h4 className="product__category">Категория:    
            {product.category === 'computer' ? ' Компьютер' : product.category === 'toy' ? ' Игрушки' : ' Одежда'}
            </h4>
            <Button onClick={() => getBasket(product)}>Добавить в корзину</Button>
            <Button onClick={() => productDetails(product)}>Подробнее</Button>
        </div>
    )
}

export default Product;