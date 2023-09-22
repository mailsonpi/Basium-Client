import { useCheckSexSelected } from "@/context";
import { whatsappNumber } from "@/resources/whatsappNumber";
import {
    Button,
    ModalContent,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalHeader,
    ModalBody,
    ModalFooter,
    ModalCloseButton,
    Box,
    Image,
} from "@chakra-ui/react";
import React from "react";

interface IProps {
    children: React.ReactNode;
    title: string;
    description: string;
    image: string;
    message: string;
}

const DynamicModal: React.FC<IProps> = ({
    children,
    title,
    description,
    image,
    message,
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { sexSelected } = useCheckSexSelected();
    const sendMessage = () => {
        const url = `whatsapp://send?phone=${whatsappNumber}&text=${encodeURIComponent(
            message
        )}`;
        window.location.href = url;
    };
    return (
        <>
            <Box onClick={onOpen}>{children}</Box>
            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay
                    bg="blackAlpha.300"
                    backdropFilter="blur(10px) hue-rotate(90deg)"
                />
                <ModalContent
                    mx={3}
                    bg={
                        sexSelected === "masculine"
                            ? "secondary.900"
                            : "primary.100"
                    }
                >
                    <ModalHeader
                        color={
                            sexSelected === "masculine"
                                ? "white"
                                : "secondary.900"
                        }
                    >
                        {title}
                    </ModalHeader>
                    <Image
                        w="90%"
                        mx="auto"
                        rounded="md"
                        src={image}
                        alt={title}
                    />
                    <ModalCloseButton />
                    <ModalBody
                        color={
                            sexSelected === "masculine"
                                ? "white"
                                : "secondary.900"
                        }
                        fontSize={18}
                    >
                        {description}
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            mr={3}
                            onClick={onClose}
                            variant="ghost"
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.900"
                            }
                            _hover={{
                                background: "transparent",
                                color: "primary.500",
                            }}
                        >
                            Fechar
                        </Button>
                        <Button
                            variant="ghost"
                            color={
                                sexSelected === "masculine"
                                    ? "white"
                                    : "secondary.900"
                            }
                            _hover={{
                                background: "transparent",
                                color: "primary.500",
                            }}
                            onClick={() => sendMessage()}
                        >
                            Entre em contato!
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export { DynamicModal };
