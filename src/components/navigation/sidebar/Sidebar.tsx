import { useSidebarContext } from "@/context/SidebarProvider";
import ContentSide from "./ContentSide";

const Sidebar = () => {
  const { open } = useSidebarContext();
  return (
    <div
      className={`${
        open ? "" : "hidden"
      } h-screen w-screen absolute  bg-[#00000052] top-0 left-0`}
    >
      <ContentSide>Hola</ContentSide>
    </div>
  );
};

export default Sidebar;
