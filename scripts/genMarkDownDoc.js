const {
  statSync,
  promises: { readdir },
} = require("fs");
const path = require("path");

async function eachDir(startPath) {
  const fullPath = path.join(__dirname, startPath);
  const res = await readdir(fullPath);
  res.forEach((name) => {
    const crtPath = path.join(fullPath, name);
    if (statSync(crtPath).isFile()) {
    } else {
      eachDir(fullPath);
    }
  });
}

async function main() {
  eachDir("../src/both");
}

main();
