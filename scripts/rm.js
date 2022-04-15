const { rmSync } = require("fs");
const path = require("path");

rmSync(path.join(__dirname, "../types"), { recursive: true, force: true });
