import ThemeSwitcher from "./Theme";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 text-center md:text-left flex justify-between items-center">
      <h1 className="text-2xl md:text-3xl">Weather Application</h1>
      <ThemeSwitcher/>
    </header>
  );
};

export default Header;
