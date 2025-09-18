/**
 * Additional changes © 2025 Closify.
 * Original source: Meta Platforms, Inc. and affiliates.
 * Modifications licensed under the same terms below.
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 * All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to use,
 * copy, modify, and distribute this software in source code or binary form for use
 * in connection with the web services and APIs provided by Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use of
 * this software is subject to the Facebook Platform Policy
 * [http://developers.facebook.com/policy/]. This copyright notice shall be
 * included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

import type { HttpMethodsEnum } from './enums.ts';
import { IncomingMessage } from 'http';

export type ResponseHeaderValueType = string | string[] | undefined;

export type RequestHeadersType = Record<string, string | number | string[]>;

export type ResponseHeadersType = Record<string, ResponseHeaderValueType>;

export type ResponseJSONBodyType = Record<string, unknown>;

export type RequestDataType = Record<string, unknown> | string;

export type TimeoutErrorType = TypeError & { code?: string };

export declare class HttpsClientResponseClass {
	constructor(resp: IncomingMessage);
	statusCode: () => number;
	headers: () => ResponseHeadersType;
	rawResponse: () => IncomingMessage;
	responseBodyToJSON: () => Promise<ResponseJSONBodyType>;
}

export declare class HttpsClientClass {
	constructor();
	clearSockets: () => boolean;
	sendRequest: (
		host: string,
		port: number,
		path: string,
		method: HttpMethodsEnum,
		headers: RequestHeadersType,
		timeout: number,
		data?: RequestDataType,
	) => Promise<HttpsClientResponseClass>;
}
