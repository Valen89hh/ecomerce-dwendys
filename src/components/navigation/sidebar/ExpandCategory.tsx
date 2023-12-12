import { useState } from "react";
import styles from "./Sidebar.module.css";

//Componentes
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Link from "next/link";

//Especificacion del tipo de la props
interface ExpandCategoryProps {
  categoriGeneral: String;
  subCategories: String[];
}

const ExpandCategory: React.FC<ExpandCategoryProps> = ({
  categoriGeneral,
  subCategories,
}) => {
  //Estado para controlar la expancion de el componente
  const [expand, setExpand] = useState(false);

  return (
    <div className="relative">
      <div
        className="flex group  items-center px-1 py-1 rounded-md hover:bg-background-3 cursor-pointer"
        onClick={() => setExpand(!expand)}
      >
        <KeyboardArrowRightIcon
          className={`text-[20px] text-primary
         group-hover:text-heading 
         transition ease-in-out
         ${expand ? "rotate-90" : "rotate-0"}`}
        />
        <h1 className="text-sm font-semibold text-secondary">
          {categoriGeneral}
        </h1>
      </div>
      <ul
        className={`${
          expand
            ? styles["open-expand-category"]
            : styles["close-expand-category"]
        } px-4 ml-3 border-l-2 border-line`}
      >
        {subCategories.map((value, i) => (
          <Link href="/" key={i}>
            <li className="text-sm text-semibold text-secondary p-1 rounded-md hover:bg-background-3">
              {value}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ExpandCategory;
