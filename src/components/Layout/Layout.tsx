import { ReactElement, ReactNode } from 'react';
import { Box, Container, Flex } from '@chakra-ui/layout';
import NavBar from 'components/NavBar/NavBar';

type LayoutProps = {
    children: ReactNode;
};
export function Layout({ children }: LayoutProps): ReactElement {
    return (
        <Container maxW="1800px">
            <NavBar />
            {children}
        </Container>
    );
}
