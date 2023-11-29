import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <header className="bg-white">
      <nav className="container mx-auto flex items-center justify-between py-3">
        <Link href="/">
          <h1 className={"font-title text-center primary text-[1.5rem]"}>
            D-wendys
          </h1>
        </Link>
        <div className="w-[200px] sm:w-[400px]  flex background-3 p-2 rounded-md space-x-2 focus-within:shadow-lg transition-shadow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-5 h-5 primary cursor-pointer"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            placeholder="Search essentials, groceries and more..."
            type="text"
            className="w-full
            border-none 
            outline-none 
            bg-transparent
            placeholder-[#666]
            text-sm
            HEading"
          />
        </div>
        <div className="flex space-x-2">
          <div className="flex items-center gap-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
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
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>

            <span className="text-sm font-bold text hidden md:block">Cart</span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
