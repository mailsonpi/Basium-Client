import React from "react";
import { Flex, Image, ListItem, List, Text, Grid } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
    const router = useRouter();
    return (
        <Flex
            flexDirection="column"
            bg="secondary.900"
            px={{ base: 10, xl: "10%" }}
            py={10}
        >
            <Image
                src="/img/marca_cabecalho.png"
                alt="Logo"
                w={40}
                mb={5}
                mx={{ base: "auto", md: "0" }}
            />
            <Flex
                flexWrap="wrap"
                justifyContent="space-between"
                flexDirection={{ base: "column", lg: "row" }}
            >
                <Flex gap={2} mx="auto" mb={10}>
                    <Image
                        w={{ base: 100, md: 150 }}
                        src="/MARCAGIRASSOL.svg"
                        alt="Girassol"
                    />
                    <Image
                        w={{ base: 100, md: 150 }}
                        src="/MARCAZILLA.svg"
                        alt="Zilla"
                    />
                </Flex>
                <Grid
                    gridTemplateColumns={{
                        base: "1fr",
                        lg: "repeat(2,1fr)",
                        xl: "repeat(3,1fr)",
                    }}
                    color="white"
                    listStyleType="none"
                    justifyContent="center"
                    mx="auto"
                >
                    <List mx={{ base: "auto", sm: "none" }}>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            fontWeight={600}
                            mb={5}
                            cursor="default"
                        >
                            Sobre
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Sobre nós
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Informação de entrega
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Política de privacidade
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Contato
                        </ListItem>
                    </List>
                    <List
                        mx={{ base: "auto", sm: "none" }}
                        my={{ base: 10, md: 0 }}
                    >
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            fontWeight={600}
                            mb={5}
                            cursor="default"
                        >
                            Cliente
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                            onClick={() => router.push("/cart")}
                        >
                            Ver Carrinho
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Minha lista de Desejos
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Acompanhar meu Pedido
                        </ListItem>
                        <ListItem
                            textAlign={{ base: "center", md: "left" }}
                            transition=".4s"
                            _hover={{ opacity: 0.4 }}
                            cursor="pointer"
                        >
                            Ajuda
                        </ListItem>
                    </List>
                    <List mx={{ base: "auto", sm: "none" }}>
                        <ListItem
                            fontWeight={600}
                            mb={5}
                            cursor="default"
                            textAlign={{ base: "center", md: "left" }}
                        >
                            Em breve nosso app
                        </ListItem>
                        <ListItem
                            cursor="default"
                            textAlign={{ base: "center", md: "left" }}
                        >
                            App Store / Google Play
                        </ListItem>
                        <Flex gap={3} mt={5} flexWrap="wrap" mx="auto">
                            <Image
                                rounded="md"
                                src="/img/pay/app.jpg"
                                alt="appstore"
                                mx="auto"
                            />
                            <Image
                                rounded="md"
                                src="/img/pay/play.jpg"
                                alt="googlePlay"
                                mx="auto"
                            />
                        </Flex>
                        <ListItem cursor="default" mt={5}>
                            Informações de pagamentos
                        </ListItem>
                        <ListItem cursor="default" mt={2}>
                            <Image
                                rounded="md"
                                src="/img/pay/pay.png"
                                alt="appstore"
                            />
                        </ListItem>
                    </List>
                </Grid>
            </Flex>
            <Flex flexDir="column">
                <Text fontSize={14} mt={5} as="i">
                    Rua Cel Teixeira – Alameda Jonas Ferreira Lima (Novo
                    Calçadão), 237, sala P2, em Jacobina – Bahia
                </Text>
                <Text fontSize={14} as="i">
                    (75) 98154-2072
                </Text>
            </Flex>
            <Text textAlign={{ base: "center", md: "left" }} mt={10}>
                © Estilo Basium, todos direitos reservados. 2023
            </Text>
        </Flex>
    );
};

export default Footer;
