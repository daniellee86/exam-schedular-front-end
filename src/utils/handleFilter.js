import React from "react";

const handleFilter = (
  examData,
  nameFilter,
  locationFilter,
  dateFilter,
  setFilteredExamData
) => {
  //   IF NOT FILTER PARAMETERS SET FILTERED TO FULL DATA SET
  if (!nameFilter && !locationFilter && !dateFilter) {
    setFilteredExamData(examData);
    return;
  }

  //FILTER CHAIN THAT CHECKS IF FILTER PARAMS ARE FALSY
  const filtered = examData
    .filter(
      (exam) =>
        !nameFilter ||
        exam.CandidateName.toLowerCase().includes(nameFilter.toLowerCase())
    )
    .filter(
      (exam) =>
        !locationFilter ||
        exam.LocationName.toLowerCase().includes(locationFilter.toLowerCase())
    )
    .filter(
      (exam) =>
        !dateFilter ||
        exam.Date.toLowerCase().includes(dateFilter.toLowerCase())
    );

  setFilteredExamData(filtered);
};

export default handleFilter;
