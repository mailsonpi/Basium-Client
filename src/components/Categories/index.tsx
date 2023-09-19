import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Categories: React.FC = () => {
    return (
        <Flex
            justifyContent="space-around"
            my={10}
            gap={{ base: 0, md: 5 }}
            direction="column"
        >
            <Flex
                justifyContent="space-between"
                mx="auto"
                w={"90%"}
                flexWrap="wrap"
            >
                <Flex
                    w="30%"
                    h={{ base: 200, md: 330 }}
                    minW={325}
                    mb={5}
                    bg="url('img/banner/imagem_livros.png')"
                    direction="column"
                    justifyContent="center"
                    bgSize="cover"
                    bgPosition="center"
                    mx="auto"
                    p={5}
                >
                    <Text fontWeight={600} fontSize={{ base: 32, md: 42 }}>
                        Livros
                    </Text>
                    <Text
                        fontSize={{ base: 16, md: 20 }}
                        mb={1}
                        fontWeight={600}
                    >
                        Amplie sua visão de mundo, com mais conhecimento.
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
                    w="30%"
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
                    <Text fontWeight={600} fontSize={{ base: 32, md: 42 }}>
                        Dicas
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
                <Flex
                    w="30%"
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
            <Flex
                justifyContent="space-between"
                mx="auto"
                w={"90%"}
                flexWrap="wrap"
            >
                <Flex
                    w="30%"
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
                    <Text fontWeight={600} fontSize={{ base: 32, md: 42 }}>
                        Coleção de Acessorios
                    </Text>
                    <Text
                        fontSize={{ base: 16, md: 20 }}
                        mb={1}
                        fontWeight={600}
                    >
                        Oculos, relógios e diversos.
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
                    w="30%"
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
                    <Text fontWeight={600} fontSize={{ base: 32, md: 42 }}>
                        Blusas Sociais
                    </Text>
                    <Text
                        fontSize={{ base: 16, md: 20 }}
                        mb={1}
                        fontWeight={600}
                    >
                        Mais elegância e estilo.
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
                    w="30%"
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
                    <Text fontWeight={600} fontSize={{ base: 32, md: 42 }}>
                        Moda Corporativa
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
            </Flex>
        </Flex>
    );
};

export default Categories;
