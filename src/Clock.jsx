import { useEffect, useEffectEvent, useState } from "react";
const Clock = ({ color }) => {
  const [time, setTime] = useState(0);

  const countControl = useEffectEvent(() => {
    setTime(time + 1);
  });

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <div
        style={{
          color: color,
          backgroundColor: "black",
          width: "200px",
          height: "50px",
        }}
      >
        Clock Component - {time}
      </div>
    </>
  );
};

export default Clock;
