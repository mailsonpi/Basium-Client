import React from "react";
import {
    Button,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerOverlay,
    useDisclosure,
    Text,
    Flex,
    Image,
    Box,
} from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineMenuFold } from "react-icons/ai";
import { BsHandbag } from "react-icons/bs";
import { useRouter } from "next/router";

const Drawable: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();

    return (
        <>
            <Flex
                justifyContent="space-between"
                bg="secondary.900"
                boxShadow="md"
                position="fixed"
                top={-1}
                left={-1}
                right={-5}
                h={90}
                w="101%"
                zIndex={9999}
                alignItems="center"
                px={4}
                display={{ base: "flex", md: "none" }}
            >
                <Box
                    color="black"
                    cursor="pointer"
                    onClick={() => router.push("/")}
                >
                    <Image src="/img/marca_cabecalho.png" alt="Logo" w={32} />
                </Box>
                <Flex gap={3} alignItems="center">
                    <Box
                        color="black"
                        cursor="pointer"
                        onClick={() => router.push("/cart")}
                    >
                        <BsHandbag size={25} />
                    </Box>
                    <Button
                        display={{ base: "block", md: "none" }}
                        onClick={isOpen ? onClose : onOpen}
                        bg="transparent"
                        _focus={{ bg: "transparent" }}
                        _hover={{ bg: "transparent" }}
                    >
                        <AiOutlineMenuFold color="black" size={25} />
                    </Button>
                </Flex>
            </Flex>
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="#E3E6F3">
                    <DrawerCloseButton />
                    <DrawerBody mt={28} gap={5} display="flex" flexDir="column">
                        <Link href="/">
                            <Text fontWeight={600} fontSize={20}>
                                Início
                            </Text>
                        </Link>
                        <Link href="/feminino">
                            <Text fontWeight={600} fontSize={20}>
                                Feminino
                            </Text>
                        </Link>
                        <Link href="/allProducts">
                            <Text fontWeight={600} fontSize={20}>
                                Todos os produtos
                            </Text>
                        </Link>
                        <Link href="/tip">
                            <Text fontWeight={600} fontSize={20}>
                                Dicas
                            </Text>
                        </Link>
                        <Link href="/about">
                            <Text fontWeight={600} fontSize={20}>
                                Sobre
                            </Text>
                        </Link>
                        <Link href="/contact">
                            <Text fontWeight={600} fontSize={20}>
                                Contato
                            </Text>
                        </Link>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};

export default Drawable;
