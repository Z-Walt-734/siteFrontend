const Countdown = (goal) => {
  // convert current time to seconds (Date.now is millisec)
  const currentDay = Math.round(Date.now() / 1000);
  let timeLeft = {};

  // Time in seconds to UTC
  const deadlineDay = goal;

  const timeDiff = Math.abs(deadlineDay - currentDay);

  if (timeDiff > 0) {
    timeLeft = {
      days: Math.floor(timeDiff / ( 60 * 60 * 24)),
      hours: Math.floor((timeDiff / ( 60 * 60)) % 24),
      minutes: Math.floor((timeDiff / 60 ) % 60),
      seconds: Math.floor((timeDiff % 60)),
    };
  }

  return timeLeft;
};





export default Countdown;
