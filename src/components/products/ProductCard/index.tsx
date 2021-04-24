import { ReactElement } from 'react';
import Image from 'next/image';
import { Badge, Box } from '@chakra-ui/layout';

const imageDimension = '300';

type ProductProps = {
    id?: string;
    name: string;
    description: string;
    contentBase64: string;
};

function ProductCard({
    id,
    name,
    description,
    contentBase64,
}: ProductProps): ReactElement {
    return (
        <Box borderRadius="lg" border="1px solid" w="300px" m="2" p="1">
            <Image
                data-testid="image"
                src={contentBase64}
                alt="image introuvable"
                width={imageDimension}
                height={imageDimension}
            />
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge
                        data-testid="badge"
                        borderRadius="full"
                        colorScheme="teal">
                        New
                    </Badge>
                </Box>
                <Box data-testid="name">{name}</Box>
                <Box data-testid="description">{description}</Box>
            </Box>
        </Box>
    );
}

export { ProductCard };
