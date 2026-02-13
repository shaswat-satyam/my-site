module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy('./bundle.css')
  return {
    passthroughFileCopy: true
  }
}
