import React, { ReactElement } from 'react';
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

export default function NavBar(): ReactElement {
    return (
        <HStack spacing="10px" p="5">
            <Center>
                <Text>Massogui portal</Text>
            </Center>
            <Box flex="1">
                <Input type="text" />
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
