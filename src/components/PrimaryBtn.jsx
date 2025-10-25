const PrimaryBtn = ({children}) => {
  return (
    <button className='btn btn-primary font-semibold text-white text-lg px-4 border-0 shadow-none'>
      {children}
    </button>
  );
};

export default PrimaryBtn;