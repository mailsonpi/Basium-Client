export interface IPart {
    nome: string;
    id: number;
    marca: string;
    price: number;
    image: string[];
    cores?: string[] | null;
    description: string;
    tamanhos: string[];
    category: string[];
}

export type category =
    | "Acessórios"
    | "Calçados"
    | "Bermudas"
    | "Calças Alfaiataria"
    | "Blazer"
    | "T-Shirts"
    | "Calças Jeans"
    | "Blusas Sociais"
    | "Moda Casual"
    | "Moda Corporativa"
    | "Livros";

const Camisas: IPart[] = [
    {
        id: 1,
        nome: "Camisa do maior time do Brasil",
        marca: "Qualidade",
        price: 500,
        image: [
            "/masculino/camisa/camisasp.jpg",
        ],
        tamanhos: ["P", "M","GG"],
        cores: ["Preta", "Azul", "Vermelho"],
        category: ["Camisas", "T-Shirts", "Moda Corporativa"],
        description:
            "Camisa do maior time do Brasil",
    },
    {
        id: 2,
        nome: "Camisa do maior time do Brasil",
        marca: "Qualidade",
        price: 500,
        image: [
            "/masculino/camisa/camisasp.jpg",
        ],
        tamanhos: ["P", "M","GG"],
        cores: ["Preta", "Azul", "Vermelho"],
        category: ["Camisas", "T-Shirts", "Moda Corporativa"],
        description:
            "Camisa do maior time do Brasil",
    },
    {
        id: 3,
        nome: "Camisa do maior time do Brasil",
        marca: "Qualidade",
        price: 500,
        image: [
            "/masculino/camisa/camisasp.jpg",
            "/masculino/camisa/camisasp.jpg",
        ],
        tamanhos: ["P", "M","GG"],
        cores: ["Preta", "Azul", "Vermelho"],
        category: ["Camisas", "T-Shirts", "Moda Corporativa"],
        description:
            "Camisa do maior time do Brasil",
    },
];

export { Camisas };
