const {
  statSync,
  promises: { readdir, readFile },
} = require("fs");
const path = require("path");
const fs = require("fs");

async function eachDir(fullPath) {
  const res = await readdir(fullPath);
  res.forEach((name) => {
    const crtPath = path.join(fullPath, name);
    if (statSync(crtPath).isFile()) {
      if (path.posix.basename(crtPath).endsWith(".md")) {
        console.log(path.posix.basename(crtPath));
      }
    } else {
      eachDir(crtPath);
    }
  });
}

async function main() {
  eachDir(path.join(__dirname, "../src/both"));
}

main();
