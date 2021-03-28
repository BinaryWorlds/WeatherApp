const numberAsTeen = (num) => `0${num}`.slice(-2);

const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

export const dayName = (nr) => {
  const now = new Date().getDay();
  const day = now + nr > 6 ? now + nr - 7 : now + nr;
  return days[day];
};

export const getTime = (s) => {
  const d = new Date(s * 1000);

  let minutes = d.getMinutes();
  minutes = numberAsTeen(minutes);

  return { day: d.getDay(), hours: d.getHours(), minutes };
};

export const getLocalTime = (timezone = 0) => {
  const d = new Date();
  const time = d.getTime() + (d.getTimezoneOffset() * 60 + timezone) * 1000;

  const local = new Date(time);
  let minutes = local.getMinutes();
  minutes = numberAsTeen(minutes);

  return `${local.getHours()}:${minutes}`;
};
