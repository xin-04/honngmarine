const ejsPlugin = require("@11ty/eleventy-plugin-ejs");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(ejsPlugin);
    eleventyConfig.addPassthroughCopy("src/image");
    eleventyConfig.addPassthroughCopy("src/data");

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "_site"
        },
        templateFormats: ["ejs", "html", "md"],
        htmlTemplateEngine: "ejs"
    };
};