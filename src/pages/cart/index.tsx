import React from "react";
import MainLayout from "@/layout/MainLayout";
import { Center, Flex, Text, Heading, Button } from "@chakra-ui/react";
import Table from "@/components/Table";
import { IPart } from "@/resources/products/masculino/camisas";

const Cart = () => {
    const sendMessage = () => {
        if (typeof window !== "undefined") {
            const local = localStorage.getItem("cartItems");
            if (local) {
                const items = JSON.parse(local);
                const total = items.reduce(
                    (soma: any, elemento: any) =>
                        soma + elemento.price * elemento.quantity,
                    0
                );
                const message = `Olá, gostaria de fazer o seguinte pedido: ${items.map(
                    (item: any) => {
                        return `
                        ================
                        ID: ${item.id}
                        Produto: ${item.nome}
                        Tamanho: ${item.size}
                        Quantidade: ${item.quantity}
                        Preço unitário: R$${item.price},00
                        Valor Total: R$${item.price * item.quantity},00
                        ================
                        `;
                    }
                )}
                Valor total do pedido: R$${total},00
                `;

                const numeroTelefone = "+5575981986136";
                const url = `whatsapp://send?phone=${numeroTelefone}&text=${encodeURIComponent(
                    message
                )}`;
                window.location.href = url;
            }
        }
    };

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
                    onClick={sendMessage}
                >
                    Finalizar Pedido
                </Button>
            </Flex>
        </MainLayout>
    );
};

export default Cart;
