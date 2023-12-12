import Divider from "./Divider";

interface TopicInfoProps {
  title: String;
  resaltPalabra: String;
}

const TopicInfo: React.FC<TopicInfoProps> = ({ title, resaltPalabra }) => {
  return (
    <div className="flex">
      <div className="whitespace-nowrap">
        <h1 className="font-bold text-secondary">
          {title + " "}
          <span className="text-primary shadow-none">{resaltPalabra}</span>
        </h1>
        <Divider color="bg-primary" size="h-1 rounded-full" />
      </div>

      <div className="flex w-full items-end justify-end">
        <Divider />
      </div>
    </div>
  );
};

export default TopicInfo;
