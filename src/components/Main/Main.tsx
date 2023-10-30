interface MainProps {
  children: React.ReactNode | any;
}

const Main: React.FC<MainProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default Main;
