import Divider from "../utils/Divider";

interface ListFooterProps {
  title: string;
  list: string[];
}

const ListFooter: React.FC<ListFooterProps> = ({ title, list }) => {
  return (
    <div className="px-3">
      <h2 className="inline-block py-3 text-lg font-semibold">
        {title}
        <hr className="bg-white rounded-lg h-[3px] mt-2" />
      </h2>
      <ul className="list-disc ml-8 space-y-3">
        {list.map((value) => (
          <li key={value}>{value}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListFooter;
