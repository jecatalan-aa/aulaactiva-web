module.exports = function(eleventyConfig) {
    // Le decimos a Eleventy que copie estas carpetas al sitio final tal cual.
    eleventyConfig.addPassthroughCopy("assets/images");
    eleventyConfig.addPassthroughCopy("images"); // <-- AÑADE ESTA LÍNEA
    eleventyConfig.addPassthroughCopy("css"); 
  
    return {
      dir: {
        input: ".",
        includes: "_includes", // Carpeta para plantillas
        output: "_site"      // Carpeta donde se genera el sitio
      }
    };
  };