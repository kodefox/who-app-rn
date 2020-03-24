import { Asset } from 'expo-asset';

type ContentIndex = ObjectOf<number | string>;

let CONTENT_INDEX: ObjectOf<ContentIndex> = {};

/**
 * Metro bundler does not support dynamic require.
 * e.g. `let module = require(path) // This throws an error`
 *
 * Instead, we could run a script to import all assets before bundling,
 * putting all the assets inside a single index.
 * Then, in the runtime, we could use the index to get the module.
 * If the requested module does not exist on the index, we could assume
 * the requested module is not available locally.
 */
try {
  // TODO: Consider using lazy loading on the generated index.
  CONTENT_INDEX = require('../../generated/index').default;
} catch {
  // To generate content index, run `yarn codegen`.
  CONTENT_INDEX = {};
}

export default async function getLocalFlowContent(path: string, name: string) {
  let module = CONTENT_INDEX[path]?.[name];
  if (module == null) {
    throw new Error('[Flow] Local content not found.');
  }
  let asset = Asset.fromModule(module);
  // Uncomment for asset caching.
  // await asset.downloadAsync();
  if (asset.type !== 'yaml') {
    throw new Error('[Flow] Unrecognized file type.');
  }
  let res = await fetch(asset.uri);
  return res.text();
}
