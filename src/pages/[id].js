import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsCalendar, BsPerson, BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/router";

function ExamDetails({ exam }) {
  const router = useRouter();
  return (
    <div className="flex flex-col min-h-screen bg-victvs-light-grey dark:bg-victvs-dark-grey">
      {/* Navbar component */}
      {/* Navbar component */}
      <nav className="bg-victvs-off-white dark:bg-victvs-dark-grey toggle-text px-6 py-8 flex justify-between">
        <div
          className="flex items-center cursor-pointer"
          onClick={() => router.back()}
        >
          <BsArrowLeft className="mr-2" size={20} />
          <p className="text-lg">Back</p>
        </div>
        <h1 className="text-3xl font-bold text-victvs-blue">{exam.Title}</h1>
        <div className="flex items-center">
          <BsPerson className="mr-2" size={20} />
          <p className="text-lg">{exam.CandidateName}</p>
        </div>
      </nav>
      {/* Exam instructions and guidelines */}
      <div className=" dark:bg-victvs-off-white py-6 px-6">
        <h2 className="text-xl font-semibold mb-4">
          Exam instructions and guidelines:
        </h2>
        <p>Before the exam, please make sure to:</p>
        <ul className="list-disc ml-6">
          <li>Bring a valid photo ID.</li>
          <li>Bring any materials permitted by the exam regulations.</li>
          <li>Read the exam rules and regulations carefully.</li>
          <li>
            Arrive at the exam location at least 30 minutes before the scheduled
            start time.
          </li>
        </ul>
        <p>Please note that:</p>
        <ul className="list-disc ml-6">
          <li>Electronic devices are not permitted in the exam room.</li>
          <li>
            You will be assigned an exam seat and are not permitted to change
            seats during the exam.
          </li>
          <li>
            You must follow the instructions of the exam invigilator at all
            times.
          </li>
        </ul>
        <p>
          For more information, please visit the{" "}
          <a
            href="https://victvs.co.uk/candidates/candidate-guides/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Victvs website
          </a>
          .
        </p>
      </div>

      {/* Exam details container  */}
      <main className="flex-grow px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Exam location  */}
        <div className="bg-victvs-off-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Location</h2>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-victvs-yellow mr-2" size={20} />
            <p className="text-lg">{exam.LocationName}</p>
          </div>
        </div>
        {/* Exam duration and format */}
        <div className="bg-victvs-off-white p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold mb-4">
            Exam duration and format:
          </h2>
          <p>
            The exam consists of 50 questions and has a time limit of 120
            minutes. The exam is a multiple choice test.
          </p>
        </div>
        {/* Exam date  */}
        <div className="bg-victvs-off-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Date</h2>
          <div className="flex items-center">
            <BsCalendar className="text-victvs-green mr-2" size={20} />
            <p className="text-lg">{exam.Date}</p>
          </div>
        </div>
        {/* Exam invigilator details  */}
        <div className="bg-victvs-off-white p-4 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Invigilator Details</h2>
          <div className="flex flex-col">
            <p className="text-lg">John Smith</p>
            <p>01234 567890</p>
          </div>
        </div>
      </main>
      {/* Footer component */}
      <footer className="bg-victvs-off-white dark:bg-victvs-dark-grey toggle-text p-6 flex justify-center items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Victvs. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const { id } = params;

  try {
    const response = await axios.get(`http://localhost:3000/api/exams/${id}`);
    const exam = response.data[0];
    return { props: { exam } };
  } catch (error) {
    console.log(error);
    return { props: { exam: null } };
  }
}

export default ExamDetails;
