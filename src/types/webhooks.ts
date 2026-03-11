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

import { ServerResponse, type IncomingHttpHeaders } from 'http';
import type { BaseClass } from './base.ts';
import type { WAConfigType } from './config.ts';
import type {
  ContactAddressTypesEnum,
  ConversationCategoryEnum,
  CurrencyCodesEnum,
  DocumentMediaTypesEnum,
  ImageMediaTypesEnum,
  PricingCategoryEnum,
  PricingTypeEnum,
  ReferralSourceTypesEnum,
  StatusEnum,
  StickerMediaTypesEnum,
  SystemChangeTypesEnum,
  UnsupportedTypesEnum,
  VideoMediaTypesEnum,
  WebhookMessageTypesEnum,
} from './enums.ts';

export type WebhookAudioMessageType = {
  id: string;
  mime_type: string;
  sha_256: string;
  url?: string;
  voice: boolean;
}

export type WebhookButtonMessageType = {
  payload: string;
  text: string;
}

export type WebhookContactAddressMessageType = {
  city: string;
  country: string;
  country_code: string;
  state: string;
  street: string;
  type: ContactAddressTypesEnum;
  zip: string;
}

export type WebhookContactEmailMessageType = {
  email: string;
  type: string;
}

export type WebhookContactNameMessageType = {
  formatted_name: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  suffix: string;
  prefix: string;
}

export type WebhookContactOrgMessageType = {
  company: string;
  department: string;
  title: string;
}

export type WebhookContactPhoneMessageType = {
  phone: string;
  type: string;
  wa_id: string;
}

export type WebhookContactURLMessageType = {
  url: string;
  type: string;
}

export type WebhookContactMessageType = {
  addresses: WebhookContactAddressMessageType[];
  birthday: string;
  emails: WebhookContactEmailMessageType[];
  name: WebhookContactNameMessageType;
  org: WebhookContactOrgMessageType;
  phones: WebhookContactPhoneMessageType[];
  urls: WebhookContactURLMessageType[];
}

export type WebhookContextMessageBusinessType = {
  from: string;
  id: string;
  referred_product: {
    catalog_id: string;
    product_retailer_id: string;
  };
}

export type WebhookContextMessageForwardedType = {
  forwarded: boolean;
  frequently_forwarded: boolean;
}

export type WebhookDocumentMessageType = {
  caption: string;
  filename: string;
  sha256: string;
  mime_type: DocumentMediaTypesEnum;
  id: string;
  url?: string;
}

export type WebhookEditImageMessageType = {
  caption: string;
  mime_type: ImageMediaTypesEnum;
  sha256: string;
  id: string;
  url: string;
}

export type WebhookEditMessageType = {
  original_message_id: string;
  message: {
    context: {
      id?: string
    },
    type: 'image',
    image: WebhookEditImageMessageType;
  }
}

export type WebhookErrorMessageType = {
  code: number;
  title: string;
  message: string;
  error_data: {
    details: string;
  };
  href?: string;
}

export type WebhookIdentityMessageType = {
  acknowledged: string;
  created_timestamp: string;
  hash: string;
}

export type WebhookImageMessageType = {
  caption: string;
  sha256: string;
  id: string;
  mime_type: ImageMediaTypesEnum;
  url?: string;
}

export type WebhookLocationMessageType = {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
  url: string;
}

export type WebhookButtonReplyInteractiveMessageType = {
  type: 'button_reply',
  button_reply: {
    id: string;
    title: string;
  };
}

export type WebhookListReplyInteractiveMessageType = {
  type: 'list_reply',
  list_reply: {
    id: string;
    title: string;
    description: string;
  };
}

export type WebhookNfmReplyInteractiveMessageType = {
  type: 'nfm_reply';
  nfm_reply: {
    body: string;
    name: string;
    response_json: string;
  };
}

export type WebhookInteractiveMessageType = {
  type:
  | WebhookButtonReplyInteractiveMessageType
  | WebhookListReplyInteractiveMessageType
  | WebhookNfmReplyInteractiveMessageType;
}

export type WebhookProductItemType = {
  product_retailer_id: string;
  quantity: number;
  item_price: number;
  currency: CurrencyCodesEnum;
}

export type WebhookOrderMessageType = {
  catalog_id: string;
  text: string;
  product_items: WebhookProductItemType;
}

export type WebhookReactionMessageType = {
  message_id: string;
  emoji: string;
}

export type WebhookReferralType = {
  source_url: string;
  source_type: ReferralSourceTypesEnum;
  source_id: string;
  headline: string;
  body: string;
  media_type: 'image' | 'video';
  image_url?: string;
  video_url?: string;
  thumbnail_url?: string;
  ctwa_clid?: string;
  welcome_message: {
    text: string;
  }
}

export type WebhookRevokeMessageType = {
  original_message_id: string;
}

export type WebhookStickerMessageType = {
  mime_type: StickerMediaTypesEnum;
  sha256: string;
  id: string;
  url?: string;
  animated: boolean;
}

export type WebhookSystemMessageType = {
  body: string;
  identity?: string;
  wa_id: string;
  type: SystemChangeTypesEnum;
  customer?: string;
}

export type WebhookTextMessageType = {
  body: string;
}

export type WebhookUnsupportedMessageType = {
  type: UnsupportedTypesEnum;
}

export type WebhookVideoMessageType = {
  caption: string;
  sha256: string;
  id: string;
  mime_type: VideoMediaTypesEnum;
  url?: string;
}

export type WebhookMessageType = {
  audio?: WebhookAudioMessageType;
  button?: WebhookButtonMessageType;
  contacts?: WebhookContactMessageType[];
  context?: WebhookContextMessageBusinessType | WebhookContextMessageForwardedType;
  document?: WebhookDocumentMessageType;
  edit?: WebhookEditMessageType;
  errors?: WebhookErrorMessageType[];
  from: string;
  group_id?: string;
  id: string;
  identity?: WebhookIdentityMessageType;
  image?: WebhookImageMessageType;
  interactive?: WebhookInteractiveMessageType;
  location?: WebhookLocationMessageType;
  order?: WebhookOrderMessageType;
  reaction?: WebhookReactionMessageType;
  referral: WebhookReferralType;
  revoke?: WebhookRevokeMessageType;
  sticker?: WebhookStickerMessageType;
  system?: WebhookSystemMessageType;
  text?: WebhookTextMessageType;
  timestamp: string;
  type: WebhookMessageTypesEnum;
  unsupported?: WebhookUnsupportedMessageType;
  video?: WebhookVideoMessageType;
}

export type WebhookStatusConversationType = {
  id?: string;
  origin: {
    type: ConversationCategoryEnum;
  };
  expiration_timestamp?: string;
}

export type WebhookStatusErrorType = {
  code: number;
  href: string;
  title: string;
  message: string;
  error_data: {
    details: string
  };
}

export type WebhookStatusPricingType = {
  billable: boolean;
  category: PricingCategoryEnum;
  /**
   * Conversation-Based Pricing
   * Per-Message Pricing
   */
  pricing_model: 'CBP' | 'PMP';
  type: PricingTypeEnum;
}

export type WebhookStatusType = {
  biz_opaque_callback_data?: string;
  conversation: WebhookStatusConversationType;
  errors?: WebhookStatusErrorType[];
  id: string;
  message?: {
    recipient_id: string;
  };
  pricing: WebhookStatusPricingType;
  parent_recipient_user_id?: string;
  recipient_id: string;
  recipient_identity_key_hash?: string;
  recipient_participant_id?: string;
  recipient_type?: 'group';
  recipient_user_id?: string;
  status: StatusEnum;
  timestamp: string;
  type?: string;
}

export type WebhookContactType = {
  wa_id: string;
  profile: {
    name: string;
  };
  identity_key_hash?: string;
  user_id?: string;
  parent_user_id?: string;
}

export type WebhookMetadataType = {
  display_phone_number: string;
  phone_number_id: string;
}

export type WebhookValueType = {
  messaging_product: 'whatsapp';
  contacts?: WebhookContactType[];
  errors?: WebhookErrorMessageType[];
  messages?: WebhookMessageType[];
  metadata: WebhookMetadataType[];
  statuses?: WebhookStatusType[];
}

export type WebhookChangeType = {
  field: string;
  value: WebhookValueType;
}

export type WebhookEntryType = {
  id: string;
  changes: WebhookChangeType[];
}

export type WebhookType = {
  object: 'whatsapp_business_account';
  entry: WebhookEntryType[];
}

export type WebhookSubscribeQueryType = {
  hub: {
    mode: 'subscribe';
    challenge: string;
    verify_token: string;
  };
}

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
