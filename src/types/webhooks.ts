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

import { ServerResponse } from 'http';
import type { IncomingHttpHeaders } from 'http';
import type { WAConfigType } from './config.ts';
import type {
	ConversationTypesEnum,
	CurrencyCodesEnum,
	StatusEnum,
	VideoMediaTypesEnum,
	ReferralSourceTypesEnum,
	StickerMediaTypesEnum,
	WebhookTypesEnum,
	SystemChangeTypesEnum,
	ImageMediaTypesEnum,
	DocumentMediaTypesEnum,
} from './enums.ts';
import type { BaseClass } from './base.ts';

export type WebhookPricingType = {
	category: ConversationTypesEnum;
	pricing_model: 'CBP';
};

export type WebhookOriginType = {
	type: ConversationTypesEnum;
};

export type WebhookConversationType = {
	id: string;
	origin: WebhookOriginType;
	expiration_timestamp: string;
};

export type WebhookErrorDataType = {
	details: string;
};

export type WebhookErrorType = {
	code: number;
	title: string;
	message: string;
	error_data: WebhookErrorDataType;
};

export type WebhookStatusesType = {
	conversation: WebhookConversationType;
	errors: WebhookErrorType[];
	id: string;
	pricing: WebhookPricingType;
	recipient_id: string;
	status: StatusEnum;
	timestamp: string;
};

export type WebhookAudioType = {
	id: string;
	mime_type: string;
};

export type WebhookButtonType = {
	payload: string;
	text: string;
};

export type WebhookContextType = {
	forwarded: boolean;
	frequently_forwarded: boolean;
	from: string;
	id: string;
	referred_product: {
		catalog_id: string;
		product_retailer_id: string;
	};
};

export type WebhookDocumentType = {
	caption: string;
	filename: string;
	sha256: string;
	mime_type: DocumentMediaTypesEnum;
	id: string;
};

export type WebhookIdentityType = {
	acknowledged: string;
	created_timestamp: string;
	hash: string;
};

export type WebhookImageType = {
	caption: string;
	sha256: string;
	id: string;
	mime_type: ImageMediaTypesEnum;
};

export type WebhookButtonReplyType = {
	button_reply: {
		id: string;
		title: string;
	};
};

export type WebhookListReplyType = {
	list_reply: {
		id: string;
		title: string;
		description: string;
	};
};

export type WebhookInteractiveType = {
	type: WebhookButtonReplyType | WebhookListReplyType;
};

export type WebhookProductItemsType = {
	product_retailer_id: string;
	quantity: string;
	item_price: string;
	currency: CurrencyCodesEnum;
};

export type WebhookOrderType = {
	catalog_id: string;
	text: string;
	product_items: WebhookProductItemsType;
};

export type WebhookReferralType = {
	source_url: URL;
	source_type: ReferralSourceTypesEnum;
	source_id: string;
	headline: string;
	body: string;
	media_type: ImageMediaTypesEnum | VideoMediaTypesEnum;
	image_url: URL;
	video_url: URL;
	thumbnail_url: URL;
};

export type WebhookStickerType = {
	mime_type: StickerMediaTypesEnum;
	sha256: string;
	id: string;
	animated: boolean;
};

export type WebhookSystemType = {
	body: string;
	identity: string;
	wa_id: string;
	type: SystemChangeTypesEnum;
	customer: string;
};

export type WebhookTextType = {
	body: string;
};

export type WebhookVideoType = {
	caption: string;
	filename: string;
	sha256: string;
	id: string;
	mime_type: VideoMediaTypesEnum;
};

export type WebhookMessagesType = {
	audio?: WebhookAudioType;
	button?: WebhookButtonType;
	context?: WebhookContextType;
	document?: WebhookDocumentType;
	errors: WebhookErrorType[];
	from: string;
	id: string;
	identity?: WebhookIdentityType;
	image?: WebhookImageType;
	interactive?: WebhookInteractiveType;
	order?: WebhookOrderType;
	referral: WebhookReferralType;
	system?: WebhookSystemType;
	text?: WebhookTextType;
	timestamp: string;
	type: WebhookTypesEnum;
	video?: WebhookVideoType;
};

export type WebhookProfileType = {
	name: string;
};

export type WebhookContactType = {
	wa_id: string;
	profile: WebhookProfileType;
};

export type WebhookMetadataType = {
	display_phone_number: string;
	phoneNumberId: string;
};

export type WebhookValueType = {
	messaging_product: 'whatsapp';
	contacts: WebhookContactType[];
	errors: WebhookErrorType[];
	messages: WebhookMessagesType[];
	metadata: WebhookMetadataType[];
	statuses: WebhookStatusesType[];
};

export type WebhookChangesType = {
	field: string;
	value: WebhookValueType;
};

export type WebhookEntryType = {
	id: string;
	changes: WebhookChangesType[];
};

export type WebhookType = {
	object: 'whatsapp_business_account';
	entry: WebhookEntryType[];
};

export type WebhookSubscribeQueryType = {
	hub: {
		mode: 'subscribe';
		challenge: string;
		verify_token: string;
	};
};

export type WebhookCallbackType = (
	statusCode: number,
	headers: IncomingHttpHeaders,
	body?: WebhookType,
	response?: ServerResponse,
	error?: Error,
) => any;

export declare class WebhooksClass extends BaseClass {
	constructor(config: WAConfigType, userAgent: string);
	start(cb: WebhookCallbackType): boolean;
	isStarted(): boolean;
	stop(cb: (err?: Error) => any): boolean;
}
