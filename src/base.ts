/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { RequesterClass } from './requester.ts';
import type { WAConfigType } from './config.ts';

export declare class BaseClass {
	constructor(config: WAConfigType, HttpsClient?: RequesterClass);
}
