//IMPORTS
import { useState, useEffect } from "react";
//COMPONENTS
import Nav from "@/components/Nav";
import Filter from "@/components/Filter";
import Exams from "@/components/Exams";
import Login from "@/components/Login";
import Map from "@/components/Map";
import Clock from "@/components/Clock";

export default function Home({ theme, setTheme }) {
  //ALL EXAMS GLOBAL
  const [examData, setExamData] = useState([]);
  //FILTERED EXAMS GLOBAL
  const [filteredExamData, setFilteredExamData] = useState([]);

  //USEEFFECT TO SET GLOBAL THEME BASED ON WINDOW.MATCHMEDIA API
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  //USEEFFECT TO ADD AND REMOVE DARK CLASS
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    //  App container
    <main className="min-h-screen lg:max-h-screen flex justify-center items-center bg-victvs-light-grey dark:bg-victvs-black overflow-hidden">
      {/* Content container 12-col grid */}
      <div
        id="layout-container"
        className="w-[95%] sm:w-[90%]lg:max-w-[95%] lg:w-[90%] lg:h-[100vh] py-2 gap-y-2 lg:gap-y-0 sm:p-5 grid grid-cols-12"
      >
        {/* NAV COMPONENT */}
        <Nav theme={theme} setTheme={setTheme}></Nav>
        {/* EXAMS DASHBOARD */}
        <section
          id="dashboard"
          className="lg:h-[80vh] col-span-12 grid grid-cols-12 gap-y-2 lg:gap-x-4"
        >
          {/* FILTERS COMPONENT */}
          <section className="col-span-12 lg:col-span-3 xl:col-span-2 px-2 py-2 sm:px-5 sm:py-4 rounded-xl toggle-background">
            <div id="filter-container" className="col-span-2 h-full">
              <div id="filter-wrapper" className="h-[65%]">
                <Filter
                  examData={examData}
                  filteredExamData={filteredExamData}
                  setFilteredExamData={setFilteredExamData}
                ></Filter>
              </div>
              <div
                id="login-wrapper"
                className="flex flex-col justify-end  h-[35%]"
              >
                <Login></Login>
              </div>
            </div>
          </section>
          {/* EXAM LIST COMPONENT */}
          <section className="col-span-12 lg:col-span-9 xl:col-span-10 grid grid-cols-10 gap-x-4 gap-y-4 ">
            <div
              id="exams-wrapper"
              className="h-[90vh] lg:h-[50vh] col-span-12 lg:col-span-10 px-2 sm:px-5 py-2 toggle-background rounded-xl"
            >
              <Exams
                filteredExamData={filteredExamData}
                setFilteredExamData={setFilteredExamData}
                setExamData={setExamData}
              ></Exams>
            </div>
            {/* DATA VIS MODULES */}
            <div
              id="data-viz-1"
              className="hidden h-[28vh] col-span-5 rounded-xl toggle-background lg:flex lg:justify-center lg:items-center"
            >
              <Clock theme={theme} />
            </div>
            <div
              id="data-viz-2"
              className="hidden lg:block h-[28vh] col-span-5 rounded-xl  toggle-background overflow-hidden"
            >
              <Map data={filteredExamData} />
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
