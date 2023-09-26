import { IPart } from "../masculino/camisas";

export type category =
    | "Acessórios"
    | "Calçados"
    | "Bermudas"
    | "Calças Alfaiataria"
    | "Blazer"
    | "Blazer"
    | "Calças Jeans"
    | "Blusas Sociais";

const Blazer: IPart[] = [
    {
        id: 20701,
        nome: "FEMENINO teste",
        marca: "adidas",
        price: 78,
        image: [
            "/img/products/f1.jpg",
            "/img/products/f2.jpg",
            "/img/products/f3.jpg",
        ],
        tamanhos: ["P", "M"],
        category: ["Blazer"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.",
    },
];

export { Blazer };
