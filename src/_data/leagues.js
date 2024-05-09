const sports = require("./sports");

module.exports = function () {
  const schedules = sports()
    .years.map((year) => year[Object.keys(year)])
    .flat();

  const leagues = schedules.reduce((acc, cur) => {
    if (acc.length) {
      const allLeagues = [...acc, cur.league];
      const uniqueLeagues = allLeagues.filter(
        (value, index, array) => array.indexOf(value) === index
      );
      return uniqueLeagues;
    } else {
      return [cur.league];
    }
  }, []);

  const formattedLeagues = leagues
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
    .map((value) => {
      const label = value === "WCL" ? `W Champion's League` : value;
      return {
        label,
        value,
      };
    });

  return formattedLeagues;
};
