import React from "react";
import {
    Flex,
    Text,
    Image,
    Heading,
    Select,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
    useToast,
} from "@chakra-ui/react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "@/layout/MainLayout";
import { IPart, camisas } from "@/resources/products/camisas";
import { novaColecao } from "@/resources/products/novaColecao";

const ProductDetails: NextPage = () => {
    const [product, setProduct] = React.useState<IPart>();
    const [quantity, setQuantity] = React.useState(1);
    const [size, setSize] = React.useState("não selecionado");
    const [relations, setRelations] = React.useState<IPart[]>([]);
    const router = useRouter();
    const { id } = router.query;
    const toast = useToast();

    const getProduct = () => {
        const allProducts = camisas.concat(novaColecao);
        const camisa = allProducts.find((item) => item.id === Number(id));
        setProduct(camisa);
    };
    const getRelations = () => {
        const produtosFiltrados = camisas.filter((produto) =>
            product?.category.every((cat) => produto.category.includes(cat))
        );
        setRelations(produtosFiltrados);
    };
    const addProduct = async () => {
        const allProducts = [];
        if (typeof window !== "undefined") {
            const local = localStorage.getItem("cartItems");
            const cartItems = await JSON.parse(local as string);
            allProducts.push(...(cartItems || []));
        }

        if (product) {
            const alreadyExist = allProducts.find(
                (item) => item.id === product.id
            );
            if (!alreadyExist) {
                allProducts.push({
                    ...product,
                    quantity,
                    size,
                });
                window.localStorage.setItem(
                    "cartItems",
                    JSON.stringify(allProducts)
                );
                toast({
                    title: "Produto Adicionado",
                    description: "O produto foi adicionado ao seu carrinho.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                router.push("/cart");
                return;
            }
            toast({
                title: "Produto Repetido",
                description: "Este produto já está em seu carrinho",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };
    React.useEffect(() => {
        getProduct();
        getRelations();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, product]);

    return (
        <MainLayout navbar={{ hasNavbar: true, colorTheming: "darkCyan" }}>
            <Flex
                direction="column"
                bgColor="secondary.900"
                bgPosition="cover"
                py={10}
                justifyContent="center"
                alignItems="center"
            >
                <Flex>
                    <Flex direction="column" gap={3}>
                        <Image
                            objectFit="cover"
                            src={product?.image}
                            alt={product?.nome}
                            w={500}
                            h={500}
                        />
                        <Flex gap={2}>
                            {relations.map((item, index) => {
                                return (
                                    index < 4 && (
                                        <Image
                                            w="25%"
                                            cursor="pointer"
                                            key={index}
                                            objectFit="cover"
                                            src={item.image}
                                            alt={item.nome}
                                            h={100}
                                        />
                                    )
                                );
                            })}
                        </Flex>
                    </Flex>
                    <Flex direction="column" ml={5}>
                        <Flex>
                            <Text
                                fontWeight={600}
                                color="black"
                                mb={5}
                                mr={2}
                                cursor="pointer"
                                transition=".4s"
                                _hover={{ color: "primary.500" }}
                                onClick={() => router.back()}
                            >
                                Home
                            </Text>
                            <Text>/ {product?.marca}</Text>
                        </Flex>
                        <Heading>{product?.nome}</Heading>
                        <Heading>R$ {product?.price}</Heading>
                        <Select
                            w="max-content"
                            onChange={(e) => setSize(e.target.value)}
                        >
                            {product?.tamanhos.map((item) => (
                                <option
                                    key={item}
                                    style={{ textAlign: "center" }}
                                >
                                    {item}
                                </option>
                            ))}
                        </Select>
                        <Flex mt={5} gap={4}>
                            <NumberInput
                                size="lg"
                                w={20}
                                defaultValue={1}
                                max={10}
                                min={1}
                                onChange={(e) => setQuantity(Number(e))}
                            >
                                <NumberInputField bg="primary.100" />
                                <NumberInputStepper bg="white">
                                    <NumberIncrementStepper bg="white" />
                                    <NumberDecrementStepper bg="white" />
                                </NumberInputStepper>
                            </NumberInput>
                            <Button
                                h="100%"
                                color="white"
                                bg="primary.700"
                                onClick={() => addProduct()}
                            >
                                Adicionar ao carrinho
                            </Button>
                        </Flex>
                    </Flex>
                </Flex>
            </Flex>
        </MainLayout>
    );
};

export default ProductDetails;
