type DescuentoType = {
  is_descuento: boolean;
  porcent: number;
};

export type ProductType = {
  id: number;
  img_paht: string;
  name_product: string;
  price: number;
  descuento: DescuentoType;
};

const products: ProductType[] = [
  {
    id: 1,
    img_paht: "https://i.ibb.co/ZhWQVxx/image-3.png",
    name_product: "Galaxy S22 Ultra",
    price: 1299,
    descuento: {
      is_descuento: true,
      porcent: 40,
    },
  },
  {
    id: 2,
    img_paht: "https://i.ibb.co/6FRsDb5/image-3-1.png",
    name_product: "Galaxy M13 (4GB | 64 GB)",
    price: 999,
    descuento: {
      is_descuento: true,
      porcent: 55,
    },
  },
  {
    id: 3,
    img_paht: "https://i.ibb.co/KNDg4td/image-3-2.png",
    name_product: "Galaxy M13 (4GB | 64 GB)",
    price: 1899,
    descuento: {
      is_descuento: true,
      porcent: 55,
    },
  },
  {
    id: 4,
    img_paht: "https://i.ibb.co/ZcR3hS5/image-3-3.png",
    name_product: "Galaxy M33 (4GB | 64 GB)",
    price: 699,
    descuento: {
      is_descuento: true,
      porcent: 55,
    },
  },
  {
    id: 5,
    img_paht: "https://i.ibb.co/c840Zdc/image-3-4.png",
    name_product: "Galaxy S23 Ultra",
    price: 1399,
    descuento: {
      is_descuento: false,
      porcent: 0,
    },
  },
];

function getAllProducts() {
  return products;
}

function getProduct(id: number) {
  return products.filter((product) => product.id == id);
}

export { getAllProducts, getProduct };
