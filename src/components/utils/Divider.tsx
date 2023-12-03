interface DividerProps {
  color?: string;
  size?: string;
}

const Divider: React.FC<DividerProps> = ({
  color = "color-border",
  size = "h-[2px]",
}) => {
  return <hr className={`w-full my-1 ${size} ${color} border-t-0`} />;
};

export default Divider;
