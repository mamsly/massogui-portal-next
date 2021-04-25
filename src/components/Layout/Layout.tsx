import React, { ReactElement, ReactNode, useState } from 'react';
import { Box, Container, Flex } from '@chakra-ui/layout';
import NavBar from 'components/NavBar/NavBar';
import { SearchProvider } from 'context/searchContext';

type LayoutProps = {
    children: ReactNode;
};
export function Layout({ children }: LayoutProps): ReactElement {
    const [searchValue, setSearchValue] = useState<string>(null);

    return (
        <Container maxW="1800px">
            <NavBar setSearchValue={setSearchValue} />
            <SearchProvider value={searchValue}>{children}</SearchProvider>
        </Container>
    );
}
