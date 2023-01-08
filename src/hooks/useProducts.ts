import React from 'react';
import { IProduct } from "../types/types";

export function useSelected (products: IProduct[], selected: string) {
    const selectedProducts: IProduct[] = React.useMemo(() => {
        return products.sort((product1, product2) => {
            if(product1.category === selected && product2.category !== selected) return -1
            if(product1.category !== selected && product2.category === selected) return 1
            return 0
        })
    }, [products, selected]);

    return selectedProducts;
};

export function useSearchedAndSelected (products: IProduct[], search: string, selected: string) {
    const selectedProducts: IProduct[] = useSelected(products, selected);
    return [...selectedProducts].filter((product: IProduct) => product.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
}