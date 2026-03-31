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

import { z } from 'zod';
import {
  CurrencyCodesEnum,
  DocumentMediaTypesEnum,
  ImageMediaTypesEnum,
  StickerMediaTypesEnum,
  VideoMediaTypesEnum
} from '../enums.js';
import {
  ContactAddressTypesEnum,
  ConversationCategoryEnum,
  PricingCategoryEnum,
  PricingTypeEnum,
  ReferralSourceTypesEnum,
  SystemChangeTypesEnum,
  UnsupportedTypesEnum,
  MessageWebhookTypesEnum,
  MessageWebhookStatusEnum
} from '../webhooks/enums.js';
import type { MessageWebhookType } from '../webhooks/messages.js';

const AudioMessageWebhookSchema = z.object({
  id: z.string(),
  mime_type: z.string(),
  sha_256: z.string(),
  url: z.string().optional(),
  voice: z.boolean(),
});

const ButtonMessageWebhookSchema = z.object({
  payload: z.string(),
  text: z.string(),
});

const ContactAddressMessageWebhookSchema = z.object({
  city: z.string(),
  country: z.string(),
  country_code: z.string(),
  state: z.string(),
  street: z.string(),
  type: z.enum(ContactAddressTypesEnum),
  zip: z.string(),
});

const ContactEmailMessageWebhookSchema = z.object({
  email: z.string(),
  type: z.string(),
});

const ContactNameMessageWebhookSchema = z.object({
  formatted_name: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  middle_name: z.string(),
  suffix: z.string(),
  prefix: z.string(),
});

const ContactOrgMessageWebhookSchema = z.object({
  company: z.string(),
  department: z.string(),
  title: z.string(),
});

const ContactPhoneMessageWebhookSchema = z.object({
  phone: z.string(),
  type: z.string(),
  wa_id: z.string(),
});

const ContactURLMessageWebhookSchema = z.object({
  url: z.string(),
  type: z.string(),
});

const ContactMessageWebhookSchema = z.object({
  addresses: z.array(ContactAddressMessageWebhookSchema),
  birthday: z.string(),
  emails: z.array(ContactEmailMessageWebhookSchema),
  name: ContactNameMessageWebhookSchema,
  org: ContactOrgMessageWebhookSchema,
  phones: z.array(ContactPhoneMessageWebhookSchema),
  urls: z.array(ContactURLMessageWebhookSchema),
});

const ContextBusinessMessageWebhookSchema = z.object({
  from: z.string(),
  id: z.string(),
  referred_product: z.object({
    catalog_id: z.string(),
    product_retailer_id: z.string(),
  }),
});

const ContextForwardedMessageWebhookSchema = z.object({
  forwarded: z.boolean(),
  frequently_forwarded: z.boolean(),
});

const DocumentMessageWebhookSchema = z.object({
  caption: z.string(),
  filename: z.string(),
  sha256: z.string(),
  mime_type: z.enum(DocumentMediaTypesEnum),
  id: z.string(),
  url: z.string().optional(),
});

const EditImageMessageWebhookSchema = z.object({
  caption: z.string(),
  mime_type: z.enum(ImageMediaTypesEnum),
  sha256: z.string(),
  id: z.string(),
  url: z.string(),
});

const EditMessageWebhookSchema = z.object({
  original_message_id: z.string(),
  message: z.object({
    context: z.object({
      id: z.string().optional(),
    }),
    type: z.literal('image'),
    image: EditImageMessageWebhookSchema,
  }),
});

const ErrorsMessageWebhookSchema = z.object({
  code: z.number(),
  title: z.string(),
  message: z.string(),
  error_data: z.object({
    details: z.string(),
  }),
  href: z.string().optional(),
});

const IdentityMessageWebhookSchema = z.object({
  acknowledged: z.string(),
  created_timestamp: z.string(),
  hash: z.string(),
});

const ImageMessageWebhookSchema = z.object({
  caption: z.string(),
  sha256: z.string(),
  id: z.string(),
  mime_type: z.enum(ImageMediaTypesEnum),
  url: z.string().optional(),
});

const LocationMessageWebhookSchema = z.object({
  address: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  name: z.string(),
  url: z.string(),
});

const ButtonReplyInteractiveMessageWebhookSchema = z.object({
  type: z.literal('button_reply'),
  button_reply: z.object({
    id: z.string(),
    title: z.string(),
  }),
});

const ListReplyInteractiveMessageWebhookSchema = z.object({
  type: z.literal('list_reply'),
  list_reply: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(),
  }),
});

const NfmReplyInteractiveMessageWebhookSchema = z.object({
  type: z.enum([MessageWebhookTypesEnum.Interactive, MessageWebhookTypesEnum.NaturalFlow]),
  action: z.string(),
  nfm_reply: z.object({
    body: z.string().optional(),
    name: z.string().optional(),
    response_json: z.string(),
  }),
  timestamp: z.string(),
});

const InteractiveMessageWebhookSchema = z.object({
  type: z.union([
    ButtonReplyInteractiveMessageWebhookSchema,
    ListReplyInteractiveMessageWebhookSchema,
    NfmReplyInteractiveMessageWebhookSchema,
  ]),
});

const ProductItemMessageWebhookSchema = z.object({
  product_retailer_id: z.string(),
  quantity: z.number(),
  item_price: z.number(),
  currency: z.enum(CurrencyCodesEnum),
});

const OrderMessageWebhookSchema = z.object({
  catalog_id: z.string(),
  text: z.string(),
  product_items: ProductItemMessageWebhookSchema,
});

const ReactionMessageWebhookSchema = z.object({
  message_id: z.string(),
  emoji: z.string(),
});

const ReferralMessageWebhookSchema = z.object({
  source_url: z.string(),
  source_type: z.enum(ReferralSourceTypesEnum),
  source_id: z.string(),
  headline: z.string(),
  body: z.string(),
  media_type: z.enum(['image', 'video']),
  image_url: z.string().optional(),
  video_url: z.string().optional(),
  thumbnail_url: z.string().optional(),
  ctwa_clid: z.string().optional(),
  welcome_message: z.object({
    text: z.string(),
  }),
});

const RevokeMessageWebhookSchema = z.object({
  original_message_id: z.string(),
});

const StickerMessageWebhookSchema = z.object({
  mime_type: z.enum(StickerMediaTypesEnum),
  sha256: z.string(),
  id: z.string(),
  url: z.string().optional(),
  animated: z.boolean(),
});

const SystemMessageWebhookSchema = z.object({
  body: z.string(),
  identity: z.string().optional(),
  wa_id: z.string(),
  type: z.enum(SystemChangeTypesEnum),
  customer: z.string().optional(),
});

const TextMessageWebhookSchema = z.object({
  body: z.string(),
});

const UnsupportedMessageWebhookSchema = z.object({
  type: z.enum(UnsupportedTypesEnum),
});

const VideoMessageWebhookSchema = z.object({
  caption: z.string(),
  sha256: z.string(),
  id: z.string(),
  mime_type: z.enum(VideoMediaTypesEnum),
  url: z.string().optional(),
});

const MessagesWebhookSchema = z.object({
  audio: AudioMessageWebhookSchema.optional(),
  button: ButtonMessageWebhookSchema.optional(),
  contacts: z.array(ContactMessageWebhookSchema).optional(),
  context: z.union([ContextBusinessMessageWebhookSchema, ContextForwardedMessageWebhookSchema]).optional(),
  document: DocumentMessageWebhookSchema.optional(),
  edit: EditMessageWebhookSchema.optional(),
  errors: z.array(ErrorsMessageWebhookSchema).optional(),
  from: z.string(),
  group_id: z.string().optional(),
  id: z.string(),
  identity: IdentityMessageWebhookSchema.optional(),
  image: ImageMessageWebhookSchema.optional(),
  interactive: InteractiveMessageWebhookSchema.optional(),
  location: LocationMessageWebhookSchema.optional(),
  order: OrderMessageWebhookSchema.optional(),
  reaction: ReactionMessageWebhookSchema.optional(),
  referral: ReferralMessageWebhookSchema.optional(),
  revoke: RevokeMessageWebhookSchema.optional(),
  sticker: StickerMessageWebhookSchema.optional(),
  system: SystemMessageWebhookSchema.optional(),
  text: TextMessageWebhookSchema.optional(),
  timestamp: z.string(),
  type: z.enum(MessageWebhookTypesEnum),
  unsupported: UnsupportedMessageWebhookSchema.optional(),
  video: VideoMessageWebhookSchema.optional(),
});

const StatusConversationMessageWebhookSchema = z.object({
  id: z.string().optional(),
  origin: z.object({
    type: z.enum(ConversationCategoryEnum),
  }),
  expiration_timestamp: z.string().optional(),
});

const StatusErrorsMessageWebhookSchema = z.object({
  code: z.number(),
  href: z.string(),
  title: z.string(),
  message: z.string(),
  error_data: z.object({
    details: z.string(),
  }),
});

const StatusPricingMessageWebhookSchema = z.object({
  billable: z.boolean(),
  category: z.enum(PricingCategoryEnum),
  pricing_model: z.enum(['CBP', 'PMP']),
  type: z.enum(PricingTypeEnum),
});

const StatusesMessageWebhookSchema = z.object({
  biz_opaque_callback_data: z.string().optional(),
  conversation: StatusConversationMessageWebhookSchema,
  errors: z.array(StatusErrorsMessageWebhookSchema).optional(),
  id: z.string(),
  message: z.object({
    recipient_id: z.string(),
  }).optional(),
  pricing: StatusPricingMessageWebhookSchema,
  parent_recipient_user_id: z.string().optional(),
  recipient_id: z.string(),
  recipient_identity_key_hash: z.string().optional(),
  recipient_participant_id: z.string().optional(),
  recipient_type: z.literal('group').optional(),
  recipient_user_id: z.string().optional(),
  status: z.enum(MessageWebhookStatusEnum),
  timestamp: z.string(),
  type: z.string().optional(),
});

const ContactsMessageWebhookSchema = z.object({
  wa_id: z.string().optional(),
  profile: z.object({
    name: z.string(),
    username: z.string().optional(),
  }),
  identity_key_hash: z.string().optional(),
  user_id: z.string().optional(),
  parent_user_id: z.string().optional(),
});

const MetadataMessageWebhookSchema = z.object({
  display_phone_number: z.string(),
  phone_number_id: z.string(),
});

const ValueMessageWebhookSchema = z.object({
  messaging_product: z.literal('whatsapp'),
  contacts: z.array(ContactsMessageWebhookSchema),
  errors: z.array(ErrorsMessageWebhookSchema).optional(),
  messages: z.array(MessagesWebhookSchema).optional(),
  metadata: z.array(MetadataMessageWebhookSchema),
  statuses: z.array(StatusesMessageWebhookSchema).optional(),
});

const ChangesMessageWebhookSchema = z.object({
  field: z.string(),
  value: ValueMessageWebhookSchema,
});

const EntryMessageWebhookSchema = z.object({
  id: z.string(),
  changes: z.array(ChangesMessageWebhookSchema),
});

const MessageWebhookSchema = z.looseObject({
  object: z.literal('whatsapp_business_account'),
  entry: z.array(EntryMessageWebhookSchema),
});

// Type guard function using Zod
export function isMessageWebhookType(body: any): body is MessageWebhookType {
  const result = MessageWebhookSchema.safeParse(body);
  if (!result.success) {
    console.error('Webhook validation error:', z.treeifyError(result.error));
  }
  return result.success;
}