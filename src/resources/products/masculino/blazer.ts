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
        id: 701,
        nome: "Cartoon Astronaut Blazer",
        marca: "adidas",
        price: 78,
        image: "https://static.netshoes.com.br/produtos/blazer-masculino-sim-fit-moda-casual/68/QSO-7396-168/QSO-7396-168_zoom1.jpg?ts=1680877203&ims=544x",
        tamanhos: ["P", "M"],
        category: ["Blazer"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear.",
    },
    {
        id: 702,
        nome: "Cartoon Astronaut Blazer",
        marca: "adidas",
        price: 78,
        image: "https://static.netshoes.com.br/produtos/blazer-masculino-sim-fit-moda-casual/68/QSO-7396-168/QSO-7396-168_zoom1.jpg?ts=1680877203&ims=544x",
        tamanhos: ["P", "M", "GG"],
        category: ["Blazer", "Nova Coleção"],
        description:
            "Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 704,
        nome: "Cartoon Astronaut Blazer",
        marca: "adidas",
        price: 78,
        image: "https://static.netshoes.com.br/produtos/blazer-masculino-sim-fit-moda-casual/68/QSO-7396-168/QSO-7396-168_zoom1.jpg?ts=1680877203&ims=544x",
        tamanhos: ["P", "M", "GG"],
        category: ["Blazer", "Nova Coleção"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 703,
        nome: "Cartoon Astronaut Blazer",
        marca: "adidas",
        price: 78,
        image: "https://static.netshoes.com.br/produtos/blazer-masculino-sim-fit-moda-casual/68/QSO-7396-168/QSO-7396-168_zoom1.jpg?ts=1680877203&ims=544x",
        tamanhos: ["P", "M", "GG"],
        category: ["Blazer"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 704,
        nome: "Cartoon Astronaut Blazer",
        marca: "adidas",
        price: 78,
        image: "https://static.netshoes.com.br/produtos/blazer-masculino-sim-fit-moda-casual/68/QSO-7396-168/QSO-7396-168_zoom1.jpg?ts=1680877203&ims=544x",
        tamanhos: ["P", "M", "GG"],
        category: ["Blazer"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 705,
        nome: "Cartoon Astronaut Blazer",
        marca: "adidas",
        price: 78,
        image: "https://static.netshoes.com.br/produtos/blazer-masculino-sim-fit-moda-casual/08/QSO-7396-008/QSO-7396-008_zoom1.jpg?ts=1680877181&ims=544x",
        tamanhos: ["P", "M", "GG"],
        category: ["Blazer", "Nova Coleção"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
    {
        id: 706,
        nome: "Cartoon Astronaut Blazer",
        marca: "adidas",
        price: 78,
        image: "https://static.netshoes.com.br/produtos/blazer-masculino-sim-fit-moda-casual/08/QSO-7396-008/QSO-7396-008_zoom1.jpg?ts=1680877181&ims=544x",
        tamanhos: ["P", "M", "GG"],
        category: ["Blazer", "Nova Coleção"],
        description:
            "The Gildan Ultra Cotton T-shirt is made from a substantial 6.0 oz. per sq. yd. fabric constructed from 100% cotton, this classic fit preshrunk jersey knit provides unmatched comfort with each wear. Featuring a taped neck and shoulder, and a seamless double-needle collar, and available in a range of colors, it offers it all in the ultimate head-turning package.",
    },
];

export { Blazer };
