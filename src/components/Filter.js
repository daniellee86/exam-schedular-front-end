import React, { useState, useEffect } from "react";
import handleHashMaps from "../utils/handleHashMaps";
import handleDate from "@/utils/handleDate";
import handleFilter from "@/utils/handleFilter";

const Filter = ({ examData, filteredExamData, setFilteredExamData }) => {
  const [nameFilter, setNameFilter] = useState("");
  const [locationFilter, setLocationFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [candidateMap, setCandidateMap] = useState({});
  const [dateMap, setDateMap] = useState({});
  const [locationMap, setLocationMap] = useState({});

  useEffect(() => {
    //Generates hash maps for use by dynamic filter options
    handleHashMaps(
      filteredExamData,
      setCandidateMap,
      setDateMap,
      setLocationMap
    );
  }, [filteredExamData]);

  useEffect(() => {
    handleFilter(
      examData,
      nameFilter,
      locationFilter,
      dateFilter,
      setFilteredExamData
    );
  }, [nameFilter, locationFilter, dateFilter]);

  //Sets filter states according to filter category
  function handleFilterCategories(event, filterCategory) {
    const filter = event.target.value;
    filterCategory === "CandidateName"
      ? setNameFilter(filter)
      : filterCategory === "LocationName"
      ? setLocationFilter(filter)
      : setDateFilter(filter);
  }

  //data for ui rendering
  const filterCategories = ["CandidateName", "LocationName", "Date"];
  const optionLabels = {
    CandidateName: "Names:",
    LocationName: "Locations:",
    Date: "Dates:",
  };

  return (
    <div className="flex flex-col bg-orange-400">
      <label
        htmlFor="dropdowns"
        className="dark:text--victvs-off-white text-victvs-dark-grey font-medium mb-2"
      >
        Filters
      </label>

      {filterCategories.map((filterCategory, index) => (
        <div className="relative px-1 mb-5" id="dropdowns" key={index}>
          <select
            id="dropdown"
            className="dropdown focus:outline-none focus:shadow-outline "
            value={
              filterCategory === "CandidateName"
                ? nameFilter
                : filterCategory === "LocationName"
                ? locationFilter
                : dateFilter
            }
            onChange={(event) => {
              handleFilterCategories(event, filterCategory);
            }}
          >
            <option disabled value="">
              {optionLabels[filterCategory] || ""}
            </option>
            {/* dynamic options for name dropdown */}
            {filterCategory === "CandidateName" &&
              Object.entries(candidateMap).map(([name, count]) => (
                <option key={name} value={name}>
                  {name} ({count})
                </option>
              ))}
            {/* dynamic options for location dropdown */}
            {filterCategory === "LocationName" &&
              Object.entries(locationMap).map(([location, count]) => (
                <option key={location} value={location}>
                  {location} ({count})
                </option>
              ))}
            {/* dynamic options for date dropdown */}
            {filterCategory === "Date" &&
              Object.entries(dateMap).map(([date, count]) => {
                //format date for date object
                const newDate = handleDate(date);
                return (
                  <option key={date} value={date}>
                    {newDate} ({count})
                  </option>
                );
              })}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filter;
