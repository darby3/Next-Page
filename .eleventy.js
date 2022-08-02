module.exports = function(eleventyConfig) {
  // Add a filter using the Config API
  // eleventyConfig.addFilter( "myFilter", function() {});

  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addShortcode("whichPartial", function(data) {
    console.dir(data);
    return `${data}`;
  });

  // Copy assets.
  eleventyConfig.addPassthroughCopy("src/site/images");
  eleventyConfig.addPassthroughCopy("src/site/assets");
  eleventyConfig.addPassthroughCopy({
    "src/site/favico": "/"
  });

  // Need to manually add watch targets? The CSS wasn't actually
  // copying/reloading without this.
  // TODO: Maybe instead of having 11ty copy assets into place, I should just
  //       have my watch process do it, instead?
  eleventyConfig.setUseGitIgnore(false);
  eleventyConfig.addWatchTarget("src/site/assets");

  // Return Config object.
  return {
    dir: {
      input: "src/site",
      output: "./_site",
      layouts: "_layouts"
    }
  };
};
