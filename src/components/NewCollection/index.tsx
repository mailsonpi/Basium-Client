import React from "react";
import { Button, Flex, Grid, Heading, Text } from "@chakra-ui/react";
import CardProduct from "../CardProduct";
import { useRouter } from "next/router";
import { novaColecao } from "@/resources/products/masculino/novaColecao";
import { useCheckSexSelected } from "@/context";

const NewCollection: React.FC = () => {
    const { sexSelected } = useCheckSexSelected();
    const navigator = useRouter();
    return (
        <Flex justifyContent="space-around" my={10} direction="column">
            <Heading
                textAlign="center"
                color={sexSelected === "masculine" ? "white" : "secondary.900"}
            >
                Nova Coleção
            </Heading>
            <Text
                mt={5}
                textAlign="center"
                color={sexSelected === "masculine" ? "white" : "secondary.900"}
            >
                Modal Casual
            </Text>
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
                {novaColecao.map((item, key) => (
                    <CardProduct
                        onClick={() =>
                            navigator.push(`productDetails/${item.id}`)
                        }
                        product={item}
                        key={key}
                    />
                ))}
            </Grid>
            <Button
                onClick={() => navigator.push("/allProducts")}
                w="max-content"
                mt={10}
                mx="auto"
                fontSize={14}
                bg="primary.400"
                color="primary.700"
                fontFamily={"'Libre Baskerville', serif"}
            >
                VEJA TODOS OS PRODUTOS
            </Button>
        </Flex>
    );
};

export default NewCollection;
