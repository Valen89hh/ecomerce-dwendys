import { useSidebarContext } from "@/context/SidebarProvider";
import ContentSide from "./ContentSide";
import Divider from "@/components/utils/Divider";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./Sidebar.module.css";
import CloseIcon from "@mui/icons-material/Close";
import ExpandCategory from "./ExpandCategory";
import { getAllCategories } from "@/data/ModelCategoriesFooter";

const Sidebar = () => {
  const { open, setOpen } = useSidebarContext();

  const closeModal = (e: React.MouseEvent) => {
    setOpen(false);
  };

  return (
    <div
      className={`${
        open ? "" : styles["hidden-sidden"]
      } h-screen w-screen fixed  bg-[#00000052] inset-0 z-20`}
      onClick={closeModal}
    >
      <ContentSide
        state={open}
        actived={setOpen}
        customStyle="p-3 bg-white w-72"
      >
        <div
          onClick={closeModal}
          className="absolute
         -right-8 top-1 group 
         cursor-pointer rounded-full
           hover:bg-white
           transition
           ease-in-out"
        >
          <CloseIcon className=" text-white group-hover:text-[#008ecc]" />
        </div>
        <h1 className={"font-title primary text-[1.5rem]"}>D-wendys</h1>
        <Divider />
        {getAllCategories().map((value, i) => (
          <ExpandCategory
            key={i}
            categoriGeneral={value.categoryGeneral}
            subCategories={value.subCategories}
          />
        ))}
      </ContentSide>
    </div>
  );
};

export default Sidebar;
