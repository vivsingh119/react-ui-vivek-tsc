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
      extract: path.resolve("dist/styles.css"), // Outputs to dist/styles.css
      use: ["sass"], // Use Sass for SCSS processing
      minimize: true, // Minify CSS for production
    }),
  ],
};
