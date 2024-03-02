const bookshelf = require("./bookshelf.json");

module.exports = function () {
  const books = bookshelf.years.map((year) => year[Object.keys(year)]).flat();

  const tags = books.reduce((acc, cur) => {
    if (acc.length) {
      const allTags = [...acc, ...cur.tags];
      const uniqueTags = allTags.filter(
        (value, index, array) => array.indexOf(value) === index
      );
      return uniqueTags;
    } else {
      return cur.tags;
    }
  }, []);

  const formattedTags = tags
    .sort((a, b) => {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    })
    .map((tag) => {
      let label;

      // special formatting
      switch (tag) {
        case "pdx-book-fest":
          label = "PDX Book Festival";
          break;
        case "ya":
        case "lgbtq":
          label = tag.toUpperCase();
          break;
        case "rom-com":
          label = "Rom-com";
          break;
        case "sci-fi-fantasy":
          label = "Sci-fi & Fantasy";
          break;
        default:
          label = tag.split("-").join(" ");
      }

      return {
        label,
        value: tag,
      };
    });

  return formattedTags;
};
