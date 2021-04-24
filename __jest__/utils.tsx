import { ChakraProvider } from '@chakra-ui/react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

type WrapperProps = React.PropsWithChildren<{
    locale?: string;
}>;

function AllProviders({ children }: WrapperProps) {
    return <ChakraProvider>{children}</ChakraProvider>;
}

const customRender = async (ui: React.ReactElement, options?: any) =>
    render(ui, { wrapper: AllProviders, ...options });

export * from '@testing-library/react';
export { customRender as render, AllProviders };
