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

import type { LanguagesEnum } from "../enums.js";
import type { GeneralRequestBodyType } from "../types/requester.js";
import type { InteractiveMediaTypesEnum, RequestMessageTypesEnum } from "./enums.js";
import type {
  SelfHostedDocumentType,
  SelfHostedImageType,
  SelfHostedVideoType,
  UploadedDocumentType,
  UploadedImageType,
  UploadedVideoType
} from "./messages.js";

// #region Base Request types

export type GeneralMessageType = GeneralRequestBodyType & {
  /**
   * The Meta messaging product name.
   * @default 'whatsapp'
   */
  messaging_product: 'whatsapp';
}

export type MessageLanguageType = {
  policy?: 'deterministic';
  code: LanguagesEnum;
}

export type MessageRequestType<T extends RequestMessageTypesEnum> =
  GeneralMessageType & {
    recipient_type?: string;
    to: string;
    context?: ReplyToMessageRequestType;
    type?: T;
  }

type ReplyToMessageRequestType = {
  message_id: string;
}

export type SimpleTextType = {
  text: string;
}

// #endregion

// #region Base Interactive types

export type ListSectionType = {
  product_items?: never;
  rows: MessageRowType[];
  title: string;
}

export type MessageButtonType = {
  title: string;
  id: string;
}

export type MessageReplyButtonType = {
  type: 'reply';
  reply: MessageButtonType;
}

export type MessageProductType = {
  product_retailer_id: string;
}

export type MultiProductSectionType = {
  product_items: MessageProductType[];
  rows?: never;
  title?: string;
}

export type MessageRowType = {
  id: string;
  title: string;
  description?: string;
}

export type QuickReplyButtonType = {
  type: 'quick_reply';
  quick_reply: {
    id: string,
    title: string;
  }
}

export type InteractiveMessageActionType = {
  button?: string;
  buttons?: MessageReplyButtonType[];
  catalog_id?: string;
  product_retailer_id?: string;
  sections?: ListSectionType | MultiProductSectionType;
}

export type InteractiveMessageHeaderType = {
  type: InteractiveMediaTypesEnum;
  document?: UploadedDocumentType | SelfHostedDocumentType;
  image?: UploadedImageType | SelfHostedImageType;
  text?: string;
  video?: UploadedVideoType | SelfHostedVideoType;
}

// #endregion

// #region Base Flow types

export type DataFlowType = {
  flow_id?: never;
  flow_json: string;
  flow_name?: never;
}

export type IdentityFlowType = {
  flow_id: string;
  flow_json?: never;
  flow_name?: never;
}

export type NameFlowType = {
  flow_id?: never;
  flow_json?: never;
  flow_name: string;
}

// #endregion