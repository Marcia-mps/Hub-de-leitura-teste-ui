const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
  },
  baseUrl: "http://localhost:3000/",
  projectId: "vawrr7"
  },
});
