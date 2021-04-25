import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

import { Product } from './types';

export async function fetchProducts(path: string) {
    try {
        const {
            data,
        }: AxiosResponse<{ products: Product[] }> = await axios.get(path);
        return data || undefined;
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
