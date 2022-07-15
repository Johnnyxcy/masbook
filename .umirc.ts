import { defineConfig } from "dumi";
import path from "path";

export default defineConfig({
  title: "masbook",
  favicon:
    "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
  logo: "https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png",
  outputPath: "docs-dist",
  alias: {
    "@masbook": path.resolve(__dirname, "src/masbook"),
  },
  chainWebpack(config) {
    config.plugin("monaco-editor").use(require("monaco-editor-webpack-plugin"));
  },
  // more config: https://d.umijs.org/config
});
