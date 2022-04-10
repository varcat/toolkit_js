const {
  statSync,
  promises: { readdir, readFile },
} = require("fs");
const path = require("path");
const fs = require("fs");
const os = require("os");

async function eachDir(fullPath) {
  const res = await readdir(fullPath);
  res.forEach((name) => {
    const crtPath = path.join(fullPath, name);
    if (statSync(crtPath).isFile()) {
      if (path.basename(crtPath).endsWith(".md")) {
        const dirNameList = path.dirname(crtPath).split(path.sep);
        const toolName = dirNameList[dirNameList.length - 1];
        console.log(toolName);
        const content = fs.readFileSync(crtPath, "utf8");
        console.log(content, __dirname);
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
