import { useState, useEffect } from "react";
import {
  differenceInSeconds,
  formatDuration,
  intervalToDuration,
} from "date-fns";
import { FaMapPin } from "react-icons/fa";

const CountdownTimer = () => {
  const targetDate = new Date("2025-02-24T10:00:00"); // Target Date: 24th Feb 2025
  const [timeLeft, setTimeLeft] = useState(
    differenceInSeconds(targetDate, new Date())
  );

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
      {timeLeft > 0 ? (
        <p>{formattedTime}</p>
      ) : (
        <p className="text-green-300 text-xl flex items-center animate-pulse">
          <FaMapPin className="text-white" />
          live
        </p>
      )}
    </div>
  );
};

export default CountdownTimer;
