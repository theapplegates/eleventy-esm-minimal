/**
 *  @param {import("@11ty/eleventy/src/UserConfig")} eleventyConfig
 */

import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
  eleventyConfig.addWatchTarget('./src/*');
  eleventyConfig.addPassthroughCopy('src/*.{css,js,jpg,ico}');
  eleventyConfig.addPassthroughCopy("assets/images");
  
  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
      extensions: "html",
      formats: ["avif", "webp", "jpeg"],
      defaultAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    });

  return {
    dir: {
      output: 'dist',
      input: 'src'
    },
  };
}