import React, { ReactElement, useState } from 'react';
import { Box, Flex, HStack, Text } from '@chakra-ui/layout';
import {
    Center,
    FormControl,
    FormHelperText,
    FormLabel,
    Input,
    Spacer,
} from '@chakra-ui/react';
import DropDown from 'components/Menus/DropDown';

type NavBarProps = {
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
};

export default function NavBar({ setSearchValue }: NavBarProps): ReactElement {
    const handleChange = (event: any) => {
        setSearchValue(event.target.value);
    };

    return (
        <HStack spacing="10px" p="5">
            <Center>
                <Text>Massogui portal</Text>
            </Center>
            <Box flex="1">
                <Input type="text" onBlur={handleChange} />
            </Box>
            <Center>
                <DropDown title="Mon compte" />
            </Center>
            <Center>
                <DropDown title="Mon parnier" />
            </Center>
        </HStack>
    );
}
