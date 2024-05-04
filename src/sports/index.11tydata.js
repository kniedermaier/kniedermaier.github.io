module.exports = {
  eleventyComputed: {
    sports: (data) => {
      return data.sports.years.sort((a, b) => {
        const keyA = Number(Object.keys(a)[0]);
        const keyB = Number(Object.keys(b)[0]);
        if (keyA < keyB) return 1;
        if (keyA > keyB) return -1;
        return 0;
      });
    },
  },
};
