import LiveClock from "react-live-clock";

const Clock = ({ theme }) => {
  const color = theme === "dark" ? "#F5f5f5" : "#1E2022";
  return (
    <div>
      <LiveClock
        format={"hh:mm:ss"}
        ticking={true}
        timezone={"Europe/London"}
        style={{ fontSize: "2.5rem", color: color }}
      />
    </div>
  );
};

export default Clock;
