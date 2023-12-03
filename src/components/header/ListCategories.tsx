"use client";

import { useState } from "react";
import Category from "./Category";
import { getAllCategories, getCategory } from "@/data/ModelCategoriesFooter";

function ListCategories() {
  const [categorySelected, setcategorySelected] = useState(
    getCategory(0).categoryGeneral
  );

  return (
    <div className="space-x-3.5 hidden sm:flex">
      {getAllCategories().map((category, index) => (
        <Category
          key={category.categoryGeneral}
          autofocus={index == 0}
          catgories={category.subCategories}
          name={category.categoryGeneral}
          isSelected={categorySelected == category.categoryGeneral}
          onChageSelected={setcategorySelected}
        />
      ))}
    </div>
  );
}

export default ListCategories;
