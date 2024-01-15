import Nav from "./Nav";

const Header = () => {
  return (
    <header className="fixed top-0 right-0 left-0 p-5 flex justify-end items-center z-40">
      <Nav />
    </header>
  );
};

export default Header;
