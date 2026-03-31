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
  CurrencyCodesEnum,
  LanguagesEnum
} from "../enums.js";
import type {
  MessageLanguageType,
  MessageRequestType,
  MultiProductSectionType
} from "./base.js";
import type {
  ButtonPositionsEnum,
  ButtonTypesEnum,
  RequestMessageTypesEnum,
  TemplateCategoriesEnum,
  TemplateComponentTypesEnum,
  TemplateIndustriesEnum,
  TemplateParameterTypesEnum,
  TemplateStatusesEnum,
  TemplateTopicsEnum,
  TemplateUseCasesEnum
} from "./enums.js";
import type {
  SelfHostedDocumentType,
  SelfHostedImageType,
  SelfHostedVideoType,
  UploadedDocumentType,
  UploadedImageType,
  UploadedVideoType
} from "./messages.js";

/**
 * Templates API Reference
 * https://developers.facebook.com/documentation/business-messaging/whatsapp/templates/overview
 */

// #region Parameters Types

export type CarouselParametersType = {
  type: TemplateParameterTypesEnum.Image | TemplateParameterTypesEnum.Video;
  [TemplateParameterTypesEnum.Image]?: {
    id: string;
  };
  [TemplateParameterTypesEnum.Video]?: {
    id: string;
  };
}

export type CurrencyParametersType = {
  type: TemplateParameterTypesEnum.Currency;
  currency: MessageCurrencyType;
}

export type DateTimeParametersType = {
  type: TemplateParameterTypesEnum.DateTime;
  date_time: MessageDateTimeType
}

export type DocumentParametersType =
  (UploadedDocumentType | SelfHostedDocumentType) & {
    type: TemplateParameterTypesEnum.Document;
  }

export type ImageParametersType =
  (UploadedImageType | SelfHostedImageType) & {
    type: TemplateParameterTypesEnum.Image;
  }

export type LimitedTimeOfferParametersType = {
  type: TemplateParameterTypesEnum.LimitedTimeOffer;
  limited_time_offer: {
    expiration_time_ms: number;
  }
}

export type LocationMessageType = {
  longitude: number;
  latitude: number;
  name?: string;
  address?: string;
}

export type LocationParametersType = {
  type: TemplateParameterTypesEnum.Location;
  location: LocationMessageType;
}

export type MessageCurrencyType = {
  fallback_value: string;
  code: CurrencyCodesEnum;
  amount_1000: number;
}

export type MessageDateTimeType = {
  fallback_value: string;
}

export type ProductParametersType = {
  type: TemplateParameterTypesEnum.Product;
  product: {
    product_retailer_id: string;
    catalog_id: string;
  }
}

export type RegisteredFlowButtonsParametersType = {
  type: TemplateParameterTypesEnum.Flow;
  text: string;
  flow_action: 'navigate' | 'data_exchange';
  flow_id: string;
  flow_json?: never;
  navigate_screen?: string;
}

export type TapTargetParametersType = {
  type: TemplateParameterTypesEnum.TapTarget;
  tap_target_configuration: {
    url: URL;
    title: string;
  }
}

export type TextNamedParametersType = {
  type: TemplateParameterTypesEnum.Text;
  parameter_name: string;
  text: string;
}

export type TextPositionalParametersType = {
  type: TemplateParameterTypesEnum.Text;
  text: string;
}

export type UnregisteredFlowButtonsParametersType = {
  type: TemplateParameterTypesEnum.Flow;
  text: string;
  flow_action: 'navigate' | 'data_exchange';
  flow_id?: never;
  flow_json?: string;
  navigate_screen?: string;
}

export type VideoParametersType =
  (UploadedVideoType | SelfHostedVideoType) & {
    type: TemplateParameterTypesEnum.Video;
  }

export type ParametersType =
  | CarouselParametersType
  | CurrencyParametersType
  | DateTimeParametersType
  | DocumentParametersType
  | ImageParametersType
  | LimitedTimeOfferParametersType
  | LocationParametersType
  | ProductParametersType
  | TapTargetParametersType
  | TextNamedParametersType
  | TextPositionalParametersType
  | VideoParametersType;

// #endregion

// #region Button Parameters Types

export type CatalogButtonParametersType = {
  type: TemplateParameterTypesEnum.Action;
  action?: {
    thumbnail_product_retailer_id: string;
  }
}

export type CouponButtonParametersType = {
  type: TemplateParameterTypesEnum.CouponCode;
  coupon_code: string;
}

export type FlowButtonParametersType = {
  type: TemplateParameterTypesEnum.Action;
  action: {
    flow_token?: string | 'unused';
    flow_action_data?: {
      [key: string]: string | object;
    }
  }
}

export type MpmButtonParametersType = {
  type: TemplateParameterTypesEnum.Action;
  action: {
    thumbnail_product_retailer_id: string;
    sections: MultiProductSectionType[];
  }
}

export type QuickReplyButtonParametersType = {
  type: TemplateParameterTypesEnum.Payload;
  payload: string;
}

export type URLButtonParametersType = {
  type: TemplateParameterTypesEnum.Text;
  text: string;
}

export type ButtonParametersType =
  | CatalogButtonParametersType
  | CouponButtonParametersType
  | FlowButtonParametersType
  | QuickReplyButtonParametersType
  | MpmButtonParametersType
  | URLButtonParametersType;

// #endregion

// #region Carousel Component Types

export type MessageComponentType<T extends TemplateComponentTypesEnum, U extends ParametersType> = {
  type: T;
  parameters: (U)[];
}

export type ButtonComponentType<T extends ButtonParametersType> = {
  type: TemplateComponentTypesEnum.Button;
  parameters: (T)[];
  sub_type: ButtonTypesEnum;
  index: ButtonPositionsEnum;
}

export type FlowButtonsComponentType = {
  type: TemplateComponentTypesEnum.Buttons;
  buttons: (RegisteredFlowButtonsParametersType | UnregisteredFlowButtonsParametersType)[];
}

export type CarouselSubComponentType =
  | MessageComponentType<TemplateComponentTypesEnum.Header, CarouselParametersType>
  | MessageComponentType<TemplateComponentTypesEnum.Header, ProductParametersType>
  | MessageComponentType<TemplateComponentTypesEnum.Body, TextPositionalParametersType>
  | ButtonComponentType<QuickReplyButtonParametersType | URLButtonParametersType>;

export type CarouselComponentType<T extends CarouselSubComponentType> = {
  type: TemplateComponentTypesEnum.Carousel;
  cards: {
    card_index: number;
    components: (T)[];
  }
}

// #endregion

export type TemplateMessageType<T extends TemplateComponentTypesEnum, U extends ParametersType> = {
  name: string;
  language: MessageLanguageType;
  components?: (MessageComponentType<T, U>)[];
}

export type TemplateButtonMessageType<T extends ButtonParametersType> = {
  name: string;
  language: MessageLanguageType;
  components: (ButtonComponentType<T>)[];
}

export type TemplateCarouselMessageType<T extends CarouselSubComponentType> = {
  name: string;
  language: MessageLanguageType;
  components: (MessageComponentType<TemplateComponentTypesEnum.Body, TextPositionalParametersType> | CarouselComponentType<T>)[];
}

export type TemplateSingleProductMessageType = {
  name: string;
  language: MessageLanguageType & {
    policy: 'deterministic'
  };
  components: (MessageComponentType<TemplateComponentTypesEnum.Header, ProductParametersType> | MessageComponentType<TemplateComponentTypesEnum.Body, TextPositionalParametersType>)[];
}

/**
 * Authentication template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates/auth-otp-template-messages
 */
export type AuthenticationTemplateRequestBodyType =
  MessageRequestType<RequestMessageTypesEnum.Template> &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, TextPositionalParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateButtonMessageType<URLButtonParametersType> }

/**
 * Flow template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates/flows-templates
 */
export type FlowRequestBodyType =
  MessageRequestType<RequestMessageTypesEnum.Template> &
  { [RequestMessageTypesEnum.Template]: TemplateButtonMessageType<FlowButtonParametersType> }

export type FlowTemplateCreateRequestBodyType = {
  name: string;
  category: TemplateCategoriesEnum.Marketing;
  language: LanguagesEnum;
  components: (MessageComponentType<TemplateComponentTypesEnum.Body, TextPositionalParametersType> | FlowButtonsComponentType)[];
}

/**
 * Interactive template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#interactive
 */
export type InteractiveTemplateRequestBodyType =
  MessageRequestType<RequestMessageTypesEnum.Template> &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Header, ImageParametersType | DocumentParametersType | VideoParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, TextPositionalParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, CurrencyParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, DateTimeParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateButtonMessageType<QuickReplyButtonParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateButtonMessageType<QuickReplyButtonParametersType> }

/**
 * Location-based template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#location
 */
export type LocationTemplateRequestBodyType =
  MessageRequestType<RequestMessageTypesEnum.Template> &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Header, LocationParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, TextPositionalParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, TextPositionalParametersType> }

/**
 * Media-based template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#media-based
 */
export type MediaTemplateRequestBodyType =
  MessageRequestType<RequestMessageTypesEnum.Template> &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Header, ImageParametersType | DocumentParametersType | VideoParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, TextPositionalParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, CurrencyParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, DateTimeParametersType> }

/**
 * Tap target template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates/tap-target-url-title-override
 */
export type TapTargetTemplateRequestBodyType =
  MessageRequestType<RequestMessageTypesEnum.Template> &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Header, ImageParametersType | DocumentParametersType | VideoParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, TextPositionalParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.TapTarget, TapTargetParametersType> }

/**
 * Text-only template messages
 * https://developers.facebook.com/docs/whatsapp/cloud-api/guides/send-message-templates#text-based
 */
export type TextTemplateRequestBodyType =
  MessageRequestType<RequestMessageTypesEnum.Template> &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, TextPositionalParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, CurrencyParametersType> } &
  { [RequestMessageTypesEnum.Template]: TemplateMessageType<TemplateComponentTypesEnum.Body, DateTimeParametersType> }

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
  category: TemplateCategoriesEnum.Utility;
  language: LanguagesEnum;
  library_template_name: string;
  library_template_button_inputs: (TemplateLibraryURLButtonInputType | TemplateLibraryPhoneNumberButtonInputType)[];
}

export type TemplateCreateResponseBodyType = {
  id: string;
  status: TemplateStatusesEnum;
  category: TemplateCategoriesEnum;
}

export type TemplateLibraryQueryRequestBodyType = {
  search_key?: string;
  industry?: TemplateIndustriesEnum;
  language?: LanguagesEnum;
  topic?: TemplateTopicsEnum;
  usecase?: TemplateUseCasesEnum;
}

export type TemplateLibraryResponseBodyType = {
  name: string;
  language: LanguagesEnum;
  category: TemplateCategoriesEnum;
  topic: TemplateTopicsEnum;
  usecase: TemplateUseCasesEnum;
  industry: TemplateIndustriesEnum[];
  header: string;
  body: string;
  body_params?: string[];
  buttons?: TemplateLibraryButtonType[];
  id: string;
}