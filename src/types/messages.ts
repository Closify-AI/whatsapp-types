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
  ButtonPositionEnum,
  ButtonTypesEnum,
  ComponentTypesEnum,
  CurrencyCodesEnum,
  InteractiveTypesEnum,
  LanguagesEnum,
  MessageTypesEnum,
  ParametersTypesEnum,
  TemplateIndustryEnum,
  TemplateTopicEnum,
  TemplateUseCaseEnum,
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

/**
 * Interactive messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages#interactive-messages
 */

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

/**
 * Interactive address message
 * https://developers.facebook.com/docs/whatsapp/cloud-api/messages/address-messages
 */
export type AddressInteractiveType = {
  type: InteractiveTypesEnum.Address;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: MessageAddressActionType;
};

/**
 * Interactive reply buttons message
 * https://developers.facebook.com/docs/whatsapp/cloud-api/messages/interactive-reply-buttons-messages
 */
export type ButtonInteractiveType = {
  type: InteractiveTypesEnum.Button;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: MessageActionType;
};

/**
 * Interactive call-to-action URL message
 * https://developers.facebook.com/docs/whatsapp/cloud-api/messages/interactive-cta-url-messages
 */
export type CallToActionInteractiveType = {
  type: InteractiveTypesEnum.CallToAction;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: MessageCTAButtonActionType;
};

/**
 * Interactive flow message
 * https://developers.facebook.com/docs/whatsapp/cloud-api/messages/interactive-flow-messages
 */
export type FlowInteractiveType = {
  type: InteractiveTypesEnum.Flow;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: MessageFlowActionType;
};

/**
 * Interactive list message
 * https://developers.facebook.com/docs/whatsapp/cloud-api/messages/interactive-list-messages
 */
export type ListInteractiveType = {
  type: InteractiveTypesEnum.List;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: MessageActionType;
};

/**
 * Interactive location request message
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-messages/location-request-messages
 */
export type LocationRequestInteractiveType = {
  type: InteractiveTypesEnum.LocationRequest;
  body: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: LocationRequestActionType;
}

/**
 * Interactive product message
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/sell-products-and-services/share-products
 */
export type ProductInteractiveType = {
  type: InteractiveTypesEnum.Product;
  body?: MessageSimpleTextType;
  footer?: MessageSimpleTextType;
  header?: MessageHeaderType;
  action: MessageActionType;
};

/**
 * Interactive product list message
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/sell-products-and-services/share-products
 */
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
  | LocationRequestInteractiveType
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

/**
 * Template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates
 */

export type TextNamedParametersType = {
  type: ParametersTypesEnum.Text;
  parameter_name: string;
  text: string;
};

export type TextPositionalParametersType = {
  type: ParametersTypesEnum.Text;
  text: string;
};

export type MessageCurrencyType = {
  fallback_value: string;
  code: CurrencyCodesEnum;
  amount_1000: number;
};

export type CurrencyParametersType = {
  type: ParametersTypesEnum.Currency;
  currency: MessageCurrencyType;
};

export type MessageDateTimeType = {
  fallback_value: string;
};

export type DateTimeParametersType = {
  type: ParametersTypesEnum.DateTime;
  date_time: MessageDateTimeType
};

export type DocumentParametersType =
  DocumentMediaMessageType & {
    type: ParametersTypesEnum.Document;
  };

export type ImageParametersType =
  ImageMediaMessageType & {
    type: ParametersTypesEnum.Image;
  };

export type VideoParametersType =
  VideoMediaMessageType & {
    type: ParametersTypesEnum.Video;
  };

export type LimitedTimeOfferParametersType = {
  type: ParametersTypesEnum.LimitedTimeOffer;
  limited_time_offer: {
    expiration_time_ms: number;
  }
}

export type LocationMessageType = {
  longitude: number;
  latitude: number;
  name?: string;
  address?: string;
};

export type LocationParametersType = {
  type: ParametersTypesEnum.Location;
  location: LocationMessageType;
}

export type TapTargetParametersType = {
  type: ParametersTypesEnum.TapTarget;
  tap_target_configuration: {
    url: URL;
    title: string;
  }
}

type ParametersType =
  | CurrencyParametersType
  | DateTimeParametersType
  | DocumentParametersType
  | ImageParametersType
  | LimitedTimeOfferParametersType
  | LocationParametersType
  | TextNamedParametersType
  | TextPositionalParametersType
  | VideoParametersType;

export type CatalogButtonParametersType = {
  type: ParametersTypesEnum.Action;
  action?: {
    thumbnail_product_retailer_id: string;
  }
};

export type CouponButtonParametersType = {
  type: ParametersTypesEnum.CouponCode;
  coupon_code: string;
};

export type QuickReplyButtonParametersType = {
  type: ParametersTypesEnum.Payload;
  payload: string;
};

export type URLButtonParametersType = {
  type: ParametersTypesEnum.Text;
  text: string;
};

type ButtonParametersType =
  | CatalogButtonParametersType
  | CouponButtonParametersType
  | QuickReplyButtonParametersType
  | URLButtonParametersType;

export type MessageComponentType<T extends ComponentTypesEnum, U extends ParametersType> = {
  type: T;
  parameters: (U)[];
};

export type ButtonComponentType<T extends ButtonParametersType> = {
  type: ComponentTypesEnum.Button;
  parameters: (T)[];
  sub_type: ButtonTypesEnum;
  index: ButtonPositionEnum;
};

export type TapTargetComponentType = {
  type: ComponentTypesEnum.TapTarget;
  parameters: [TapTargetParametersType];
}

export type TemplateMessageType<T extends ComponentTypesEnum, U extends ParametersType> = {
  name: string;
  language: MessageLanguageType;
  components?: (MessageComponentType<T, U>)[];
};

export type TemplateButtonMessageType<T extends ButtonParametersType> = {
  name: string;
  language: MessageLanguageType;
  components: (ButtonComponentType<T>)[];
};

export type TemplateTapTargetMessageType = {
  name: string;
  language: MessageLanguageType;
  components: [TapTargetComponentType];
}

/**
 * Authentication template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates/auth-otp-template-messages
 */
export type AuthenticationTemplateRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Template> &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, TextPositionalParametersType> } &
  { [MessageTypesEnum.Template]: TemplateButtonMessageType<URLButtonParametersType> };

/**
 * Interactive template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#interactive
 */
export type InteractiveTemplateRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Template> &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Header, ImageParametersType | DocumentParametersType | VideoParametersType> } &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, TextPositionalParametersType> } &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, CurrencyParametersType> } &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, DateTimeParametersType> } &
  { [MessageTypesEnum.Template]: TemplateButtonMessageType<QuickReplyButtonParametersType> } &
  { [MessageTypesEnum.Template]: TemplateButtonMessageType<QuickReplyButtonParametersType> };

/**
 * Location-based template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#location
 */
export type LocationTemplateRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Template> &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Header, LocationParametersType> } &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, TextPositionalParametersType> } &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, TextPositionalParametersType> };

/**
 * Media-based template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#media-based
 */
export type MediaTemplateRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Template> &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Header, ImageParametersType | DocumentParametersType | VideoParametersType> } &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, TextPositionalParametersType> } &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, CurrencyParametersType> } &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, DateTimeParametersType> };

/**
 * Tap target template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates/tap-target-url-title-override
 */
export type TapTargetTemplateRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Template> &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Header, ImageParametersType | DocumentParametersType | VideoParametersType> } &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, TextPositionalParametersType> } &
  { [MessageTypesEnum.Template]: TemplateTapTargetMessageType };

/**
 * Text-only template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#text-based
 */
export type TextTemplateRequestBodyType =
  MessageRequestBodyType<MessageTypesEnum.Template> &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, TextPositionalParametersType> } &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, CurrencyParametersType> } &
  { [MessageTypesEnum.Template]: TemplateMessageType<ComponentTypesEnum.Body, DateTimeParametersType> };

/**
 * Template library
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates/template-library
 */
export type TemplateLibraryButtonType = {
  type: string;
  text: string;
  url?: string;
  phone_number?: string;
}

export type TemplateLibraryURLButtonInputType = {
  type: 'URL';
  url: {
    base_url: URL;
    url_suffix_example: URL;
  }
}

export type TemplateLibraryPhoneNumberButtonInputType = {
  type: 'PHONE_NUMBER';
  phone_number: string;
}

export type TemplateLibraryCreateRequestBodyType = {
  name: string;
  category: 'UTILITY';
  language: LanguagesEnum;
  library_template_name: string;
  library_template_button_inputs: (TemplateLibraryURLButtonInputType | TemplateLibraryPhoneNumberButtonInputType)[];
}

export type TemplateLibraryCreateResponseBodyType = {
  id: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED' | 'DELETED';
  category: 'UTILITY';
}

export type TemplateLibraryQueryRequestBodyType = {
  search_key?: string;
  industry?: TemplateIndustryEnum;
  language?: LanguagesEnum;
  topic?: TemplateTopicEnum;
  usecase?: TemplateUseCaseEnum;
}

export type TemplateLibraryResponseBodyType = {
  name: string;
  language: LanguagesEnum;
  category: string;
  topic: TemplateTopicEnum;
  usecase: TemplateUseCaseEnum;
  industry: TemplateIndustryEnum[];
  header: string;
  body: string;
  body_params?: string[];
  buttons?: TemplateLibraryButtonType[];
  id: string;
}

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
    body:
      TemplateMessageType<ComponentTypesEnum, ParametersType> |
      TemplateButtonMessageType<ButtonParametersType> |
      TemplateTapTargetMessageType,
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
