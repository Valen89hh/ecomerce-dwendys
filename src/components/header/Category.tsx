"use client";

import { useState } from "react";

interface CategoryProps {
  autofocus?: boolean;
  name: string;
  catgories: string[];
  isSelected: boolean;
  onChageSelected: (param: string) => void;
}

const Category: React.FC<CategoryProps> = ({
  autofocus = false,
  name,
  catgories,
  isSelected,
  onChageSelected,
}) => {
  //const [isSelected, setisSelected] = useState(selected);
  //const [isChange, setisChange] = useState(false);

  return (
    <select
      autoFocus={autofocus}
      name={name}
      id=""
      className={`${
        isSelected ? "bg-[#008ECC] text-white" : "background-3 HEading"
      } 
      block
       text-sm px-3.5 py-2.5 rounded-[18px]
       
       focus:bg-[#008ECC] 
       focus:outline-none
       focus:ring
       focus:text-white`}
      onFocus={() => {
        onChageSelected(name);
      }}
      onChange={(e) => e.target.blur()}
    >
      <option defaultValue={name} key={name} className="py-5 bg-slate-500">
        {name}
      </option>
      {catgories.map((category, i) => (
        <option key={i} defaultValue={category} className="py-5 bg-slate-500">
          {category}
        </option>
      ))}
    </select>
  );
};

export default Category;
