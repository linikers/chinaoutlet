export interface IProduct {
  id: string;
  imageUrl?: string;
  name?: string;
  price?: number;
  description?: string; 
}

export const products: IProduct[] = [
  {
    id: "6228fe63b7e6cb904bbe0165",
    price: 2099,
    name: "iPhone 12 Pro 128gb",
    imageUrl: "https://i.imgur.com/FsuTJ5x.png",
    description: "Smartphone Apple iPhone 12 Pro 128GB com tela Super Retina XDR de 6.1 polegadas, processador A14 Bionic super rápido, sistema operacional iOS 15 e câmeras traseiras triplas de 12MP.",
  },
  {
    id: "6228fec7b7e6cb904bbe016f",
    name: "Echo Dot 5a Geração",
    price: 249,
    imageUrl: "https://i.imgur.com/Q5WPvJH.png",
    description: "Smart speaker Echo Dot 5ª geração da Amazon com assistente virtual Alexa integrada, design moderno e som de alta qualidade.",
  },
  {
    id: "6228ff71b7e6cb904bbe0175",
    price: 1999,
    imageUrl: "https://i.imgur.com/n0TYEEx.png",
    name: "Console PlayStation 5 Standard Edition Branco",
    description: "Console Playstation 5 Standard Edition na cor branca com leitor de disco, processador AMD Zen 2 8-core e placa gráfica AMD Radeon RDNA 2 customizada para incrível performance em jogos.",
  },
  {
    id: "6228ff71b7e6cb904bcde3275",
    name: "Robô aspirador automático XIAOMI-MIJIA Pro",
    price: 2349,
    imageUrl: "https://i.imgur.com/eTlR8eR.png",
    description: "Robô aspirador automático XIAOMI-MIJIA Pro ideal para limpeza inteligente da casa. Navega por cômodos, aspira poeira e sujeira, e é compatível com controle por aplicativo.",
  },
  {
    price: 499,
    id: "6228fe80b7e6cb904bbe0168",
    name: "Aspirador De Pó Wap Robô - Robot W300 Bivolt",
    imageUrl: "https://i.imgur.com/414UDHw.png",
    description: "Aspirador de pó robô Wap Robot W300 bivolt com programação inteligente, ideal para limpeza diária de pisos e carpetes.",
  },

  {
    price: 59,
    name: "Fone de ouvido sem fio TWS bluetooth com microfone - Philips",
    id: "6228ff31b7e6cb904bbe0172",
    imageUrl: "https://i.imgur.com/XRYS2Qm.png",
    description: "Fone de ouvido sem fio Philips True Wireless Stereo (TWS) com bluetooth, microfone integrado para chamadas e tecnologia para som de qualidade.",
  },
  {
    price: 1299,
    imageUrl: "https://i.imgur.com/X9jPFga.png",
    id: "62290014b7e6cb904bbe017c",
    name: "Smartphone Xiaomi POCO X6 Pro 5G 12GB+512GB",
    description: "Smartphone Xiaomi Poco X6 Pro 5G com 12GB de RAM e 512GB de armazenamento, tela AMOLED de alta resolução, processador poderoso e suporte para redes 5G.",
  },
  {
    id: "6228ffa5b7e6cb904bbe017a",
    name: "Fone de Ouvido Bluetooth JBL Tune 510BT Pure Bass Preto",
    price: 169,
    imageUrl: "https://i.imgur.com/bO9aBRO.png",
    description: "Fone de ouvido bluetooth JBL Tune 510BT na cor preta com tecnologia Pure Bass para graves profundos e som de qualidade.",
  },
]