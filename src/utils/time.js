export const getLocalTime = (timezone = 0) => {
  const d = new Date();
  const time = d.getTime() + (d.getTimezoneOffset() * 60 + timezone) * 1000;

  const local = new Date(time);
  return `${local.getHours()}:${`0${local.getMinutes()}`.slice(-2)}`;
};
