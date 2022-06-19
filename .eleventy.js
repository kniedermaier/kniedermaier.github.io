module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/");
	eleventyConfig.addWatchTarget("./src/assets/");
  eleventyConfig.addPassthroughCopy("./CNAME");

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
};
