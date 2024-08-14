import ThemeSwitcher from "./Theme";
function Header(){
  return (
    <header className="bg-blue-500 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl">Weather Application</h1>
        <ThemeSwitcher />
    </header>
  
  );
};

export default Header;
