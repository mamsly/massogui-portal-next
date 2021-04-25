import { useSearchContext } from 'context/searchContext';
import { Product } from 'lib/api/products/types';
import { useEffect, useState } from 'react';

function useFilterProducts(data: any) {
    const [products, setProducts] = useState<Product[]>();
    const { value } = useSearchContext();

    useEffect(() => {
        if (value && data) {
            setProducts(
                data &&
                    data.products.filter((product) =>
                        product.name.toLowerCase().includes(value.toLowerCase())
                    )
            );
        } else {
            setProducts(data && data.products);
        }
    }, [data, value]);
    return products;
}

export default useFilterProducts;
