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
    <nav className="h-[8vh] sm:h-[10vh] col-span-12  flex justify-center items-center px-2 sm:px-5 rounded-xl toggle-background">
      {/* LINK CONTAINER */}
      <div className="w-full flex items-center">
        <div className="flex-1 flex items-center">
          <div className="flex-shrink-0">
            {theme === "dark" ? (
              <BsGlobeAmericas className="text-victvs-off-white text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl " />
            ) : (
              <BsGlobeAmericas className="text-victvs-dark-grey text-xl sm:text-2xl lg:text-3xl  2xl:text-4xl " />
            )}
          </div>
          <div className="ml-2 sm:ml-4">
            <a href="https://github.com/daniellee86" target="_blank">
              <h1 className="font-semibold text-sm sm:text-base lg:text-lg 3xl:text-xl tracking-widest text-victvs-blue dark:text-victvs-off-white hover:text-victvs-dark-blue cursor-pointer">
                VICTVS
              </h1>
            </a>
            <p className="text-xs xl:text-sm 3xl:text-base hidden lg:block text-gray-500">
              Global Exam Invigilation
            </p>
          </div>
        </div>
        {/* SEARCH */}
        <div className="relative flex-1 hidden md:block">
          <input
            type="text"
            className="search-input"
            placeholder="Search students..."
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            <FiSearch className="text-victvs-black text-md sm:text-lg lg:text-xl 3xl:text-2xl" />
          </div>
        </div>
        <div id="toggle-wrapper" className="flex-1 flex justify-end ">
          <div
            className="w-fit flex justify-center items-center cursor-pointer  rounded-full"
            onClick={handleThemeSwitch}
          >
            {theme === "dark" ? (
              <BsSun className="text-victvs-yellow text-lg sm:text-xl lg:text-2xl 3xl:text-3xl animate-pulse" />
            ) : (
              <CiDark className="text-victvs-black text-xl sm:text-2xl lg:text-3xl 3xl:text-4xl animate-pulse" />
            )}
          </div>
        </div>
      </div>
      {/* THEME TOGGLE */}
    </nav>
  );
};

export default Nav;
