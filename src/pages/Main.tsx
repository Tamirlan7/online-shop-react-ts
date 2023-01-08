import React from 'react';
import Products from '../components/Products';
import Server from '../API/Server';
import { useFetch } from '../hooks/useFetch';
import { IProduct, sortedProducts } from '../types/types';
import Sort from '../components/Sort';
import { useSearchedAndSelected } from '../hooks/useProducts';


const Main: React.FC = () => {
    const [products, setProducts] = React.useState<IProduct[]>([]);
    const [sortedProducts, setSortedProducts] = React.useState<sortedProducts>({search: '', selected: ''});
    
    const [fetching, error, loading] = useFetch(() => {
        return Server.getProducts().then((products: IProduct[]) => setProducts(products));
    });

    React.useEffect(() => {
        fetching();
    }, []);

    const sortedAndSearchedProducts = useSearchedAndSelected(products, sortedProducts.search, sortedProducts.selected)

    return (
        <div className='main'>
            <Sort search={sortedProducts.search} selected={sortedProducts.selected} setSortedProducts={setSortedProducts} />
            <Products loading={loading} products={sortedAndSearchedProducts} error={error} />
        </div>
    );
};

export default Main;