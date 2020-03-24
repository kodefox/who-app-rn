let { readdir, outputFile } = require('fs-extra');
let { relative, extname, join } = require('path');

// This should be the same as the the path inside "src/content/endpoints.ts"
const FLOWS_PATH = 'content/flows/v1';
const IMG_PATH = 'content/img';

async function generateContentIndex() {
  let index = {
    [FLOWS_PATH]: [],
    [IMG_PATH]: [],
  };

  for (let fileName of await getYamlFileList('./' + FLOWS_PATH)) {
    index[FLOWS_PATH].push(
      `'${fileName}': require('../${FLOWS_PATH}/${fileName}')`,
    );
  }

  for (let imgPath of await getImgFileList('./' + IMG_PATH)) {
    index[IMG_PATH].push(`'${imgPath}': require('../${IMG_PATH}/${imgPath}')`);
  }

  let output = [
    'let index = {',
    `  '${FLOWS_PATH}': { ${index[FLOWS_PATH].join(', ')} },`,
    `  '${IMG_PATH}': { ${index[IMG_PATH].join(', ')} },`,
    '};',
    'export default index;',
  ].join('\n');

  await outputFile('./generated/content.ts', output + '\n');
}

async function getYamlFileList(path) {
  let list = await readdir(path);
  return list.filter((name) => name.toLowerCase().endsWith('.yaml'));
}

// TODO: Handle .svg
// We use svg transformer, so svg file will be transformed into component
// instead of module identifier when imported.
let ALLOWED_IMG_EXTS = ['.png'];

async function getImgFileList(path) {
  let list = await getFiles(path);
  return list
    .filter((filePath) =>
      ALLOWED_IMG_EXTS.includes(extname(filePath.toLowerCase())),
    )
    .map((filePath) => relative(path, filePath));
}

async function getFiles(path) {
  // Use readdir from fs instead of fs-extra to use isDirectory method.
  let dirents = await require('fs').promises.readdir(path, {
    withFileTypes: true,
  });
  let files = await Promise.all(
    dirents.map((dirent) => {
      let res = join(path, dirent.name);
      return dirent.isDirectory() ? getFiles(res) : res;
    }),
  );
  // Array.flat and Array.flatMap is not yet available on node v10.
  return Array.prototype.concat(...files);
}

module.exports = generateContentIndex;
