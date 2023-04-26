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
    <nav className="h-[10vh] col-span-12  flex justify-center items-center px-5 rounded-xl bg-victvs-off-white dark:bg-victvs-grey">
      {/* LINK CONTAINER */}
      <div className="w-full flex items-center">
        <div
          id="logo-wrapper"
          className=" flex-1 flex justify-start items-center"
        >
          {theme === "dark" ? (
            <BsGlobeAmericas className="text-victvs-off-white" size={40} />
          ) : (
            <BsGlobeAmericas className="text-victvs-dark-grey" size={40} />
          )}
          <h1 className="ml-2 font-semibold text-lg tracking-widest text-victvs-dark-grey dark:text-victvs-off-white">
            VICTVS
          </h1>
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
