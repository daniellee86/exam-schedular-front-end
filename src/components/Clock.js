import LiveClock from "react-live-clock";

const Clock = ({ theme }) => {
  const color = theme === "dark" ? "#F5f5f5" : "#1E2022";
  const currentDate = new Date().getTime(); // get current Unix timestamp
  return (
    <div>
      <LiveClock
        format={"hh:mm:ss"}
        ticking={true}
        date={currentDate}
        noSsr={true}
        style={{ fontSize: "2.5rem", color: color }}
      />
    </div>
  );
};

export default Clock;
