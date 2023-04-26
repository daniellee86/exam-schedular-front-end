const handleHashMaps = (
  filteredExamData,
  setCandidateMap,
  setDateMap,
  setLocationMap
) => {
  const { candidateMap, dateMap, locationMap } = filteredExamData.reduce(
    (acc, { CandidateName, Date, LocationName }) => {
      // Create a hash map for CandidateName
      acc.candidateMap[CandidateName] =
        (acc.candidateMap[CandidateName] || 0) + 1;

      // Create a hash map for Date
      acc.dateMap[Date] = (acc.dateMap[Date] || 0) + 1;

      // Create a hash map for LocationName
      acc.locationMap[LocationName] = (acc.locationMap[LocationName] || 0) + 1;

      return acc;
    },
    { candidateMap: {}, dateMap: {}, locationMap: {} }
  );

  setCandidateMap(candidateMap);
  setDateMap(dateMap);
  setLocationMap(locationMap);
};

export default handleHashMaps;
