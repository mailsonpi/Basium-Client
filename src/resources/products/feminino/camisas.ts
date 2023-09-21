export interface IPart {
    nome: string;
    id: number;
    marca: string;
    price: number;
    image: string;
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
    | "Blusas Sociais";

const Camisas: IPart[] = [
    {
        id: 20001,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f1.jpg",
        tamanhos: ["P", "M"],
        category: ["Camisas", "T-Shirts"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.",
    },
    {
        id: 20002,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f2.jpg",
        tamanhos: ["P", "M", "GG"],
        category: ["Camisas", "T-Shirts", "Nova Coleção"],
        description:
            "Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 20004,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f2.jpg",
        tamanhos: ["P", "M", "GG"],
        category: ["Camisas", "T-Shirts", "Nova Coleção"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 20003,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f2.jpg",
        tamanhos: ["P", "M", "GG"],
        category: ["Camisas", "T-Shirts"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 20004,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f2.jpg",
        tamanhos: ["P", "M", "GG"],
        category: ["Camisas", "T-Shirts"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 20005,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f2.jpg",
        tamanhos: ["P", "M", "GG"],
        category: ["Camisas", "T-Shirts", "Nova Coleção"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 20006,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f2.jpg",
        tamanhos: ["P", "M", "GG"],
        category: ["Camisas", "T-Shirts", "Nova Coleção"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
];

export { Camisas };
