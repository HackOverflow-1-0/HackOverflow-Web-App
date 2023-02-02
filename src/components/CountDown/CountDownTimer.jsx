import { useCountdown } from "../../Hooks/useCountdown";
import { useEffect, useRef, useState } from "react";

import CountDownCard from "./CountDownCard";

const CountDownTimer = () => {
  //card ref
  const date = new Date("2023-03-17");
  const [days, hours, minutes, seconds] = useCountdown(date);
  const SecondsCardRef = useRef(null);
  const MinutesCardRef = useRef(null);
  const HoursCardRef = useRef(null);
  const DaysCardRef = useRef(null);
  //state
  const [dayss, setDays] = useState(days);
  const [hourss, setHours] = useState(hours);
  const [minutess, setMinutes] = useState(minutes);
  const [secondss, setSeconds] = useState(seconds);

  useEffect(() => {
    // seconds === 0 && setSeconds(59);
    // minutes === 0 && setMinutes(59);
    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(seconds);
        SecondsCardRef.current.classList.toggle("rotate");
      }, 1000);
    }
    if (seconds === 0 && minutes > 0) {
      setMinutes(minutes);
      MinutesCardRef.current.classList.toggle("rotate");
    }
  }, [seconds, minutes]);
  useEffect(() => {
    hours === 0 && setHours(23);
    if (minutes === 0 && hours > 0) {
      setHours(hours - 1);
      HoursCardRef.current.classList.toggle("rotate");
    }
  }, [minutes, hours]);
  useEffect(() => {
    days === 14 && setDays(13);
    hours === 0 &&
      setDays(days - 1) &&
      DaysCardRef.current.classList.toggle("rotate");
  }, [hours, days]);
  return (
    <div className="countdown__container">
      <CountDownCard label="days" number={days} cardRef={DaysCardRef} />
      <CountDownCard label="hours" number={hours} cardRef={HoursCardRef} />
      <CountDownCard
        label="minutes"
        number={minutes}
        cardRef={MinutesCardRef}
      />
      <CountDownCard
        label="seconds"
        number={seconds}
        cardRef={SecondsCardRef}
      />
    </div>
  );
};

export default CountDownTimer;
