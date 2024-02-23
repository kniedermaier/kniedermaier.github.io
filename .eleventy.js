module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/css/");
	eleventyConfig.addWatchTarget("./src/css/");
  eleventyConfig.addPassthroughCopy("./src/assets/");
	eleventyConfig.addWatchTarget("./src/assets/");
  eleventyConfig.addPassthroughCopy("./CNAME");
  eleventyConfig.addPassthroughCopy({ 'src/robots.txt': '/robots.txt' });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "docs",
    },
  };
};
