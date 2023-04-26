import React, { useState } from "react";

const Filter = ({ examData }) => {
  const [selectedOption, setSelectedOption] = useState("");

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  const filterCategories = ["CandidateName", "LocationName", "Date"];

  return (
    <div className="flex flex-col bg-orange-400">
      <label
        htmlFor="dropdowns"
        className="dark:text--victvs-off-white text-victvs-dark-grey font-medium mb-2"
      >
        Filters
      </label>
      {filterCategories.map((filterCategory) => (
        <div className="relative px-1 mb-5" id="dropdowns">
          <select
            id="dropdown"
            className="dropdown focus:outline-none focus:shadow-outline "
            value={selectedOption}
          >
            <option disabled value="">
              Select an option
            </option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
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
