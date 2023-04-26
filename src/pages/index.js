//IMPORTS
import { useState, useEffect } from "react";
//COMPONENTS
import Nav from "@/components/Nav";
import Filter from "@/components/Filter";
import Exams from "@/components/Exams";

export default function Home({ theme, setTheme }) {
  //ALL EXAMS GLOBAL
  const [examData, setExamData] = useState([]);

  //USEEFFECT TO SET GLOBAL THEME BASED ON WINDOW.MATCHMAEDIA API
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
    <main className="min-h-screen flex justify-center items-center bg-victvs-light-grey dark:bg-victvs-black">
      {/* Content container 12-col grid */}
      <div
        id="layout-container"
        className="w-[90%] h-[100vh] p-5 grid grid-cols-12"
      >
        {/* NAV COMPONENT */}
        <Nav theme={theme} setTheme={setTheme}></Nav>
        {/* EXAMS DASHBOARD */}
        <section
          id="dashboard"
          className="h-[80vh] col-span-12 grid grid-cols-12 gap-x-4"
        >
          {/* FILTERS COMPONENT */}
          <section className="col-span-2 px-5 py-4 rounded-xl bg-victvs-off-white dark:bg-victvs-grey">
            <div id="filter-container" className="col-span-2 h-full">
              <div id="filter-wrapper" className="bg-yellow-400 h-[65%]">
                <Filter examData={examData}></Filter>
              </div>
              <div id="login-wrapper" className="bg-green-400 h-[35%]"></div>
            </div>
          </section>
          {/* EXAM LIST COMPONENT */}
          <section className="col-span-10 grid grid-cols-10  gap-x-4 gap-y-4 ">
            <div
              id="exams-wrapper"
              className="h-[50vh] col-span-10 px-5 py-2 bg-victvs-off-white dark:bg-victvs-grey rounded-xl"
            >
              <Exams examData={examData} setExamData={setExamData}></Exams>
            </div>
            {/* DATA VIS MODULES */}
            <div
              id="data-viz-1"
              class="h-[28vh] col-span-5 rounded-xl  bg-victvs-off-white dark:bg-victvs-grey"
            ></div>
            <div
              id="data-viz-1"
              class="h-[28vh] col-span-5 rounded-xl  bg-victvs-off-white dark:bg-victvs-grey"
            ></div>
          </section>
        </section>
      </div>
    </main>
  );
}
