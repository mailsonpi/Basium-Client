import {
    TableContainer,
    Table as TableChakra,
    Th,
    Tr,
    Thead,
    Tbody,
    Tfoot,
    Td,
    Text,
    CloseButton,
    Image,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from "@chakra-ui/react";
import React from "react";

interface IItems {
    nome: string;
    id: number;
    marca: string;
    price: number;
    image: string;
    description: string;
    tamanhos: string[];
    category: string[];
    quantity: string;
    size: string;
}

const Table = () => {
    const [products, setProducts] = React.useState<IItems[]>([]);

    React.useEffect(() => {
        if (typeof window !== "undefined") {
            const local = localStorage.getItem("cartItems");
            if (local) {
                setProducts(JSON.parse(local));
            }
        }
    }, []);

    const attQuantity = async (index: number, newQuantity: number) => {
        const localProducts = [...products];
        localProducts[index].quantity = newQuantity.toString();
        setProducts(localProducts);
        localStorage.setItem("cartItems", JSON.stringify(localProducts));
    };

    const onClickRemove = (index: number) => {
        const localProducts = [...products];
        localProducts.splice(index, 1);
        setProducts(localProducts);
        localStorage.setItem("cartItems", JSON.stringify(localProducts));
    };

    return (
        <TableContainer w="80%" mx="auto" color="white">
            <TableChakra variant="simple">
                <Thead color="white">
                    <Tr>
                        <Th color="white">Imagem</Th>
                        <Th color="white">Produto</Th>
                        <Th color="white">Valor</Th>
                        <Th color="white">Quantidade</Th>
                        <Th color="white">Total</Th>
                        <Th color="white">Remover</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {products ? (
                        products.map((item, key) => (
                            <Tr key={key}>
                                <Td>
                                    <Image
                                        w={14}
                                        alt={item.nome}
                                        src={item.image}
                                    />
                                </Td>
                                <Td>{item.nome}</Td>
                                <Td>R$ {item.price}</Td>
                                <Td color="black">
                                    <NumberInput
                                        size="sm"
                                        w={20}
                                        defaultValue={item.quantity}
                                        min={1}
                                        onChange={(e) =>
                                            attQuantity(key, Number(e))
                                        }
                                    >
                                        <NumberInputField bg="primary.100" />
                                        <NumberInputStepper bg="white">
                                            <NumberIncrementStepper bg="white" />
                                            <NumberDecrementStepper bg="white" />
                                        </NumberInputStepper>
                                    </NumberInput>
                                </Td>
                                <Td>R$ {Number(item.quantity) * item.price}</Td>
                                <Td>
                                    <CloseButton
                                        onClick={() => onClickRemove(key)}
                                        color="white"
                                    />
                                </Td>
                            </Tr>
                        ))
                    ) : (
                        <Text>Não há produtos no carrinho.</Text>
                    )}
                </Tbody>
                <Tfoot>
                    <Tr>
                        <Th color="white">
                            Valor total: R${" "}
                            {products.reduce(
                                (acumulador, numero) =>
                                    acumulador +
                                    numero.price * Number(numero.quantity),
                                0
                            )}
                        </Th>
                    </Tr>
                </Tfoot>
            </TableChakra>
        </TableContainer>
    );
};

export default Table;
