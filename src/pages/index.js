import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {
  //State to store data from api get request
  const [examData, setExamData] = useState([]);

  //triggers when component mounts or detects change in dependancy array
  useEffect(() => {
    //Get request to api endpoint and save data to state
    axios
      .get("http://localhost:3000/api/exams")
      .then((response) => {
        setExamData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className="min-h-screen">
      <div className="w-full bg-red-400">
        {examData.map((exam) => (
          <div key={exam.id}>
            <h2>{exam.Title}</h2>
            <p>{exam.CandidateName}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
