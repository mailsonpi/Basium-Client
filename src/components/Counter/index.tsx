import React, { useState } from "react";
import { Flex, Text } from "@chakra-ui/react";

const Counter: React.FC = () => {
    const [count, setCount] = useState(1);
    return (
        <Flex
            mt={2}
            w="max-content"
            bg="white"
            rounded="lg"
            border="1px solid"
            borderColor="secondary.900"
        >
            <Text
                cursor="pointer"
                p={3}
                color="secondary.900"
                onClick={() => setCount(count === 1 ? 1 : count - 1)}
            >
                -
            </Text>
            <Text p={3} cursor="default" color="secondary.900">
                {count}
            </Text>
            <Text
                cursor="pointer"
                p={3}
                onClick={() => setCount(count + 1)}
                color="secondary.900"
            >
                +
            </Text>
        </Flex>
    );
};

export { Counter };
