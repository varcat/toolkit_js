const { rmSync } = require("fs");
const path = require("path");

rmSync(path.join(__dirname, "../dist"), { recursive: true, force: true });
