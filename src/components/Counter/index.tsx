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
            w={{ base: 70, md: 100 }}
            h={{ base: "30px", md: "46px" }}
            px={2}
            alignItems="center"
            justifyContent="space-between"
        >
            <Text
                fontSize={24}
                cursor="pointer"
                color="red"
                onClick={() => {
                    onChange(quantity === 1 ? 1 : quantity - 1);
                }}
                fontWeight={600}
            >
                -
            </Text>
            <Text cursor="default" color="red">
                {quantity}
            </Text>
            <Text
                fontSize={24}
                cursor="pointer"
                onClick={() => onChange(quantity + 1)}
                color="red"
                fontWeight={600}
            >
                +
            </Text>
        </Flex>
    );
};

export { Counter };
