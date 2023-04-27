import React, { useState, useEffect } from "react";
import handleHashMaps from "../utils/handleHashMaps";
import handleDate from "@/utils/handleDate";
import handleFilter from "@/utils/handleFilter";
import { motion } from "framer-motion";

//animation variants
const variants = {
  hidden: {
    opacity: 0,
    y: 15,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 1.5,
      ease: "easeOut",
    },
  },
};

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
  const handleFilterCategories = (event, filterCategory) => {
    const filter = event.target.value;
    filterCategory === "CandidateName"
      ? setNameFilter(filter)
      : filterCategory === "LocationName"
      ? setLocationFilter(filter)
      : setDateFilter(filter);
  };

  const handleReset = () => {
    setNameFilter("");
    setLocationFilter("");
    setDateFilter("");
  };

  //data for ui rendering
  const filterCategories = ["CandidateName", "LocationName", "Date"];
  const optionLabels = {
    CandidateName: "Names:",
    LocationName: "Locations:",
    Date: "Dates:",
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      className="flex flex-col p-1"
    >
      <motion.label
        htmlFor="dropdowns"
        className="toggle-text text-sm sm:text-base font-medium mb-4"
        variants={variants}
      >
        Exam filters
      </motion.label>

      {filterCategories.map((filterCategory, index) => (
        <motion.div
          className="relative  mb-5"
          id="dropdowns"
          key={index}
          variants={variants}
        >
          <motion.select
            id="dropdown"
            className="dropdown focus:outline-none focus:shadow-outline text-sm "
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
            variants={variants}
          >
            <option value="">{`All ${
              optionLabels[filterCategory] || ""
            }`}</option>
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
          </motion.select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 12l-5-5 1.41-1.41L10 9.17l3.59-3.58L15 7l-5 5z" />
            </svg>
          </div>
        </motion.div>
      ))}
      <motion.button
        variants={variants}
        onClick={handleReset}
        className="w-full text-sm font-medium bg-victvs-light-grey dark:bg-victvs-lightest-grey border border-gray-400 hover:border-gray-500 px-4 py-2  rounded-xl shadow ;"
      >
        Reset
      </motion.button>
    </motion.div>
  );
};

export default Filter;
