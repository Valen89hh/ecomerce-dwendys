interface ContainerCenterProps {
  children: React.ReactNode;
  space?: string;
}

const ContainerCenter: React.FC<ContainerCenterProps> = ({
  children,
  space = "space-x-0",
}) => {
  return (
    <div className={`flex items-center justify-center ${space} py-3`}>
      {children}
    </div>
  );
};

export default ContainerCenter;
