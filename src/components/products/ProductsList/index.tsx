import { Flex } from '@chakra-ui/layout';
import useFilterProducts from 'hooks/useFilterProducts';
import { useProducts } from 'lib/api/products/useProducts';
import { ReactElement } from 'react';
import { ProductCard } from '../ProductCard';

function ProductsList(): ReactElement {
    const { data } = useProducts();
    const products = useFilterProducts(data);

    return (
        <Flex flexDirection="row" flexWrap="wrap">
            {products &&
                products.map(({ id, name, description, contentBase64 }) => {
                    return (
                        <ProductCard
                            key={id}
                            name={name}
                            description={description}
                            contentBase64={contentBase64}
                        />
                    );
                })}
        </Flex>
    );
}

export { ProductsList };
