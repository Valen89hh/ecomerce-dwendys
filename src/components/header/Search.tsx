interface SearchProps {
  customStyle?: string;
}

const Search: React.FC<SearchProps> = ({ customStyle = "" }) => {
  return (
    <div
      className={`sm:w-[400px]  flex background-3 p-2 rounded-md space-x-2 focus-within:shadow-lg transition-shadow ${customStyle}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 primary cursor-pointer"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
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
  );
};

export default Search;
