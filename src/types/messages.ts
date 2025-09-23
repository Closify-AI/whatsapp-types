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

import type { BaseClass } from './base.ts';
import type {
  MessageTypesEnum,
  ComponentTypesEnum,
  LanguagesEnum,
  ParametersTypesEnum,
  CurrencyCodesEnum,
  ButtonTypesEnum,
  ButtonPositionEnum,
  InteractiveTypesEnum,
} from './enums.ts';
import type { GeneralRequestBodyType, RequesterResponseInterface } from './requester.ts';

export type GeneralMessageBodyType = GeneralRequestBodyType & {
  /**
   * The Meta messaging product name.
   * @default 'whatsapp'
   */
  messaging_product: 'whatsapp';
};

export type StatusMessageType = {
  status: 'read';
  message_id: string;
};

export type StatusRequestBodyType = GeneralMessageBodyType & StatusMessageType;

export type MessageContextType = {
  message_id: string;
};

export type MessageRequestBodyType<T extends MessageTypesEnum> =
  GeneralMessageBodyType & {
    recipient_type?: string;
    to: string;
    context?: MessageContextType;
    type?: T;
  };

export type MetaAudioMediaType = {
  id: string;
  link?: never;
};

export type HostedAudioMediaType = {
  id?: never;
  link: string;
};

export type AudioMediaType = MetaAudioMediaType | HostedAudioMediaType;

export type AudioMessageRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Audio> & {
    [MessageTypesEnum.Audio]: AudioMediaType;
  };

export type MessageAddressesType = {
  street?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  country_code?: string;
  type?: 'HOME' | 'WORK' | string;
};

export type MessageEmailType = {
  email?: string;
  type?: 'HOME' | 'WORK' | string;
};

export type MessageNameType = {
  formatted_name: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  suffix?: string;
  prefix?: string;
};

export type MessageOrgType = {
  company?: string;
  department?: string;
  title?: string;
};

export type MessagePhoneType = {
  phone?: 'PHONE_NUMBER';
  type?: 'CELL' | 'MAIN' | 'IPHONE' | 'HOME' | 'WORK' | string;
  wa_id?: string;
};

export type MessageURLType = {
  url?: string;
  type?: 'HOME' | 'WORK' | string;
};

export type ContactMessageType = {
  addresses?: MessageAddressesType[];
  birthday?: `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
  emails?: MessageEmailType[];
  name: MessageNameType;
  org?: MessageOrgType;
  phones?: MessagePhoneType[];
  urls?: MessageURLType[];
};

export type ContactsMessageRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Contacts> & {
    [MessageTypesEnum.Contacts]: [ContactMessageType];
  };

export type MetaDocumentMediaType = {
  id: string;
  link?: never;
  caption?: string;
  filename?: string;
};

export type HostedDocumentMediaType = {
  id?: never;
  link: string;
  caption?: string;
  filename?: string;
};

export type DocumentMediaMessageType =
  | MetaDocumentMediaType
  | HostedDocumentMediaType;

export type DocumentMessageRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Document> & {
    [MessageTypesEnum.Document]: DocumentMediaMessageType;
  };

export type MetaImageMediaType = {
  id: string;
  link?: never;
  caption?: string;
};

export type HostedImageMediaType = {
  id?: never;
  link: string;
  caption?: string;
};

export type ImageMediaMessageType = MetaImageMediaType | HostedImageMediaType;

export type ImageMessageRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Image> & {
    [MessageTypesEnum.Image]: ImageMediaMessageType;
  };

export type MessageProductType = {
  product_retailer_id: string;
};

export type MessageSimpleTextType = {
  text: string;
};

export type MessageRowType = {
  id: string;
  title: string;
  description?: string;
};

export type MultiProductSectionType = {
  product_items: MessageProductType[];
  rows?: never;
  title?: string;
};

export type ListSectionType = {
  product_items?: never;
  rows: MessageRowType[];
  title: string;
};

export type MessageSectionType = MultiProductSectionType | ListSectionType;

export type MessageButtonType = {
  title: string;
  id: string;
};

export type MessageReplyButtonType = {
  type: 'reply';
  reply: MessageButtonType;
};

export type MessageActionType = {
  button?: string;
  buttons?: MessageReplyButtonType[];
  catalog_id?: string;
  product_retailer_id?: string;
  sections?: MessageSectionType;
};

export type MessageAddressBaseType = {
  address?: string;
  building_name?: string;
  city?: string;
  floor_number?: string;
  house_number?: string;
  in_pin_code?: string;
  landmark_area?: string;
  name: string;
  phone_number?: string;
  state?: string;
  tower_number?: string;
};

export type MessageAddressActionType = MessageAddressBaseType & {
  name: InteractiveTypesEnum.Address;
  parameters: {
    country: string;
    saved_addresses?: [{
      id: string,
      value?: MessageAddressBaseType,
    }];
    validation_errors?: MessageAddressBaseType;
    values?: MessageAddressBaseType;
  }
};

export type MessageCTAButtonActionType = {
  name: InteractiveTypesEnum.CallToAction;
  parameters: {
    display_text: string;
    url: string;
  }
};

export type NamedFlowParametersType = {
  flow_id?: never;
  flow_name: string;
};

export type UnnamedFlowParametersType = {
  flow_id: string;
  flow_name?: never;
};

export type MessageFlowActionType = {
  name: InteractiveTypesEnum.Flow;
  parameters: (NamedFlowParametersType | UnnamedFlowParametersType) & {
    flow_message_version: 3;
    flow_cta: string;
    mode: 'draft' | 'published';
    flow_token: string | 'unused';
    flow_action: 'navigate' | 'data_exchange';
    flow_action_payload?: {
      screen: string | 'FIRST_ENTRY_SCREEN';
      data?: {
        [key: string]: string;
      }
    }
  }
};

export type LocationRequestActionType = {
  name: "send_location";
}

export type MessageHeaderType = {
  type: 'document' | 'image' | 'text' | 'video';
  document?: DocumentMediaMessageType;
  image?: ImageMediaMessageType;
  text?: string;
  video?: VideoMediaMessageType;
};

export type AddressInteractiveType = {
  type: InteractiveTypesEnum.Address;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: MessageAddressActionType;
};

export type ButtonInteractiveType = {
  type: InteractiveTypesEnum.Button;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: MessageActionType;
};

export type CallToActionInteractiveType = {
  type: InteractiveTypesEnum.CallToAction;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: MessageCTAButtonActionType;
};

export type FlowInteractiveType = {
  type: InteractiveTypesEnum.Flow;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: MessageFlowActionType;
};

export type ListInteractiveType = {
  type: InteractiveTypesEnum.List;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: MessageActionType;
};

export type LocationRequestInteractiveType = {
  type: InteractiveTypesEnum.LocationRequest;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: LocationRequestActionType;
}

export type ProductInteractiveType = {
  type: InteractiveTypesEnum.Product;
  body?: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: MessageActionType;
};

export type ProductListInteractiveType = {
  type: InteractiveTypesEnum.ProductList;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header: MessageHeaderType;
  action: MessageActionType;
};

export type InteractiveMessageType =
  | AddressInteractiveType
  | ButtonInteractiveType
  | CallToActionInteractiveType
  | FlowInteractiveType
  | ListInteractiveType
  | ProductInteractiveType
  | ProductListInteractiveType;

export type InteractiveMessageRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Interactive> & {
    [MessageTypesEnum.Interactive]: InteractiveMessageType;
  };

export type MetaStickerMediaType = {
  id: string;
  link?: never;
};

export type HostedStickerMediaType = {
  id?: never;
  link: string;
};

export type StickerMediaMessageType =
  | MetaStickerMediaType
  | HostedStickerMediaType;

export type StickerMessageRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Sticker> & {
    [MessageTypesEnum.Sticker]: StickerMediaMessageType;
  };

export type ReactionMessageType = {
  message_id: string;
  emoji: string;
};

export type ReactionMessageRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Reaction> & {
    [MessageTypesEnum.Reaction]: ReactionMessageType;
  }

export type TextMessageType = {
  body: string;
  preview_url?: boolean;
};

export type TextMessageRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Text> & {
    [MessageTypesEnum.Text]: TextMessageType;
  };

export type MetaHostedVideoMediaType = {
  id: string;
  link?: never;
  caption?: string;
};

export type SelfHostedVideoMediaType = {
  id?: never;
  link: string;
  caption?: string;
};

export type VideoMediaMessageType =
  | MetaHostedVideoMediaType
  | SelfHostedVideoMediaType;

export type VideoMessageRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Video> & {
    [MessageTypesEnum.Video]: VideoMediaMessageType;
  };

export type MessageLanguageType = {
  policy: 'deterministic';
  code: LanguagesEnum;
};

export type MessageParametersType<T extends ParametersTypesEnum> = {
  type: T;
};

export type TextParametersType = MessageParametersType<ParametersTypesEnum.Text> &
  MessageSimpleTextType;

export type MessageCurrencyType = {
  fallback_value: string;
  code: CurrencyCodesEnum;
  amount_1000: number;
};

export type CurrencyParametersType =
  MessageParametersType<ParametersTypesEnum.Currency> & {
    currency: MessageCurrencyType;
  };

export type MessageDateTimeType = {
  fallback_value: string;
};

export type DateTimeParametersType =
  MessageParametersType<ParametersTypesEnum.Currency> & {
    date_time: MessageCurrencyType;
  };

export type DocumentParametersType = MessageParametersType<ParametersTypesEnum.Document> &
  DocumentMediaMessageType;

export type ImageParametersType = MessageParametersType<ParametersTypesEnum.Image> &
  ImageMediaMessageType;

export type VideoParametersType = MessageParametersType<ParametersTypesEnum.Video> &
  VideoMediaMessageType;

export type QuickReplyButtonParametersType = {
  type: ParametersTypesEnum.Payload;
  payload: string;
};

export type URLButtonParametersType = MessageSimpleTextType & {
  type: ParametersTypesEnum.Text;
};

export type ButtonParameterType =
  | QuickReplyButtonParametersType
  | URLButtonParametersType;

export type MessageComponentType<T extends ComponentTypesEnum> = {
  type: T;
  parameters: (
    | CurrencyParametersType
    | DateTimeParametersType
    | DocumentParametersType
    | ImageParametersType
    | TextParametersType
    | VideoParametersType
  )[];
};

export type ButtonComponentType = MessageComponentType<ComponentTypesEnum.Button> & {
  parameters: ButtonParameterType;
  sub_type: ButtonTypesEnum;
  index: ButtonPositionEnum;
};

export type MessageTemplateType<T extends ComponentTypesEnum> = {
  name: string;
  language: MessageLanguageType;
  components?: (MessageComponentType<T> | ButtonComponentType)[];
};

export type MessageTemplateRequestBodyType<T extends ComponentTypesEnum> =
  MessageRequestBodyType<MessageTypesEnum.Template> & MessageTemplateType<T>;

export type LocationMessageType = {
  longitude: number;
  latitude: number;
  name?: string;
  address?: string;
};

export type LocationMessageRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Location> & {
    [MessageTypesEnum.Location]: LocationMessageType;
  };

export type MessagesResponseType = GeneralMessageBodyType & {
  contacts: [
    {
      input: string;
      wa_id: string;
    },
  ];
  messages: [
    {
      id: string;
    },
  ];
};

export declare class MessagesClass extends BaseClass {
  audio(
    body: AudioMediaType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessagesResponseType>>;
  contacts(
    body: [ContactMessageType],
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessagesResponseType>>;
  document(
    body: DocumentMediaMessageType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessagesResponseType>>;
  image(
    body: ImageMediaMessageType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessagesResponseType>>;
  interactive(
    body: InteractiveMessageType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessagesResponseType>>;
  location(
    body: LocationMessageType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessagesResponseType>>;
  status(
    body: StatusMessageType,
  ): Promise<RequesterResponseInterface<MessagesResponseType>>;
  sticker(
    body: StickerMediaMessageType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessagesResponseType>>;
  template(
    body: MessageTemplateType<ComponentTypesEnum>,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessagesResponseType>>;
  text(
    body: TextMessageType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessagesResponseType>>;
  video(
    body: VideoMediaMessageType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessagesResponseType>>;
}
