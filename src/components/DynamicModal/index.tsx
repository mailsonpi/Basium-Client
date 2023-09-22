import { useCheckSexSelected } from "@/context";
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
}

const DynamicModal: React.FC<IProps> = ({
    children,
    title,
    description,
    image,
}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { sexSelected } = useCheckSexSelected();
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
