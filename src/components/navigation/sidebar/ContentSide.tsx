import { useSidebarContext } from "@/context/SidebarProvider";
import styles from "./Sidebar.module.css";

type StyleActive = {
  open: string;
  closed: string;
};

interface ContentSideProps {
  children: React.ReactNode;
  activeStyle?: StyleActive;
  state: boolean;
  actived: (param: boolean) => void;
  customStyle?: string;
}

const ContentSide: React.FC<ContentSideProps> = ({
  children,
  activeStyle = { open: "sidebar-open", closed: "sidebar-closed" },
  state,
  actived,
  customStyle = "",
}) => {
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${styles.content} ${
        state ? styles[activeStyle.open] : styles[activeStyle.closed]
      } h-full ${customStyle}`}
    >
      {children}
    </div>
  );
};

export default ContentSide;
