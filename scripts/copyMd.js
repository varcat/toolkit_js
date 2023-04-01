const { readFileSync,writeFileSync,rmSync, appendFileSync, readdirSync, writeSync, statSync, promises: {readdir} } = require("fs");
const path = require("path");

async function main() {
  const fnPath = path.resolve(__dirname, '../src/functions');
  const structPath = path.resolve(__dirname, '../src/struct');
  const eachDirTree = (pathStr, cb) => {
    readdirSync(pathStr).forEach(link => {
      link = path.join(pathStr, link);
      if (statSync(link).isFile()) {
        if (path.extname(link) === '.md') {
          cb(link);
        }
        return;
      }
      eachDirTree(link, cb);
    });
  }
  const targetFilePath = path.join(__dirname, '../docs/zh-cn/api/README.md');

  writeFileSync(targetFilePath, '# API <!-- {docsify-ignore} -->\n\n')

  const callback = (mdFilePath) => {
    const fnName = path.parse(mdFilePath).name;
    const content = readFileSync(mdFilePath, {encoding: 'utf-8'});
    appendFileSync(targetFilePath, `## <a id="${fnName}">${fnName}</a>

${content}
`)
  };

  eachDirTree(fnPath, callback);
  appendFileSync(targetFilePath, '----\n\n');
  eachDirTree(structPath, callback);

  const content = readFileSync(path.join(__dirname, '../docs/zh-cn/api/abandon.md'), {encoding: 'utf-8'});
  appendFileSync(targetFilePath, `----

## 废弃API

${content}`);
}

main();
