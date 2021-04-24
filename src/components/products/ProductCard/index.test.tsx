import { render } from '../../../../__jest__/utils';
import { ProductCard } from './';

const product = {
    id: 'sku_4595',
    name: 'Reblochon',
    category: 'fromage',
    description: 'fromage Reblochon',
    contentBase64: 'erererer',
};

describe('ProducCard', () => {
    it('should display badge', async () => {
        const { getByTestId } = await render(
            <ProductCard
                name={product.name}
                description={product.description}
                contentBase64={product.contentBase64}
            />
        );

        expect(getByTestId('badge')).toHaveTextContent('New');
    });

    it('should display product name', async () => {
        const { getByTestId } = await render(
            <ProductCard
                name={product.name}
                description={product.description}
                contentBase64={product.contentBase64}
            />
        );

        expect(getByTestId('name')).toHaveTextContent('Reblochon');
    });

    it('should display product description', async () => {
        const { getByTestId } = await render(
            <ProductCard
                name={product.name}
                description={product.description}
                contentBase64={product.contentBase64}
            />
        );

        expect(getByTestId('description')).toHaveTextContent(
            'fromage Reblochon'
        );
    });
});
