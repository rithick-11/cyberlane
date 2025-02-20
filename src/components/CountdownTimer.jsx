import { useState, useEffect } from "react";
import { differenceInSeconds, formatDuration, intervalToDuration } from "date-fns";

const CountdownTimer = () => {
  const targetDate = new Date("2025-02-24T00:00:00"); // Target Date: 24th Feb 2025
  const [timeLeft, setTimeLeft] = useState(differenceInSeconds(targetDate, new Date()));

  useEffect(() => {
    const timer = setInterval(() => {
      const secondsRemaining = differenceInSeconds(targetDate, new Date());
      setTimeLeft(secondsRemaining);
      if (secondsRemaining <= 0) clearInterval(timer); // Stop timer when countdown reaches zero
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [targetDate]);

  const formattedTime = formatDuration(
    intervalToDuration({ start: new Date(), end: targetDate })
  );

  return (
    <div>
      <p>{timeLeft > 0 ? formattedTime : "Time's up!"}</p>
    </div>
  );
};

export default CountdownTimer;
