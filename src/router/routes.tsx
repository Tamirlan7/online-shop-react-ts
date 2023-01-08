import React from 'react';
import Main from '../pages/Main';
import Basket from '../pages/Basket';
import ProductDetails from '../pages/ProductDetails';
import { RouteObject } from '../types/types';


const routes:RouteObject[] = [
    {
        path: '/',
        element: <Main />
    },
    {
        path: '/basket',
        element: <Basket />
    },
    {
        path: '/product/:id',
        element: <ProductDetails />
    },
];

export default routes;