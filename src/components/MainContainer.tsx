interface MainContainerType {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerType> = ({ children }) => {
  return <div className='bg-white rounded-3xl w-full z-50'>{children}</div>;
};

export default MainContainer;
