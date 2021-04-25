import { Layout } from 'components/Layout/Layout';
import { ProductsList } from 'components/products/ProductsList';
import React, { ReactElement } from 'react';

export default function HomePage(): ReactElement {
    return (
        <Layout>
            <ProductsList />
        </Layout>
    );
}
