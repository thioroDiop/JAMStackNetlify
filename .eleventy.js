module.exports = function (eleventyConfig) {
    // On copie le css directement vers la sortie
    eleventyConfig.addPassthroughCopy("style.css");
    eleventyConfig.addPassthroughCopy("assets/");
    eleventyConfig.addPassthroughCopy("admin/config.yml");
};