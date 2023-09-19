import React from "react";
import MainLayout from "@/layout/MainLayout";
import { Center, Flex, Text, Heading, Button } from "@chakra-ui/react";
import Table from "@/components/Table";

const Cart = () => {
    return (
        <MainLayout navbar={{ hasNavbar: true, colorTheming: "darkCyan" }}>
            <Flex flexDir="column" bg="secondary.900">
                <Center
                    h="40vh"
                    bg="url('banner_produtosmasculino.svg')"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    mb={5}
                    flexDirection="column"
                    gap={5}
                >
                    <Heading fontSize={50}>Carrinho</Heading>
                    <Text fontSize={20}>
                        Adicione seu código de cupom e economize até 70%!
                    </Text>
                </Center>
                <Table />
                <Button
                    w="max-content"
                    bg="primary.500"
                    color="white"
                    mt={5}
                    mx="auto"
                    _hover={{
                        bg: "primary.400",
                    }}
                >
                    Finalizar Pedido
                </Button>
            </Flex>
        </MainLayout>
    );
};

export default Cart;
