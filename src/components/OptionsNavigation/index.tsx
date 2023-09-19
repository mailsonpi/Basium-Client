import React from "react";
import { Flex, Image } from "@chakra-ui/react";

const OptionsNavigation: React.FC = () => {
    return (
        <Flex justifyContent="space-around" my={10} flexWrap="wrap" gap={5}>
            <Image
                cursor="pointer"
                w={{ base: 36, md: 52 }}
                src="/iconeinicio_frete.svg"
                alt="Frete"
                _hover={{
                    boxShadow: "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                }}
                transition=".3s"
            />
            <Image
                cursor="pointer"
                w={{ base: 36, md: 52 }}
                src="/iconeinicio_suporte.svg"
                alt="suporte"
                _hover={{
                    boxShadow: "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                }}
                transition=".3s"
            />
            <Image
                cursor="pointer"
                w={{ base: 36, md: 52 }}
                src="/iconeinicio_revendedor.svg"
                alt="revendedor"
                _hover={{
                    boxShadow: "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                }}
                transition=".3s"
            />
            <Image
                cursor="pointer"
                w={{ base: 36, md: 52 }}
                src="/iconeinicio_parcele.svg"
                alt="parcele"
                _hover={{
                    boxShadow: "0px 0px 38px 5px rgba(70, 62, 221, 0.1)",
                }}
                transition=".3s"
            />
        </Flex>
    );
};

export default OptionsNavigation;
