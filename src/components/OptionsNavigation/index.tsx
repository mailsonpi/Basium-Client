import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { DynamicModal } from "../DynamicModal";

const OptionsNavigation: React.FC = () => {
    return (
        <Flex justifyContent="space-around" my={10} flexWrap="wrap" gap={5}>
            <DynamicModal
                title={"Frete Grátis"}
                description={
                    "Frete grátis em compras acima de 300,00 reais para todo país."
                }
                image={"/foto_fretegratis.png"}
                message={"Olá, gostaria de falar sobre o frete grátis."}
            >
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
            </DynamicModal>
            <DynamicModal
                message={
                    "Olá, gostaria de tirar algumas dúvidas sobre a plataforma *Basium*."
                }
                title={"Suporte"}
                description={
                    "Para termos uma relação próxima aos nossos clientes e sanar qualquer dúvida, você pode entrar em contato pelo WhatsApp para melhor suporte."
                }
                image={"/foto_suporte.png"}
            >
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
            </DynamicModal>
            <DynamicModal
                message={
                    "Olá, gostaria de saber sobre como funciona as revendas!"
                }
                title={"Revenda"}
                description={
                    "Nossa condição especial para ser uma revendedora Basium é simples e lhe garante uma renda extra de até 30% de comissão. Gostaria de saber mais detalhes sobre?"
                }
                image={"/foto_revendedor.png"}
            >
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
            </DynamicModal>
            <DynamicModal
                message={"Olá, gostaria de entender mais sobre o parcelamento."}
                title={"Parcelamento"}
                description={"Parcelamento em até 6x no cartão"}
                image={"/foto_parcelamento.png"}
            >
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
            </DynamicModal>
        </Flex>
    );
};

export default OptionsNavigation;
