import React from "react";
import { Flex, Image, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { IPart } from "@/resources/products/masculino/camisas";
import { useCheckSexSelected } from "@/context";

interface IProps {
    product: IPart;
    onClick: () => void;
}

const CardProduct: React.FC<IProps> = ({ product, onClick }) => {
    const { sexSelected } = useCheckSexSelected();
    return (
        <Flex
            cursor="pointer"
            onClick={onClick}
            rounded={"30px"}
            p={3}
            w="100%"
            border="1px solid"
            borderColor={sexSelected === "masculine" ? "white" : "#f2eade"}
            flexDirection="column"
            mx="auto"
        >
            <Image rounded={"30px"} w="100%" src={product.image} alt="camisa" />
            <Text
                mt={5}
                fontSize={{ base: 14, md: 18 }}
                color={sexSelected === "masculine" ? "white" : "secondary.900"}
            >
                {product.marca}
            </Text>
            <Text
                fontWeight={600}
                noOfLines={2}
                fontSize={{ base: 14, md: 18 }}
                color={sexSelected === "masculine" ? "white" : "secondary.900"}
            >
                {product.nome}
            </Text>
            <Flex justifyContent="space-between" alignItems="center">
                <Flex direction="column">
                    <Flex mb={1}>
                        <AiFillStar color="#F0B112" />
                        <AiFillStar color="#F0B112" />
                        <AiFillStar color="#F0B112" />
                        <AiFillStar color="#F0B112" />
                        <AiFillStar color="#F0B112" />
                    </Flex>
                    <Text
                        fontWeight={600}
                        fontSize={{ base: 12, md: 18 }}
                        color={
                            sexSelected === "masculine"
                                ? "white"
                                : "secondary.900"
                        }
                    >
                        R${product.price}.00
                    </Text>
                </Flex>
                <Flex
                    bg="primary.300"
                    _hover={{
                        bg: "primary.500",
                    }}
                    transition=".6s"
                    p={{ base: 1, md: 3 }}
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
