import { useEffect } from "react";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";

function Exams({ filteredExamData, setFilteredExamData, setExamData }) {
  //runs on mount, gets exams, saves to global state
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/exams")
      .then((response) => {
        setExamData(response.data);
        setFilteredExamData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //titles for UI
  const titles = ["Title", "Name", "Location", "Date"];

  return (
    <>
      {filteredExamData && (
        // LIST STATS
        <section className="h-full overflow-auto toggle-background">
          <div className="flex items-center justify-between mb-4 mr-2 toggle-text">
            <div className="">
              <h2 className="list-title">Exam List</h2>
              <p className="text-sm">
                <span className="font-bold">
                  {filteredExamData.length} in total,
                </span>{" "}
                proceed to check them
              </p>
            </div>
            <div className="flex flex-col items-center mr-2">
              <h2 className="list-title">{filteredExamData.length}</h2>
              <p className="text-sm">In progress</p>
            </div>
          </div>
          {/* LIST HEADINGS */}
          <div className="flex items-center border-y border-gray-300 py-2 mb-2 mr-2">
            {titles.map((title, index) => (
              <div className="exam-title" key={index}>
                <p className="exam-text">{title}</p>
              </div>
            ))}
          </div>

          {/* EXAM LIST */}
          {filteredExamData.map((exam, index) => (
            //INDIVIDUAL LIST COMPONENT
            <div
              className="flex items-center justify-between border border-gray-300 py-3 mb-2 mr-2 rounded-xl shadow cursor-pointer"
              key={index}
            >
              {/* TITLE */}
              <div className="flex-1 flex items-center justify-center ">
                <p className="font-medium text-sm toggle-text">{exam.Title}</p>
              </div>

              {/* NAME */}
              <div className=" list-component-section ">
                <BsPerson className="text-victvs-blue" size={20}></BsPerson>
                <span className="text-sm toggle-text">
                  {exam.CandidateName}
                </span>
              </div>
              {/* LOCATION */}
              <div className="list-component-section">
                <FaMapMarkerAlt className="text-victvs-yellow" size={15} />
                <span className="text-sm toggle-text">{exam.LocationName}</span>
              </div>
              {/* DATE */}
              <div className="list-component-section">
                <BsCalendar className="text-victvs-green" size={15} />
                <span className="text-victvs-red/80 text-sm">{exam.Date}</span>
              </div>
            </div>
          ))}
        </section>
      )}
    </>
  );
}

export default Exams;
