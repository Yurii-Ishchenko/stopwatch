const pad = (value) => {
  if (value < 10) {
    return `0${value}`;
  }
  return `${value}`;
};

export const getTimeComponents = (time) => {
  const hours = pad(
    Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  const milliSecs = pad(Math.floor((time % 1000) / 10));
  return { hours, mins, secs, milliSecs };
};
