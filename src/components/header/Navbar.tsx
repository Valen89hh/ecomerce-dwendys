import Link from "next/link";
import Search from "./Search";

//Icons
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { useSidebarContext } from "@/context/SidebarProvider";

interface NavbarProps {
  activeSideBar: (param: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSideBar }) => {
  const { setOpen } = useSidebarContext();

  return (
    <nav className="container mx-auto my-3 space-y-2 px-1">
      <div className="flex items-center justify-between ">
        <div className="flex items-center space-x-1">
          <div
            className="p-1 cursor-pointer rounded-md background-3 block sm:hidden"
            onClick={() => setOpen(true)}
          >
            <DragHandleIcon className="primary" />
          </div>
          <Link href="/">
            <h1 className={"font-title text-center primary text-[1.5rem]"}>
              D-wendys
            </h1>
          </Link>
        </div>
        <Search customStyle="hidden sm:flex" />
        <div className="flex space-x-2">
          <div className="flex items-center gap-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            <span className="text-sm font-bold text hidden md:block">
              Sing In
            </span>
          </div>
          <hr className="border-l border-solid line h-5" />
          <div className="flex items-center gap-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 primary"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <span className="text-sm font-bold text hidden md:block">Cart</span>
          </div>
        </div>
      </div>
      <Search customStyle="sm:hidden" />
    </nav>
  );
};

export default Navbar;
