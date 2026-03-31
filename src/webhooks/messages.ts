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
  IncomingHttpHeaders,
  ServerResponse
} from 'http';
import type {
  CurrencyCodesEnum,
  DocumentMediaTypesEnum,
  ImageMediaTypesEnum,
  StickerMediaTypesEnum,
  VideoMediaTypesEnum
} from '../enums.js';
import type {
  ContactAddressTypesEnum,
  ConversationCategoryEnum,
  MessageWebhookStatusEnum,
  MessageWebhookTypesEnum,
  PricingCategoryEnum,
  PricingTypeEnum,
  ReferralSourceTypesEnum,
  SystemChangeTypesEnum,
  UnsupportedTypesEnum,
} from './enums.js';

export type AudioMessageWebhookType = {
  id: string;
  mime_type: string;
  sha_256: string;
  url?: string;
  voice: boolean;
}

export type ButtonMessageWebhookType = {
  payload: string;
  text: string;
}

export type ContactAddressMessageWebhookType = {
  city: string;
  country: string;
  country_code: string;
  state: string;
  street: string;
  type: ContactAddressTypesEnum;
  zip: string;
}

export type ContactEmailMessageWebhookType = {
  email: string;
  type: string;
}

export type ContactNameMessageWebhookType = {
  formatted_name: string;
  first_name: string;
  last_name: string;
  middle_name: string;
  suffix: string;
  prefix: string;
}

export type ContactOrgMessageWebhookType = {
  company: string;
  department: string;
  title: string;
}

export type ContactPhoneMessageWebhookType = {
  phone: string;
  type: string;
  wa_id: string;
}

export type ContactURLMessageWebhookType = {
  url: string;
  type: string;
}

export type ContactMessageWebhookType = {
  addresses: ContactAddressMessageWebhookType[];
  birthday: string;
  emails: ContactEmailMessageWebhookType[];
  name: ContactNameMessageWebhookType;
  org: ContactOrgMessageWebhookType;
  phones: ContactPhoneMessageWebhookType[];
  urls: ContactURLMessageWebhookType[];
}

export type ContextBusinessMessageWebhookType = {
  from: string;
  id: string;
  referred_product: {
    catalog_id: string;
    product_retailer_id: string;
  };
}

export type ContextForwardedMessageWebhookType = {
  forwarded: boolean;
  frequently_forwarded: boolean;
}

export type DocumentMessageWebhookType = {
  caption: string;
  filename: string;
  sha256: string;
  mime_type: DocumentMediaTypesEnum;
  id: string;
  url?: string;
}

export type EditImageMessageWebhookType = {
  caption: string;
  mime_type: ImageMediaTypesEnum;
  sha256: string;
  id: string;
  url: string;
}

export type EditMessageWebhookType = {
  original_message_id: string;
  message: {
    context: {
      id?: string
    },
    type: 'image',
    image: EditImageMessageWebhookType;
  }
}

export type ErrorsMessageWebhookType = {
  code: number;
  title: string;
  message: string;
  error_data: {
    details: string;
  };
  href?: string;
}

export type IdentityMessageWebhookType = {
  acknowledged: string;
  created_timestamp: string;
  hash: string;
}

export type ImageMessageWebhookType = {
  caption: string;
  sha256: string;
  id: string;
  mime_type: ImageMediaTypesEnum;
  url?: string;
}

export type LocationMessageWebhookType = {
  address: string;
  latitude: number;
  longitude: number;
  name: string;
  url: string;
}

export type ButtonReplyInteractiveMessageWebhookType = {
  type: 'button_reply',
  button_reply: {
    id: string;
    title: string;
  };
}

export type ListReplyInteractiveMessageWebhookType = {
  type: 'list_reply',
  list_reply: {
    id: string;
    title: string;
    description: string;
  };
}

export type NfmReplyInteractiveMessageWebhookType = {
  type: MessageWebhookTypesEnum.Interactive | MessageWebhookTypesEnum.NaturalFlow;
  action: string;
  nfm_reply: {
    body?: string;
    name?: string;
    response_json: string;
  };
  timestamp: string;
}

export type InteractiveMessageWebhookType = {
  type:
  | ButtonReplyInteractiveMessageWebhookType
  | ListReplyInteractiveMessageWebhookType
  | NfmReplyInteractiveMessageWebhookType;
}

export type ProductItemMessageWebhookType = {
  product_retailer_id: string;
  quantity: number;
  item_price: number;
  currency: CurrencyCodesEnum;
}

export type OrderMessageWebhookType = {
  catalog_id: string;
  text: string;
  product_items: ProductItemMessageWebhookType;
}

export type ReactionMessageWebhookType = {
  message_id: string;
  emoji: string;
}

export type ReferralMessageWebhookType = {
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

export type RevokeMessageWebhookType = {
  original_message_id: string;
}

export type StickerMessageWebhookType = {
  mime_type: StickerMediaTypesEnum;
  sha256: string;
  id: string;
  url?: string;
  animated: boolean;
}

export type SystemMessageWebhookType = {
  body: string;
  identity?: string;
  wa_id: string;
  type: SystemChangeTypesEnum;
  customer?: string;
}

export type TextMessageWebhookType = {
  body: string;
}

export type UnsupportedMessageWebhookType = {
  type: UnsupportedTypesEnum;
}

export type VideoMessageWebhookType = {
  caption: string;
  sha256: string;
  id: string;
  mime_type: VideoMediaTypesEnum;
  url?: string;
}

export type MessagesWebhookType = {
  audio?: AudioMessageWebhookType;
  button?: ButtonMessageWebhookType;
  contacts?: ContactMessageWebhookType[];
  context?: ContextBusinessMessageWebhookType | ContextForwardedMessageWebhookType;
  document?: DocumentMessageWebhookType;
  edit?: EditMessageWebhookType;
  errors?: ErrorsMessageWebhookType[];
  from: string;
  group_id?: string;
  id: string;
  identity?: IdentityMessageWebhookType;
  image?: ImageMessageWebhookType;
  interactive?: InteractiveMessageWebhookType;
  location?: LocationMessageWebhookType;
  order?: OrderMessageWebhookType;
  reaction?: ReactionMessageWebhookType;
  referral?: ReferralMessageWebhookType;
  revoke?: RevokeMessageWebhookType;
  sticker?: StickerMessageWebhookType;
  system?: SystemMessageWebhookType;
  text?: TextMessageWebhookType;
  timestamp: string;
  type: MessageWebhookTypesEnum;
  unsupported?: UnsupportedMessageWebhookType;
  video?: VideoMessageWebhookType;
}

export type StatusConversationMessageWebhookType = {
  id?: string;
  origin: {
    type: ConversationCategoryEnum;
  };
  expiration_timestamp?: string;
}

export type StatusErrorsMessageWebhookType = {
  code: number;
  href: string;
  title: string;
  message: string;
  error_data: {
    details: string
  };
}

export type StatusPricingMessageWebhookType = {
  billable: boolean;
  category: PricingCategoryEnum;
  /**
   * Conversation-Based Pricing
   * Per-Message Pricing
   */
  pricing_model: 'CBP' | 'PMP';
  type: PricingTypeEnum;
}

export type StatusesMessageWebhookType = {
  biz_opaque_callback_data?: string;
  conversation: StatusConversationMessageWebhookType;
  errors?: StatusErrorsMessageWebhookType[];
  id: string;
  message?: {
    recipient_id: string;
  };
  pricing: StatusPricingMessageWebhookType;
  parent_recipient_user_id?: string;
  recipient_id: string;
  recipient_identity_key_hash?: string;
  recipient_participant_id?: string;
  recipient_type?: 'group';
  recipient_user_id?: string;
  status: MessageWebhookStatusEnum;
  timestamp: string;
  type?: string;
}

export type ContactsMessageWebhookType = {
  wa_id?: string;
  profile: {
    name: string;
    username?: string;
  };
  identity_key_hash?: string;
  user_id?: string;
  parent_user_id?: string;
}

export type MetadataMessageWebhookType = {
  display_phone_number: string;
  phone_number_id: string;
}

export type ValueMessageWebhookType = {
  messaging_product: 'whatsapp';
  contacts?: ContactsMessageWebhookType[];
  errors?: ErrorsMessageWebhookType[];
  messages?: MessagesWebhookType[];
  metadata: MetadataMessageWebhookType[];
  statuses?: StatusesMessageWebhookType[];
}

export type ChangesMessageWebhookType = {
  field: string;
  value: ValueMessageWebhookType;
}

export type EntryMessageWebhookType = {
  id: string;
  changes: ChangesMessageWebhookType[];
}

export type MessageWebhookType = {
  object: 'whatsapp_business_account';
  entry: EntryMessageWebhookType[];
}

export type SubscribeQueryType = {
  hub: {
    mode: 'subscribe';
    challenge: string;
    verify_token: string;
  };
}

export type CallbackType = (
  statusCode: number,
  headers: IncomingHttpHeaders,
  body?: MessageWebhookType,
  response?: ServerResponse,
  error?: Error,
) => any;
