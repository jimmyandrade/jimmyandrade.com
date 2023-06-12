import { useEffect, useState } from 'react';

export const useCountdown = (value: string) => {
  const calculateTimeLeft = () => {
    const dateValue = new Date(value);

    const zeroValue = 0;
    const difference = dateValue.getTime() - new Date().getTime();
    const timeLeft = {
      days: zeroValue,
      hours: zeroValue,
      minutes: zeroValue,
      seconds: zeroValue,
    };

    if (difference > zeroValue) {
      const milliseconds = 1000;
      const seconds = 60;
      const minutes = 60;
      const hours = 24;

      timeLeft.seconds = Math.floor((difference / milliseconds) % seconds);
      timeLeft.minutes = Math.floor(
        (difference / milliseconds / seconds) % minutes
      );
      timeLeft.hours = Math.floor(
        (difference / (milliseconds * seconds * minutes)) % hours
      );
      timeLeft.days = Math.floor(
        difference / (milliseconds * seconds * minutes * hours)
      );
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timeout = 1000;
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, timeout);
    return () => clearTimeout(timer);
  });

  return timeLeft;
};
