// @ts-check
import { defineConfig } from '@vivliostyle/cli';

export default defineConfig({
  title: "Mezolit",
  author: "Peter Ellis",
  language: "en-GB",
  browser: "chrome@146.0.7680.153",
  image: "ghcr.io/vivliostyle/cli:10.5.0",
  entry: ["index.html"],
});
