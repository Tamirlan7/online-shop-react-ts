import React from 'react';
import '../styles/Products.css';
import { IProduct } from '../types/types';
import List from './List';
import Product from './Product';


interface ProductsProps extends React.PropsWithChildren {
    loading: boolean;
    error: string;
    products: IProduct[]
};

const Products: React.FC<ProductsProps> = ({loading, error, products}) => {

    return (
        <div id='products'>
            <List 
                list={products} 
                renderComponent={(product: IProduct ) => <Product product={product} key={product.id} />} 
                loading={loading}
                error={error}
            />
        </div>
    );
};

export default Products;