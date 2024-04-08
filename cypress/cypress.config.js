const {defineConfig} = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://prod.devopshub.org",
  },
});
