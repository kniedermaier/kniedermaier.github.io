module.exports = {
  eleventyComputed: {
    books: (data) => {
      return data.bookshelf.years.filter((year) => !!year[2020]);
    },
  },
};
