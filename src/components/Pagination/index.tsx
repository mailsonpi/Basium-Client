import React from "react";
import { Button, Flex, Text } from "@chakra-ui/react";
import {
    BsFillArrowLeftCircleFill,
    BsFillArrowRightCircleFill,
} from "react-icons/bs";

interface IProps {
    prev: () => void;
    next: () => void;
    page: number;
}

const Pagination: React.FC<IProps> = ({ prev, next, page }) => {
    return (
        <Flex gap={3} justifyContent="center" alignItems="center" mt={10}>
            <Button
                onClick={prev}
                bg="transparent"
                color="white"
                _hover={{ bg: "transparent", color: "primary.400" }}
            >
                <BsFillArrowLeftCircleFill size={25} />
            </Button>
            <Text>{page}</Text>
            <Button
                bg="transparent"
                onClick={next}
                color="white"
                _hover={{ bg: "transparent", color: "primary.400" }}
            >
                <BsFillArrowRightCircleFill size={25} />
            </Button>
        </Flex>
    );
};

export default Pagination;
