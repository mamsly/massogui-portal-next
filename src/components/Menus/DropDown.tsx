import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import React, { ReactElement } from 'react';

type DropDownProps = {
    title: string;
};

export default function DropDown({ title }: DropDownProps): ReactElement {
    return (
        <Menu>
            <MenuButton as={Button}>{title}</MenuButton>
            <MenuList>
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
        </Menu>
    );
}
