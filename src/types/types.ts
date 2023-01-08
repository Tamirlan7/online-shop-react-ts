export interface IProduct {
    id: number;
    name: string;
    description: string;
    img: string;
    price: number;
    category: string;
    data: string;
    staticPrice?: number;
    productAmount?: number;
};

export interface sortedProducts {
    search: string;
    selected: string;
};

export interface RouteObject {
    path?: string;
    element?: React.ReactNode | null;
};