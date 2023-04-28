import { useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCalendar } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { motion } from "framer-motion";
import CountUp from "react-countup";

function Exams({ filteredExamData, setFilteredExamData, setExamData }) {
  //runs on mount, gets exams, saves to global state
  useEffect(() => {
    axios
      .get("https://exam-schedular-api.onrender.com/api/exams")
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
          <motion.div
            className="flex items-center justify-between mb-1 sm:mb-4 mr-2 toggle-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <div>
              <h2 className="list-title">Exam List</h2>
              <p className="hidden sm:block text-sm">
                <span className="font-bold">
                  {filteredExamData.length} in total,&nbsp;
                </span>
                proceed to check them
              </p>
            </div>
            <div className="hidden sm:flex flex-col items-center mr-2">
              <h2 className="list-title">
                <CountUp end={filteredExamData.length} duration={3}></CountUp>
              </h2>
              <p className="text-sm">In progress</p>
            </div>
          </motion.div>
          {/* LIST HEADINGS */}
          <motion.div
            className="hidden sm:flex items-center border-y border-gray-300 py-2 mb-2 mr-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {titles.map((title, index) => (
              <div className="exam-title" key={index}>
                <p className="exam-text">{title}</p>
              </div>
            ))}
          </motion.div>

          {/* EXAM LIST */}
          {filteredExamData.map((exam, index) => (
            //INDIVIDUAL LIST COMPONENT
            <Link href={`/${exam.id}`} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 + 0.1 * index }}
                whileHover={{ scale: 0.99 }}
                className="flex items-center justify-between border border-gray-300 py-2 sm:py-3 mb-2 mr-2 rounded-lg sm:rounded-xl shadow cursor-pointer"
                key={index}
              >
                {/* TITLE */}
                <div className="flex-1 flex items-center justify-center ">
                  <p className="font-medium text-sm toggle-text">
                    {exam.Title}
                  </p>
                </div>

                {/* NAME */}
                <div className=" list-component-section ">
                  <BsPerson className="text-victvs-blue" size={20}></BsPerson>
                  <span className="text-sm toggle-text">
                    {exam.CandidateName}
                  </span>
                </div>
                {/* LOCATION */}
                <div className="flex-1 hidden sm:flex items-center justify-center space-x-4 text-victvs-grey dark:text-victvs-off-white">
                  <FaMapMarkerAlt className="text-victvs-yellow" size={15} />
                  <span className="text-sm toggle-text">
                    {exam.LocationName}
                  </span>
                </div>
                {/* DATE */}
                <div className="flex-1 hidden sm:flex items-center justify-center space-x-4 text-victvs-grey dark:text-victvs-off-white">
                  <BsCalendar className="text-victvs-green" size={15} />
                  <span className="text-victvs-red/80 text-sm">
                    {exam.Date}
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </section>
      )}
    </>
  );
}

export default Exams;
