import postcss from "rollup-plugin-postcss";
import path from "path";

export default {
  input: "src/index.scss",
  output: {
    file: "dist/style.css",
    format: "esm",
  },

  plugins: [
    postcss({
      extract: path.resolve("dist/styles.css"), // Outputs to dist/styles.css, itwill help in plain js env if any want our css/scss class name i.e; <link rel="stylesheet" href="path-to-library/dist/styles.css">
      use: ["sass"], // Configures the plugin to use Sass (node-sass or dart-sass) to process .scss files. & Ensures SCSS files are compiled into standard CSS before being bundled.
      minimize: true, // Minify CSS for production,removing whitespace, comments, and unnecessary characters.  
    }),
  ],
};
