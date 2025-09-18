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

import type { WAConfigEnum } from './enums.ts';

export type WAConfigType = {
	/**
	 * That base URL of the Cloud API, hosted by Meta.
	 * @default 'graph.facebook.com/'
	 */
	[WAConfigEnum.BaseURL]: string;

	/**
	 * The Meta for Developers business application Id for this registered application.
	 */
	[WAConfigEnum.AppId]: string;

	/**
	 * The Meta for Developers business application secret for this registered application.
	 */
	[WAConfigEnum.AppSecret]: string;

	/**
	 * The Meta for Developers phone number id used by the registered business.
	 */
	[WAConfigEnum.PhoneNumberId]: number;

	/**
	 * The Meta for Developers business id for the registered business.
	 */
	[WAConfigEnum.BusinessAcctId]: string;
	/**
	 * The version of the Cloud API being used. Starts with a "v" and follows the major number.
	 */
	[WAConfigEnum.APIVersion]: string;

	/**
	 * The access token to make calls on behalf of the signed in Meta for Developers account or business.
	 */
	[WAConfigEnum.AccessToken]: string;

	/**
	 * The endpoint path (e.g. if the value here is webhook, the webhook URL would look like http/https://{host}/webhook).
	 */
	[WAConfigEnum.WebhookEndpoint]: string;

	/**
	 * The verification token that needs to match what is sent by the Cloud API webhook in order to subscribe.
	 */
	[WAConfigEnum.WebhookVerificationToken]: string;

	/**
	 * The listener port for the webhook web server.
	 */
	[WAConfigEnum.ListenerPort]: number;

	/**
	 * To turn on global debugging of the logger to print verbose output across the APIs.
	 */
	[WAConfigEnum.Debug]: boolean;

	/**
	 * The total number of times a request should be retried after the wait period if it fails.
	 */
	[WAConfigEnum.MaxRetriesAfterWait]: number;

	/**
	 * The timeout period for a request to quit and destroy the attempt in ms.
	 */
	[WAConfigEnum.RequestTimeout]: number;
};
