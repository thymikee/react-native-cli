/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict
 */

import path from 'path';
import type { PackagerAsset } from './assetPathUtils';

function getAssetDestPathIOS(asset: PackagerAsset, scale: number): string {
  const suffix = scale === 1 ? '' : `@${scale}x`;
  const fileName = `${asset.name + suffix}.${asset.type}`;
  return path.join(asset.httpServerLocation.substr(1), fileName);
}

export default getAssetDestPathIOS;
