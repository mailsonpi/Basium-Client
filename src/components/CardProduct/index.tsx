import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { IPart } from "@/resources/products/camisas";

interface IProps {
    product: IPart;
    onClick: () => void;
}

const CardProduct: React.FC<IProps> = ({ product, onClick }) => {
    return (
        <Flex
            cursor="pointer"
            onClick={onClick}
            rounded={"30px"}
            p={3}
            w="100%"
            border="1px solid white"
            flexDirection="column"
            mx="auto"
        >
            <Image rounded={"30px"} w="100%" src={product.image} alt="camisa" />
            <Text mt={5}>{product.marca}</Text>
            <Text fontWeight={600}>{product.nome}</Text>
            <Flex justifyContent="space-between" alignItems="center">
                <Flex direction="column">
                    <Flex mb={1}>
                        <AiFillStar color="#F0B112" />
                        <AiFillStar color="#F0B112" />
                        <AiFillStar color="#F0B112" />
                        <AiFillStar color="#F0B112" />
                        <AiFillStar color="#F0B112" />
                    </Flex>
                    <Text fontWeight={600}>{product.price}</Text>
                </Flex>
                <Flex
                    bg="primary.300"
                    _hover={{
                        bg: "primary.500",
                    }}
                    transition=".6s"
                    p={3}
                    rounded="full"
                    border="1px solid white"
                >
                    <BsCart4 color="#fff" />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default CardProduct;
