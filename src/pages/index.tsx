import { Box } from '@chakra-ui/react';
import { Layout } from 'components/Layout/Layout';
import { ProductsList } from 'components/products/ProductsList';
import { useProducts } from 'lib/api/products/useProducts';
import React, { ReactElement } from 'react';

export default function HomePage(): ReactElement {
    const { data } = useProducts();
    console.log(data);
    return <Layout>{data && <ProductsList products={data.products} />}</Layout>;
}
