export const convertIsoDate = (isoDate = '2020-07-17T07:15:09.000Z') => {
  console.log(isoDate, checkIsoDate(isoDate))
  if (!checkIsoDate(isoDate)) return isoDate;
  const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thrusday', 'Friday', 'Saturday'];
  const monthsArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dateObj = new Date(isoDate);
  const dayName = daysArray[dateObj.getDay()];
  const dayNum = appendTh(dateObj.getDate());
  const monthName = monthsArray[dateObj.getMonth()];
  const year = dateObj.getFullYear();
  const time = `${dateObj.getHours()}:${dateObj.getMinutes()}`;
  const formattedDateString = `${dayName}, ${monthName} ${dayNum}, ${year}, ${time}`;
  return formattedDateString;
}

const appendTh = function (d) {
  if (d > 3 && d < 21) return `${d}th`;
  switch (d % 10) {
    case 1: return `${d}st`;
    case 2: return `${d}nd`;
    case 3: return `${d}rd`;
    default: return `${d}th`;
  }
}

const checkIsoDate = (isoDate) => {
  const isoDateRegex = /\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/;
  if (!isoDateRegex.test(isoDate)) return false;
  return new Date(isoDate).toISOString() === isoDate;
}
