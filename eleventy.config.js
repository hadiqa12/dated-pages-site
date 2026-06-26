export default function (eleventyConfig) {
  eleventyConfig.setTemplateFormats(["md", "njk"]);

  eleventyConfig.addPassthroughCopy("src/index.html");
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/privacy");
  eleventyConfig.addPassthroughCopy("src/terms");
  eleventyConfig.addPassthroughCopy({ "src/*.png": "/" });

  eleventyConfig.ignores.add("src/posts/_*.md");

  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("posts")
      .sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
  };
}
