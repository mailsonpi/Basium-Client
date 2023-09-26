import React from "react";
import { Flex, Text } from "@chakra-ui/react";

interface IProps {
    onChange: (e: number) => void;
    quantity: number;
}

const Counter: React.FC<IProps> = ({ onChange, quantity }) => {
    return (
        <Flex
            bg="white"
            rounded="lg"
            border="1px solid"
            borderColor="red"
            w={100}
        >
            <Text
                cursor="pointer"
                p={3}
                color="red"
                onClick={() => {
                    onChange(quantity === 1 ? 1 : quantity - 1);
                }}
            >
                -
            </Text>
            <Text p={3} cursor="default" color="red">
                {quantity}
            </Text>
            <Text
                cursor="pointer"
                p={3}
                onClick={() => onChange(quantity + 1)}
                color="red"
            >
                +
            </Text>
        </Flex>
    );
};

export { Counter };
