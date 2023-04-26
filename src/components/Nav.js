//IMPORTS

import { BsSun } from "react-icons/bs";
import { CiDark } from "react-icons/ci";
import { BsGlobeAmericas } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";

const Nav = ({ theme, setTheme }) => {
  //FUNCTION TO SET DARKMODE STATE
  const handleThemeSwitch = () => {
    console.log(theme);
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    // NAVBAR
    <nav className="h-[10vh] col-span-12  flex justify-center items-center px-5 rounded-xl toggle-background">
      {/* LINK CONTAINER */}
      <div className="w-full flex items-center">
        <div className="flex-1 flex items-center">
          <div className="flex-shrink-0">
            {theme === "dark" ? (
              <BsGlobeAmericas className="text-victvs-off-white text-4xl" />
            ) : (
              <BsGlobeAmericas className="text-victvs-dark-grey text-4xl" />
            )}
          </div>
          <div className="ml-4">
            <a href="https://github.com/daniellee86" target="_blank">
              <h1 className="font-semibold text-lg tracking-widest text-victvs-blue dark:text-victvs-off-white hover:text-victvs-dark-blue cursor-pointer">
                VICTVS
              </h1>
            </a>
            <p className="text-xs text-gray-500">Global Exam Invigilation</p>
          </div>
        </div>
        {/* SEARCH */}
        <div className="relative flex-1">
          <input
            type="text"
            className="search-input"
            placeholder="Search students..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FiSearch className="text-victvs-black" size={20} />
          </div>
        </div>
        <div id="toggle-wrapper" className="flex-1 flex justify-end ">
          <div
            className="w-fit flex justify-center items-center cursor-pointer  p-2 rounded-full"
            onClick={handleThemeSwitch}
          >
            {theme === "dark" ? (
              <BsSun color="yellow" size={25} />
            ) : (
              <CiDark color="black" size={30} />
            )}
          </div>
        </div>
      </div>
      {/* THEME TOGGLE */}
    </nav>
  );
};

export default Nav;
