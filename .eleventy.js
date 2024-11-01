module.exports = async function(eleventyConfig) {
  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addShortcode("assetDepth", function() {
    const fileName = this.page.filePathStem.split('/').pop();
    return (fileName === 'index') ? '.' : '..';
  });

  // Copy assets.
  eleventyConfig.addPassthroughCopy("src/site/images");
  eleventyConfig.addPassthroughCopy("src/site/assets");
  eleventyConfig.addPassthroughCopy("src/site/**/*.css");
  eleventyConfig.addPassthroughCopy("src/site/**/*.js");
  eleventyConfig.addPassthroughCopy({
    "src/site/favico": "/"
  });

  // Return Config object.
  return {
    dir: {
      input: "src/site",
      output: "./_site",
      layouts: "_layouts"
    }
  };
};
