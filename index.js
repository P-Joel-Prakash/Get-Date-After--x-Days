const addDays = require("date-fns/addDays");

const getDateAfterDays = (days) => {
  const startDate = new Date(2020, 7, 22); // 22nd Aug 2020 (Note: month index starts from 0, so 7 represents August)
  const dateAfterDays = addDays(startDate, days);
  const formattedDate = `${dateAfterDays.getDate()}-${
    dateAfterDays.getMonth() + 1
  }-${dateAfterDays.getFullYear()}`;
  return formattedDate;
};

module.exports = getDateAfterDays;
