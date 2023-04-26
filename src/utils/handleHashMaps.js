const handleHashMaps = (
  examData,
  setCandidateMap,
  setDateMap,
  setLocationMap
) => {
  examData?.forEach((item) => {
    const { CandidateName, Date, LocationName } = item;

    // Create a hash map for CandidateName
    setCandidateMap((prevCandidateMap) => {
      const updatedCandidateMap = { ...prevCandidateMap };
      updatedCandidateMap[CandidateName] =
        (prevCandidateMap[CandidateName] || 0) + 1;
      return updatedCandidateMap;
    });

    // Create a hash map for Date
    setDateMap((prevDateMap) => {
      const updatedDateMap = { ...prevDateMap };
      updatedDateMap[Date] = (prevDateMap[Date] || 0) + 1;
      return updatedDateMap;
    });

    // Create a hash map for LocationName
    setLocationMap((prevLocationMap) => {
      const updatedLocationMap = { ...prevLocationMap };
      updatedLocationMap[LocationName] =
        (prevLocationMap[LocationName] || 0) + 1;
      return updatedLocationMap;
    });
  });
};

export default handleHashMaps;
