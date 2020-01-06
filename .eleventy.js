module.exports = function(eleventyConfig) {
  // Add a filter using the Config API
  // eleventyConfig.addFilter( "myFilter", function() {});

  // Universal Shortcodes (Adds to Liquid, Nunjucks, Handlebars)
  eleventyConfig.addShortcode("whichPartial", function(data) {
    console.dir(data);
    return `${data}`;
  });

  // Return Config object.
  return {
    dir: {
      input: "pages",
      includes: "../templates/partials",
      layouts: "../templates/layouts",
      output: "./build"
    }
  };
};
