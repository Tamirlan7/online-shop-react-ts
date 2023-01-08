import React from 'react';
import { createSearchParams, useNavigate } from 'react-router-dom';
import '../styles/Basket.css';
import { IProduct } from '../types/types';
import Button from '../UI/Button/Button';

interface BasketProductProps extends React.PropsWithChildren {
    product: IProduct
    basket: IProduct[]
    setBasket: (state: any) => void
};

const BasketProduct: React.FC<BasketProductProps> = ({product, setBasket, basket}) => {
    const navigate = useNavigate();

    function incrementAmount (id: number) {
        const newBasket: IProduct[] = basket.map((currentProduct: IProduct) => {
            if(currentProduct.productAmount) {
                if(currentProduct.id === id) {
                    currentProduct.productAmount += 1;
                    if(currentProduct.staticPrice) 
                        currentProduct.price = currentProduct.staticPrice * currentProduct.productAmount;
                };
            };
            return currentProduct;
        });

        setBasket(newBasket);

        localStorage.setItem('basket', JSON.stringify(newBasket))
    };

    function decrementAmount (id: number) {
        const newBasket: IProduct[] = basket.map((currentProduct: IProduct) => {
            if(currentProduct.productAmount) {
                if(currentProduct.id === id && currentProduct.productAmount >= 2) {
                    currentProduct.productAmount -= 1;
                    if(currentProduct.staticPrice) 
                        currentProduct.price = currentProduct.staticPrice * currentProduct.productAmount;
                };
            };
            return currentProduct;
        });

        setBasket(newBasket);

        localStorage.setItem('basket', JSON.stringify(newBasket))
    }

    function deleteFromBasket (id: number) {
        const newBasket: IProduct[] = basket.filter((currentProduct: IProduct) => currentProduct.id !== id);

        setBasket(newBasket);

        localStorage.setItem('basket', JSON.stringify(newBasket))
    }

    function getDetails (product: IProduct) {
        navigate({pathname: `/product/${product.id}`, search: createSearchParams({
            product: JSON.stringify(product)
        }).toString()});
    }

    return (
        <div className="basket__product">
            <h4 className="basket__product__name" style={{marginBottom: '15px'}}>{ product.name }</h4>
            <div className="basket__product__image__block">
                <img className="product__img" src={product.img} alt="basket__product__image" />
            </div>
            <h4 className="basket__product__price" style={{margin: '10px 0'}}>Цена:  { product.price }&#x20B8;</h4>
            <h4 className="basket__product__category">Количество: { product.productAmount }</h4>
            <div className="amount__buttons">
                <Button onClick={() => incrementAmount(product.id)}>+</Button>
                <Button 
                    style={{borderLeft: 'none'}}
                    onClick={() => decrementAmount(product.id)}
                >-</Button>
            </div>
            <Button 
                style={{margin: 10}}
                onClick={() => deleteFromBasket(product.id)}
            >Удалить из корзины</Button>
            <Button onClick={() => getDetails(product)}>
                Подробнее
            </Button>
        </div>
    );
};


export default BasketProduct;