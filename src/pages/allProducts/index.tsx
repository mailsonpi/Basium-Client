import React from "react";
import { NextPage } from "next";
import { Flex, Heading, Center, Text, Image, Grid } from "@chakra-ui/react";
import MainLayout from "@/layout/MainLayout";
import { IPart, camisas } from "@/resources/products/camisas";
import { novaColecao } from "@/resources/products/novaColecao";
import CardProduct from "@/components/CardProduct";
import { useRouter } from "next/router";
import { sapatos } from "@/resources/products/sapatos";
import { calcas } from "@/resources/products/calcas";

const AllProducts: NextPage = () => {
    const [allProduct, setAllProduct] = React.useState<IPart[]>([]);
    const router = useRouter();

    React.useEffect(() => {
        const items = camisas.concat(novaColecao, sapatos, calcas);
        setAllProduct(items);
    }, []);

    return (
        <MainLayout navbar={{ colorTheming: "darkCyan", hasNavbar: true }}>
            <Flex
                bgColor="secondary.900"
                bgPosition="cover"
                flexDirection="column"
            >
                <Center
                    h="40vh"
                    bg="url('banner_produtosmasculino.svg')"
                    backgroundSize="cover"
                    backgroundPosition="center"
                    mb={5}
                    flexDirection="column"
                    gap={5}
                >
                    <Heading fontSize={50}>Nossos Produtos</Heading>
                    <Text fontSize={20}>Use cupons e ganhe até 70% off!</Text>
                </Center>
                <Flex
                    flexWrap="nowrap"
                    justifyContent="space-between"
                    mx="5%"
                    pt={4}
                >
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_blusassociais.svg"
                        alt="Camisas"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_calçasjeans.svg"
                        alt="Camisas"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_tshirts.svg"
                        alt="Camisas"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_blazer.svg"
                        alt="Camisas"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_calçasalfaiataria.svg"
                        alt="Camisas"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_bermudas.svg"
                        alt="Camisas"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_calcados2.svg"
                        alt="Camisas"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_acessorios.svg"
                        alt="Camisas"
                    />
                </Flex>
                <Grid
                    w="85%"
                    mx="auto"
                    gridTemplateColumns={{
                        base: "1fr",
                        sm: "repeat(2,1fr)",
                        md: "repeat(3,1fr)",
                        lg: "repeat(4,1fr)",
                    }}
                    gap={10}
                    mt={14}
                >
                    {allProduct.map((product, index) => (
                        <CardProduct
                            key={index}
                            product={product}
                            onClick={() =>
                                router.push(`productDetails/${product.id}`)
                            }
                        />
                    ))}
                </Grid>
            </Flex>
        </MainLayout>
    );
};

export default AllProducts;
