module.exports = {
  eleventyComputed: {
    items: (data) => {
      return data.bookshelf.years;
    },
  },
};
