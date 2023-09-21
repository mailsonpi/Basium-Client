import React from "react";
import MainLayout from "@/layout/MainLayout";
import { Center, Flex, Text, Heading, Button } from "@chakra-ui/react";
import Table from "@/components/Table";
import { useCheckSexSelected } from "@/context";
import { Counter } from "@/components/Counter";
import Image from "next/image";

const Cart = () => {
    const { sexSelected } = useCheckSexSelected();
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

Preço unitário: R$${item.price}.00

Valor Total: R$${item.price * item.quantity}.00

================
`;
                    }
                )}
Valor total do pedido: R$${total}.00
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
        <MainLayout
            navbar={{
                hasNavbar: true,
                colorTheming:
                    sexSelected === "masculine" ? "darkCyan" : "ligthPink",
            }}
        >
            <Flex
                flexDir="column"
                bg={sexSelected === "masculine" ? "secondary.900" : "white"}
            >
                <Center
                    h="40vh"
                    bg={
                        sexSelected === "masculine"
                            ? "url('banner_produtosmasculino.svg')"
                            : "url('banner_produtosfem.svg')"
                    }
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
                <Flex
                    direction="column"
                    alignItems="center"
                    border="1px solid"
                    borderColor="secondary.900"
                    p={5}
                    rounded="xl"
                    w={400}
                    mx="auto"
                >
                    <Flex alignItems="center" w="100%" gap={5}>
                        <Image
                            width={80}
                            height={80}
                            quality={100}
                            src="/img/products/f2.jpg"
                            alt="teste"
                        />
                        <Flex flexDirection="column">
                            <Text>Produto 1</Text>
                            <Counter />
                        </Flex>
                    </Flex>
                    <Flex gap={3} w="100%" mt={3}>
                        <Text color="secondary.900" cursor="pointer">
                            Excluir
                        </Text>
                        <Text color="secondary.900" cursor="pointer">
                            Comprar agora!
                        </Text>
                    </Flex>
                </Flex>
                <Button
                    w="max-content"
                    bg="primary.500"
                    color="white"
                    my={10}
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
