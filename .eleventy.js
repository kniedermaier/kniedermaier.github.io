const { minify } = require('html-minifier-terser');
const CleanCSS = require("clean-css");

module.exports = function (config) {
  config.addPassthroughCopy("./src/assets/");
  config.addWatchTarget("./src/assets/");
  config.addPassthroughCopy("./CNAME");
  config.addPassthroughCopy({ "src/robots.txt": "/robots.txt" });

  config.addTransform("htmlmin", function (content) {
    if (this.page.outputPath && this.page.outputPath.endsWith(".html")) {
      let minified = minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }

    return content;
  });

  config.addFilter("cssmin", function (code) {
    return new CleanCSS({}).minify(code).styles;
  });

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
