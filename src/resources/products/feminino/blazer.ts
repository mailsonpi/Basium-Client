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
    | "Blazer"
    | "Calças Jeans"
    | "Blusas Sociais";

const Blazer: IPart[] = [
    {
        id: 20701,
        nome: "Cartoon Astronaut Blazer",
        marca: "adidas",
        price: 78,
        image: "https://static.netshoes.com.br/produtos/blazer-masculino-sim-fit-moda-casual/68/QSO-7396-168/QSO-7396-168_zoom1.jpg?ts=1680877203&ims=544x",
        tamanhos: ["P", "M"],
        category: ["Blazer"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.",
    },
];

export { Blazer };
