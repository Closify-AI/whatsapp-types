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

import type {
  RequestHeaders,
  HttpsClientResponseClass,
  ResponseJSONBody,
} from './httpsClient.ts';
import type { HttpMethodsEnum } from './enums.ts';

export type GeneralRequestBody = Record<string, any>;

export interface GeneralHeaderInterface extends RequestHeaders {
  /**
   * Authorization token. This is required for all HTTP requests made to the graph API.
   * @default 'Bearer '
   */
  'Authorization': string;

  /**
   * Content type of the message being sent. This is required for all HTTP requests made to the graph API.
   * @default 'application/json'
   */
  'Content-Type': string;

  /**
   * User agent field sent in all requests. This is used to gather SDK usage metrics and help
   * better triage support requests.
   * @default `WA_SDK/${ SDK_version } (Node.js ${ process.version })`
   */
  'User-Agent': string;
}

export interface RequesterResponseInterface<T extends ResponseJSONBody>
  extends HttpsClientResponseClass {
  responseBodyToJSON: () => Promise<T>;
}

export declare class RequesterClass {
  constructor(
    host: string,
    apiVersion: string,
    phoneNumberId: number,
    accessToken: string,
    businessAcctId: string,
    userAgent: string,
  );
  sendCAPIRequest: (
    method: HttpMethodsEnum,
    path: string,
    timeout: number,
    body?: any,
  ) => Promise<RequesterResponseInterface<any>>;
}
