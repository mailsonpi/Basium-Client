import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Spinner, Text, Center } from "@chakra-ui/react";
import { useCheckSexSelected } from "@/context";

const Loading: NextPage = () => {
    const router = useRouter();
    const { updateSexSelected } = useCheckSexSelected();

    useEffect(() => {
        const sexLocalStorage = localStorage.getItem("sex");
        updateSexSelected(sexLocalStorage as string);

        const redirectTimer = setTimeout(() => {
            router.push("/home");
        }, 2000);

        return () => clearTimeout(redirectTimer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Center
            flexDirection="column"
            height="100vh"
            bg="black"
            bgSize="100% 100%"
            bgRepeat="no-repeat"
            bgPosition="center"
            gap={10}
        >
            <Text
                fontSize={48}
                color="white"
                textAlign="center"
                fontFamily="'Libre Baskerville', serif"
            >
                Aguarde um instante...
            </Text>
            <Spinner size="xl" emptyColor="white" />
            <Text color="white" textAlign="center">
                Estamos preparando tudo para você!
            </Text>
        </Center>
    );
};

export default Loading;
