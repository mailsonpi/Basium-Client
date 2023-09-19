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

const camisas: IPart[] = [
    {
        id: 1,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f1.jpg",
        tamanhos: ["P", "M"],
        category: ["Camisas"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.",
    },
    {
        id: 2,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f2.jpg",
        tamanhos: ["P", "M", "GG"],
        category: ["Camisas", "newCollection"],
        description:
            "Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 4,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f2.jpg",
        tamanhos: ["P", "M", "GG"],
        category: ["camisas", "newCollection"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 3,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f2.jpg",
        tamanhos: ["P", "M", "GG"],
        category: ["camisas"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 4,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f2.jpg",
        tamanhos: ["P", "M", "GG"],
        category: ["camisas"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 5,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f2.jpg",
        tamanhos: ["P", "M", "GG"],
        category: ["camisas", "newCollection"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 6,
        nome: "Cartoon Astronaut T-Shirts",
        marca: "adidas",
        price: 78,
        image: "/img/products/f2.jpg",
        tamanhos: ["P", "M", "GG"],
        category: ["camisas", "newCollection"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
];

export { camisas };
