let { readdir, outputFile } = require('fs-extra');

async function generateContentIndex() {
  let index = {
    'content/flows/v1': [],
  };

  for (let fileName of await getYamlFileList('./content/flows/v1')) {
    index['content/flows/v1'].push(
      `'${fileName}': require('../content/flows/v1/${fileName}')`,
    );
  }

  let output = [
    'let index = {',
    `  'content/flows/v1': { ${index['content/flows/v1'].join(', ')} },`,
    '};',
    'export default index;',
  ].join('\n');

  await outputFile('./generated/index.ts', output + '\n');
}

async function getYamlFileList(path) {
  let list = await readdir(path);
  return list.filter((name) => name.endsWith('.yaml'));
}

module.exports = generateContentIndex;
