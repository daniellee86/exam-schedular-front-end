import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  //State for data from api get request
  const [examData, setExamData] = useState([]);
  //State for search term
  const [searchInput, setSearchInput] = useState("");
  //state for filters to search against
  const [selectedFilter, setSelectedFilter] = useState("");

  //constructs dynamic url with selected filter and search input as query params
  function constructUrl(selectedFilter, searchInput) {
    let url = "http://localhost:3000/api/exams";
    if (selectedFilter && searchInput) {
      url += `?filter_by=${selectedFilter}&filter_term=${searchInput}`;
    }
    return url;
  }

  //triggers when component mounts or detects change in dependancy array
  useEffect(() => {
    const url = constructUrl(selectedFilter, searchInput);
    console.log(url);
    axios
      .get(url)
      .then((response) => {
        setExamData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedFilter]);

  //set search input state
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  //set selectedFilter state
  const handleFilterSelection = (filter) => {
    setSelectedFilter(filter);
  };

  const filterCategories = ["CandidateName", "LocationName"];

  return (
    // SHELL COMPONENT
    <main className="min-h-screen flex justify-center">
      <div id="layout-container" className="w-[80%]">
        {/* // */}
        {/* NAV AND TOOL BAR COMPONENT */}
        <nav className="w-full flex justify-around py-1 my-10 rounded-lg bg-victvs-off-white">
          {/* NAME AND LOCATION FILTER */}
          <div className="w-[50%]">
            {/* onSubmit={handleSearch} */}
            <form className="flex flex-col p-2 rounded-lg  bg-victvs-dark-grey">
              <label>
                Search:
                <input
                  className="text-victvs-black p-1 rounded-lg"
                  type="text"
                  value={searchInput}
                  onChange={handleSearchInput}
                  placeholder="Search..."
                />
              </label>
              {/* // */}
              {filterCategories.map((category, index) => (
                <label key={index}>
                  <input
                    type="checkbox"
                    checked={category === selectedFilter}
                    onChange={() => handleFilterSelection(category)}
                  />
                  {category}
                </label>
              ))}
              <button className="border-1 rounded-lg" type="submit">
                Reset
              </button>
            </form>
          </div>

          {/* // */}

          {/* DATE FILTER */}
          <div className="w-[40%]">
            <div className="flex flex-col p-2 rounded-lg  bg-victvs-dark-grey">
              <h2>search input = {searchInput}</h2>
              <h2>{selectedFilter}</h2>
            </div>
          </div>
        </nav>

        {/* //*/}

        {/* EXAM LIST COMPONENT */}
        <section className="w-full p-1 bg-victvs-off-white rounded-lg ">
          {examData.map((exam) => (
            //INDIVIDUAL LIST COMPONENT
            <div
              className="flex justify-around border-1 p-1 m-1 rounded-lg bg-victvs-dark-grey"
              key={exam.id}
            >
              <h2>{exam.Title}</h2>
              <p>{exam.CandidateName}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
}
