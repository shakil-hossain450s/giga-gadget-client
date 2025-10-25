const HeaderInfo = ({iconName, info}) => {
  return (
    <div className="mb-4 flex gap-2 items-center">
      <span className="bg-primary text-white p-2 rounded-full text-xl">{iconName}</span>
      <span className="text-xl text-primary font-medium">{info}</span>
    </div>
  );
};

export default HeaderInfo;