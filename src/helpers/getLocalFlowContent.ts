import getLocalAsset from './getLocalAsset';

export default async function getLocalFlowContent(path: string, name: string) {
  let asset = await getLocalAsset(path, name);
  if (asset.type !== 'yaml') {
    throw new Error('[Flow] Unrecognized file type.');
  }
  let res = await fetch(asset.uri);
  return res.text();
}
