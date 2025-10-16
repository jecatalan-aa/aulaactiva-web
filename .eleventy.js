module.exports = function(eleventyConfig) {
    // Copia la carpeta de imágenes del blog Y la carpeta de imágenes principal
    eleventyConfig.addPassthroughCopy("assets");
    eleventyConfig.addPassthroughCopy("images");
  
    return {
      dir: {
        input: ".",
        includes: "_includes",
        output: "_site"
      },
      markdownTemplateEngine: "njk",
      htmlTemplateEngine: "njk",
      dataTemplateEngine: "njk"
    };
  };