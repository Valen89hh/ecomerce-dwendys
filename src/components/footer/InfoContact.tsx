import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";

interface Icons {
  [key: string]: React.ReactNode;
}

const icons: Icons = {
  whatsapp: <WhatsAppIcon />,
  call: <CallOutlinedIcon />,
};

interface InfoContactProps {
  icon: string;
  name: string;
  number: string;
}

const InfoContact: React.FC<InfoContactProps> = ({ icon, name, number }) => {
  const selectIcon = icons[icon];
  return (
    <div className="flex space-x-3 my-2">
      {selectIcon}
      <div className="flex flex-col">
        <span>{name}</span>
        <span>{number}</span>
      </div>
    </div>
  );
};

export default InfoContact;
