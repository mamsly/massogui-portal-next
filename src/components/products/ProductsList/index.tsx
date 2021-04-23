import { Box, Flex, HStack } from '@chakra-ui/layout';
import { Product } from 'lib/api/products/types';
import { ReactElement } from 'react';
import { ProductCard } from '../ProductCard';

type ProductsListProps = {
    products: Product[];
};

function ProductsList({ products }: ProductsListProps): ReactElement {
    return (
        <Flex flexDirection="row" flexWrap="wrap">
            {products.map(({ id, name, description, contentBase64 }) => {
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
