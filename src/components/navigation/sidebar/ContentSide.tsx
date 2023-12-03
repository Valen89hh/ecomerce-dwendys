import CloseIcon from "@mui/icons-material/Close";
import { useSidebarContext } from "@/context/SidebarProvider";
import styles from "./Sidebar.module.css";

interface ContentSideProps {
  children: React.ReactNode;
}

const ContentSide: React.FC<ContentSideProps> = ({ children }) => {
  const { open, setOpen } = useSidebarContext();

  return (
    <div
      className={`${styles.content} ${
        open ? styles["sidebar-open"] : styles["sidebar-closed"]
      }`}
    >
      <div
        onClick={() => setOpen(false)}
        className="absolute
         -right-8 top-1 group 
         cursor-pointer rounded-full
           hover:bg-white
           transition
           ease-in-out"
      >
        <CloseIcon className=" text-white group-hover:text-[#008ecc]" />
      </div>
      {children}
    </div>
  );
};

export default ContentSide;
