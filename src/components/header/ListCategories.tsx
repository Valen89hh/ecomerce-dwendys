"use client";

import { useState } from "react";
import Category from "./Category";
import ListIcon from "@mui/icons-material/List";
import { getAllCategories, getCategory } from "@/data/ModelCategoriesFooter";
import { useSidebarContext } from "@/context/SidebarProvider";

function ListCategories() {
  const [categorySelected, setcategorySelected] = useState(
    getCategory(0).categoryGeneral
  );

  const { setOpen } = useSidebarContext();

  const maxCategories = getAllCategories().slice(0, 3);

  return (
    <div className="space-x-3.5 hidden sm:flex my-3">
      <div
        className="flex group space-x-2 items-center cursor-pointer
       bg-background-3 p-3 rounded-[18px]
        hover:bg-primary transition ease-in-out"
        onClick={() => setOpen(true)}
      >
        <ListIcon className="text-primary group-hover:text-white" />
        <span className="text-sm text-heading group-hover:text-white">
          All Categories
        </span>
      </div>
      {maxCategories.map((category, index) => (
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
