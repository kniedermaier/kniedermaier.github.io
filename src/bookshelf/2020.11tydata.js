module.exports = {
  eleventyComputed: {
    items: (data) => {
      return data.bookshelf.years.filter((year) => !!year[2020]);
    },
  },
};
