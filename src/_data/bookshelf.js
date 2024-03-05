const fs = require("fs");
const path = require("path");

module.exports = function () {
  let books = { years: [] };
  const pathname = path.join(__dirname, "/bookshelf");

  try {
    const files = fs.readdirSync(pathname, "utf-8");
    const yearFiles = files.filter((file) => file.endsWith(".json"));
    yearFiles.forEach((filename) => {
      const contents = fs.readFileSync(`${pathname}/${filename}`, {
        encoding: "utf8",
      });
      const year = filename.split(".json")[0];
      books.years.push({ [year]: JSON.parse(contents) });
    });
  } catch (err) {
    console.log(err);
  }

  return books;
};
