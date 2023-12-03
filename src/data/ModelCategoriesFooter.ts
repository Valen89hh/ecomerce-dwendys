type CategoryType = {
  categoryGeneral: string;
  subCategories: string[];
};

// Data categories
const categories: CategoryType[] = [
  {
    categoryGeneral: "Tecnology",
    subCategories: [
      "Phone",
      "Reloj",
      "Telvisor",
      "Audifonos bluetooth",
      "Laptops",
    ],
  },
  {
    categoryGeneral: "Premiun Fruits",
    subCategories: [
      "Apple",
      "Banana",
      "Pineapple",
      "Avocada",
      "Tomato",
      "Orange",
    ],
  },
  {
    categoryGeneral: "Home",
    subCategories: ["Muebles", "Mesas", "Sillas", "Camas"],
  },
];

function getGeneralCategories() {
  return categories.map((it) => it.categoryGeneral);
}

function getAllCategories() {
  return categories;
}

function getCategory(id: number) {
  return categories[id];
}

export { getGeneralCategories, getAllCategories, getCategory };
