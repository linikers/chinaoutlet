export interface IProduct {
  id: string;
  imageUrl?: string;
  name?: string;
  price?: number;

}
export const products: IProduct[] = [
  {
    id: "6228fe63b7e6cb904bbe0165",
    price: 2099,
    name: "I Phone 12 Pro 128gb",
    imageUrl:
      "https://i.imgur.com/FsuTJ5x.png",
  },
  {
    id: "6228fec7b7e6cb904bbe016f",
    name: "Echo Dot 5a Geração",
    price: 249,
    imageUrl:
      "https://i.imgur.com/Q5WPvJH.png",
  },
  {
    price: 200,
    id: "6228ff71b7e6cb904bbe0175",
    imageUrl:
      "https://images.unsplash.com/photo-1584670747417-594a9412fba5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    name: "Suéter Vermelho Vibrante",
  },
  {
    name: "Vestido Vermelho",
    price: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=746&q=80",
    id: "6228ff93b7e6cb904bbe0177",
  },
  {
    price: 300,
    id: "6228fe80b7e6cb904bbe0168",
    name: "Jaqueta Xadrez",
    imageUrl:
      "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    price: 200,
    name: "Blusa Branca",
    id: "6228ff31b7e6cb904bbe0172",
    imageUrl:
      "https://images.unsplash.com/photo-1624206112918-f140f087f9b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    price: 200,
    imageUrl:
      "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80",
    id: "62290014b7e6cb904bbe017c",
    name: "Calça Jeans Azul",
  },
  {
    id: "6228ffa5b7e6cb904bbe017a",
    name: "Vestido Branco",
    price: 250,
    imageUrl:
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
  },
];
