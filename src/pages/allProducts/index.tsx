/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from "react";
import { NextPage } from "next";
import { Flex, Heading, Center, Text, Image, Grid } from "@chakra-ui/react";
import MainLayout from "@/layout/MainLayout";
import { IPart, category } from "@/resources/products/masculino/camisas";
import CardProduct from "@/components/CardProduct";
import { useRouter } from "next/router";
import Pagination from "@/components/Pagination";
import { useCheckSexSelected } from "@/context";
import { masculineProducts } from "@/resources/products/masculino";
import { feminineProducts } from "@/resources/products/feminino";

const AllProducts: NextPage = () => {
    const { sexSelected } = useCheckSexSelected();
    const [allProduct, setAllProduct] = React.useState<IPart[]>([]);
    const [page, setPage] = React.useState(1);
    const [itemPerPage, setItemPerPage] = React.useState(8);
    const [search, setSearch] = React.useState<category | null>(null);
    const ref = useRef<HTMLImageElement | null>(null);
    const router = useRouter();

    const typeOfProducts =
        sexSelected === "masculine" ? masculineProducts : feminineProducts;

    React.useEffect(() => {
        const items: IPart[] = [];
        typeOfProducts.map((item) => items.push(...item));
        setAllProduct(items);
    }, []);

    const indexLast = page * itemPerPage;
    const indexFirst = indexLast - itemPerPage;
    let productsList = allProduct.slice(indexFirst, indexLast);
    const renderItem = () => {
        if (search) {
            const filtered = allProduct.filter((item) =>
                item.category.includes(search)
            );
            productsList = filtered;
            return productsList;
        }
        return productsList;
    };
    const nextPage = () => {
        if (productsList.length >= itemPerPage) {
            setPage(page + 1);
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    };
    const prevPage = () => {
        if (page > 1) {
            setPage(page - 1);
            if (ref.current) {
                ref.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <MainLayout
            navbar={{
                colorTheming:
                    sexSelected === "masculine" ? "darkCyan" : "ligthPink",
                hasNavbar: true,
            }}
        >
            <Flex
                bgColor={
                    sexSelected === "masculine" ? "secondary.900" : "white"
                }
                bgPosition="cover"
                flexDirection="column"
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
                    <Heading
                        fontSize={50}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        Nossos Produtos
                    </Heading>
                    <Text
                        fontSize={20}
                        textAlign={{ base: "center", md: "left" }}
                    >
                        Use cupons e ganhe até 70% off!
                    </Text>
                </Center>
                <Flex
                    flexWrap="wrap"
                    justifyContent="space-between"
                    mx="5%"
                    pt={4}
                    gap={5}
                >
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_blusassociais.svg"
                        onClick={() => setSearch("Blusas Sociais")}
                        alt="Camisas"
                        cursor="pointer"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_calçasjeans.svg"
                        onClick={() => setSearch("Calças Jeans")}
                        alt="Camisas"
                        cursor="pointer"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        onClick={() => setSearch("T-Shirts")}
                        src="icone_tshirts.svg"
                        alt="Camisas"
                        cursor="pointer"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_blazer.svg"
                        onClick={() => setSearch("Blazer")}
                        alt="Camisas"
                        cursor="pointer"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_calçasalfaiataria.svg"
                        onClick={() => setSearch("Calças Alfaiataria")}
                        alt="Camisas"
                        cursor="pointer"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_bermudas.svg"
                        onClick={() => setSearch("Bermudas")}
                        alt="Camisas"
                        cursor="pointer"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_calcados2.svg"
                        onClick={() => setSearch("Calçados")}
                        alt="Camisas"
                        cursor="pointer"
                    />
                    <Image
                        _hover={{
                            boxShadow:
                                "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                        }}
                        transition=".3s"
                        w={{ base: 36, md: 40 }}
                        src="icone_acessorios.svg"
                        onClick={() => setSearch("Acessórios")}
                        alt="Camisas"
                        cursor="pointer"
                        ref={ref}
                    />
                </Flex>
                <Grid
                    w={{ base: "95%", md: "85%" }}
                    mx="auto"
                    gridTemplateColumns={{
                        base: "repeat(2,1fr)",
                        md: "repeat(3,1fr)",
                        lg: "repeat(4,1fr)",
                    }}
                    gap={{ base: 3, md: 10 }}
                    mt={14}
                >
                    {renderItem().map((product, index) => (
                        <CardProduct
                            key={index}
                            product={product}
                            onClick={() =>
                                router.push(`productDetails/${product.id}`)
                            }
                        />
                    ))}
                </Grid>
                <Pagination page={page} prev={prevPage} next={nextPage} />
            </Flex>
        </MainLayout>
    );
};

export default AllProducts;
