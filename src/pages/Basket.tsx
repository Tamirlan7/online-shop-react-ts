import React from 'react';
import BasketProduct from '../components/BasketProduct';
import '../styles/Basket.css';
import { IProduct } from '../types/types';

const Basket: React.FC = () => {
    const [basket, setBasket] = React.useState<IProduct[] | null>(JSON.parse(`${localStorage.getItem('basket')}`))

    return (
        <div id="main__basket">
            <h1>Список добавленных товаров:</h1>
            <div id="basket">
                <div id="basket__products">
                    {basket?.map(product => {
                        return <BasketProduct basket={basket} product={product} setBasket={setBasket} key={product.id}/>
                    })}
                </div>
                <div id="sum__of__busket">
                    <div>
                        <h3>Общая стоимость: { basket?.reduce((sum, product) => sum + Number(product.price), 0) } &#x20B8;</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Basket;
