const {
  promises: { rm },
} = require("fs");
const path = require("path");

rm(path.join(__dirname, "../types"), { recursive: true, force: true });
