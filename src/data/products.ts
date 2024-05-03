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
    name: "iPhone 12 Pro 128gb",
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
    price: 1999,
    id: "6228ff71b7e6cb904bbe0175",
    imageUrl:
      "https://i.imgur.com/n0TYEEx.png",
    name: "Console PlayStation 5 Standard Edition Branco",
  },
  {
    name: "Robô auto- limpeza XIAOMI-MIJIA Pro",
    price: 2349,
    imageUrl: "https://i.imgur.com/eTlR8eR.png",
    id: "6228ff93b7e6cb904bbe0177",
  },
  {
    price: 499,
    id: "6228fe80b7e6cb904bbe0168",
    name: "Aspirador De Pó Wap Robô - Robot W300 Bivolt",
    imageUrl:
      "https://i.imgur.com/414UDHw.png",
  },

  {
    price: 59,
    name: "Fone de ouvido sem fio TWS bluetooth com microfone - Philips",
    id: "6228ff31b7e6cb904bbe0172",
    imageUrl:
      "https://i.imgur.com/XRYS2Qm.png",
  },
  {
    price: 1299,
    imageUrl:
      "https://i.imgur.com/X9jPFga.png",
    id: "62290014b7e6cb904bbe017c",
    name: "Smartphone Xiaomi POCO X6 Pro 5G 12GB+512GB",
  },
  {
    id: "6228ffa5b7e6cb904bbe017a",
    name: "Fone de Ouvido Bluetooth JBL Tune 510BT Pure Bass Preto",
    price: 169,
    imageUrl:
      "https://i.imgur.com/bO9aBRO.png",
  },
  {
    id: "6228ff254desvf27d",
    name: "Fire TV Stick 4K | Streaming com Dolby Vision/Atmos e suporte a wi-fi 6",
    price: 289,
    imageUrl:
      "https://i.imgur.com/AXHNp7u.png",
  },
  {
    id: "6228ff254desvf27d",
    name: "Notebook Samsung Galaxy Book 2 Intel Core i5 8GB - SSD 256GB",
    price: 1899,
    imageUrl:
      "https://i.imgur.com/fwGRdyi.png",
  },
];
