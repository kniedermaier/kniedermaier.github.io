const fs = require("fs");
const path = require("path");

module.exports = function () {
  let sports = { years: [] };
  const pathname = path.join(__dirname, "/sports");

  try {
    const files = fs.readdirSync(pathname, "utf-8");
    const yearFiles = files.filter((file) => file.endsWith(".json"));
    yearFiles.forEach((filename) => {
      const contents = fs.readFileSync(`${pathname}/${filename}`, {
        encoding: "utf8",
      });
      const year = filename.split(".json")[0];
      const games = JSON.parse(contents);
      const sortedGames = games.sort((a, b) => {
        const dateA = Date.parse(a.dateTime);
        const dateB = Date.parse(b.dateTime);
        return dateA - dateB;
      }).map(game => ({
        ...game,
        formattedDate: new Date(game.dateTime).toLocaleDateString('en-US'),
        formattedTime: new Date(game.dateTime).toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric'
        })
      }))
      sports.years.push({ [year]: sortedGames });
    });
  } catch (err) {
    console.log(err);
  }

  return sports;
};
