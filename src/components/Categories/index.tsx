import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Categories: React.FC = () => {
    return (
        <Flex
            justifyContent="center"
            my={10}
            gap={{ base: 0, md: 5 }}
            direction="column"
        >
            <Flex justifyContent="center" gap={5} w="100%" flexWrap="wrap">
                <Flex
                    w="40%"
                    h={{ base: 200, md: 330 }}
                    minW={325}
                    mb={5}
                    bg="url('imagem_modacasual1.png')"
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    mx="auto"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={{ base: 32, md: 38 }}>
                        Seja elegante no seu trabalho
                    </Text>
                    <Text
                        fontSize={{ base: 16, md: 20 }}
                        mb={1}
                        fontWeight={600}
                    >
                        Mais estilo para seu trabalho.
                    </Text>
                    <Box
                        bg="secondary.800"
                        p={{ base: 2, md: 3 }}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    w="40%"
                    h={{ base: 200, md: 330 }}
                    minW={325}
                    mb={5}
                    bg="url('/imagem_modacorp1.png')"
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    mx="auto"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={{ base: 32, md: 42 }}>
                        Moda Casual
                    </Text>
                    <Text
                        fontSize={{ base: 16, md: 20 }}
                        mb={1}
                        fontWeight={600}
                    >
                        Seu dia-a-dia com mais estilo.
                    </Text>
                    <Box
                        bg="secondary.800"
                        p={{ base: 2, md: 3 }}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
            </Flex>
            <Flex justifyContent="center" gap={10} w="100%" flexWrap="wrap">
                <Flex
                    w="40%"
                    h={{ base: 200, md: 330 }}
                    minW={325}
                    mb={5}
                    bg="url('/imagem_acessorios1.png')"
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    mx="auto"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={{ base: 32, md: 42 }}>
                        Acessórios
                    </Text>
                    <Text
                        fontSize={{ base: 16, md: 20 }}
                        mb={1}
                        fontWeight={600}
                    >
                        Carteira, cintas e bolsas
                    </Text>
                    <Box
                        bg="secondary.800"
                        p={{ base: 2, md: 3 }}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    w="40%"
                    h={{ base: 200, md: 330 }}
                    minW={325}
                    mb={5}
                    bg="url('img/banner/b4.jpg')"
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    mx="auto"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={{ base: 32, md: 38 }}>
                        Amplie sua visão do mundo, com mais conhecimentos
                    </Text>
                    <Text
                        fontSize={{ base: 16, md: 20 }}
                        mb={1}
                        fontWeight={600}
                    >
                        te ajudamos no dia-a-dia.
                    </Text>
                    <Box
                        bg="secondary.800"
                        p={{ base: 2, md: 3 }}
                        cursor="pointer"
                        _hover={{
                            bg: "secondary.500",
                        }}
                        transition=".4s"
                        border="1px solid white"
                        w="max-content"
                    >
                        <Text cursor="pointer" fontWeight={600}>
                            Explorar
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Categories;
