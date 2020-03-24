let generateContentIndex = require('./generateContentIndex.js');

async function main() {
  await generateContentIndex();
  console.log('Success.');
}

main().catch((error) => {
  console.error(error);
});
