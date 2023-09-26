import React from "react";
import Image from "next/image";
import { Flex, Center, Text, Box, Select } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";
import { Counter } from "../Counter";

interface IProps {
    part: {
        nome: string;
        tamanhos: string[];
        cores?: string[];
        price: number;
        quantidade: number;
    };
    onClickRemove: () => void;
    onClickAttQuantity: (e: number) => void;
    onClickAttColor: (e: string) => void;
}

const CartProductCard: React.FC<IProps> = ({
    part,
    onClickAttQuantity,
    onClickRemove,
    onClickAttColor,
}) => {
    return (
        <Flex alignItems="center" w="100%" gap={5}>
            <Image
                width={150}
                height={150}
                style={{ borderRadius: "10px" }}
                quality={100}
                src="/img/products/f2.jpg"
                alt="teste"
            />
            <Flex
                flexDirection="column"
                justifyContent="space-between"
                h="100%"
                w="100%"
            >
                <Text color="red.700" fontSize={24} fontWeight={600}>
                    {part.nome}
                </Text>
                <Flex gap={5} justifyContent="space-between" w="100%">
                    <Flex gap={5} w="100%">
                        <Flex gap={5}>
                            <Box>
                                <Text color="red.700">Tamanho:</Text>
                                <Select
                                    w={100}
                                    bg="transparent"
                                    border="1px solid red.700"
                                    fontSize={12}
                                    variant="cart"
                                >
                                    {part.tamanhos.map((item, index) => (
                                        <option key={index + item}>
                                            {item}
                                        </option>
                                    ))}
                                </Select>
                            </Box>
                            <Flex direction="column">
                                <Text color="red.700">Quantidade:</Text>
                                <Counter
                                    onChange={onClickAttQuantity}
                                    quantity={part.quantidade}
                                />
                            </Flex>
                            {part.cores && (
                                <Box>
                                    <Text color="red.700">Cores:</Text>
                                    <Select
                                        w={100}
                                        bg="transparent"
                                        border="1px solid red.700"
                                        fontSize={12}
                                        variant="cart"
                                        onChange={({ target: { value } }) =>
                                            onClickAttColor(value)
                                        }
                                    >
                                        {part.cores.map((item, index) => (
                                            <option key={index + item}>
                                                {item}
                                            </option>
                                        ))}
                                    </Select>
                                </Box>
                            )}
                        </Flex>
                    </Flex>
                    <Flex>
                        <Text
                            color="red.700"
                            cursor="pointer"
                            fontSize={22}
                            textAlign="center"
                            alignSelf="flex-end"
                            mr={3}
                        >
                            R${part.price},00
                        </Text>
                        <Flex direction="column">
                            <Text
                                color="red.700"
                                cursor="pointer"
                                fontSize={16}
                                textAlign="center"
                                fontWeight={600}
                            >
                                Excluir
                            </Text>
                            <Center
                                onClick={onClickRemove}
                                p={3}
                                bg="red.700"
                                transition=".4s"
                                _hover={{
                                    bg: "red.500",
                                }}
                                rounded="20px"
                                h="max-content"
                                cursor="pointer"
                            >
                                <RiDeleteBin5Line color="white" size={25} />
                            </Center>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default CartProductCard;
