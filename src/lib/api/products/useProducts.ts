import axios from 'axios';
import { useQuery } from 'react-query';

import { Product } from './types';

export async function fetchProducts(path: string) {
    try {
        const { data: products } = await axios.get(path);
        // const { data }: Api<{ products: Product[] }> = response;
        return products || undefined;
    } catch (error) {
        throw new Error(error);
    }
}

export function useProducts() {
    const path = `/api/mocks/products/mocks/products.json`;

    return useQuery(path, async () => main.fetchProducts(path), {
        retry: false,
    });
}

const main = {
    useProducts,
    fetchProducts,
};

export default main;
