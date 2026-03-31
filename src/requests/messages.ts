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
  AudioMediaTypesEnum,
  CountryCodesEnum,
  DocumentMediaTypesEnum,
  ImageMediaTypesEnum,
  StickerMediaTypesEnum,
  VideoMediaTypesEnum
} from "../enums.js";
import type {
  GeneralMessageType,
  InteractiveMessageActionType,
  InteractiveMessageHeaderType,
  MessageRequestType,
  QuickReplyButtonType,
  SimpleTextType
} from "./base.js";
import type {
  InteractiveTypesEnum,
  RequestMessageTypesEnum
} from "./enums.js";

/**
 * Messages API Reference
 * https://developers.facebook.com/documentation/business-messaging/whatsapp/messages/send-messages
 */

// #region Audio Message types
export type UploadedAudioType = {
  id: string;
  link?: never;
}

export type SelfHostedAudioType = {
  id?: never;
  link: string;
}

export type AudioMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Audio> & {
    [RequestMessageTypesEnum.Audio]: UploadedAudioType | SelfHostedAudioType;
  }

// #endregion

// #region Contact Message types

export type ContactAddressType = {
  city?: string;
  country_code?: CountryCodesEnum;
  country?: string;
  state?: string;
  street?: string;
  type?: string;
  zip?: string;
}

export type ContactEmailType = {
  email?: string;
  type?: string;
}

export type ContactNameType = {
  first_name?: string;
  formatted_name: string;
  last_name?: string;
  middle_name?: string;
  prefix?: string;
  suffix?: string;
}

export type ContactOrganizationType = {
  company?: string;
  department?: string;
  title?: string;
}

export type ContactPhoneType = {
  phone?: string;
  type?: string;
  wa_id?: string;
}

export type ContactURLType = {
  url?: string;
  type?: string;
}

export type ContactType = {
  addresses?: ContactAddressType[];
  birthday?: `${number}${number}${number}${number}-${number}${number}-${number}${number}`;
  emails?: ContactEmailType[];
  name: ContactNameType;
  org?: ContactOrganizationType;
  phones?: ContactPhoneType[];
  urls?: ContactURLType[];
}

export type ContactMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Contacts> & {
    [RequestMessageTypesEnum.Contacts]: [ContactType];
  }

// #endregion

// #region Context Message types

export type ContextType = {
  context: {
    message_id: string;
  }
}

export type ContextMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Text> & ContextType & {
    [RequestMessageTypesEnum.Text]: TextType;
  }

// #endregion

// #region Document Message types

export type UploadedDocumentType = {
  id: string;
  link?: never;
  caption?: string;
  filename?: string;
}

export type SelfHostedDocumentType = {
  id?: never;
  link: string;
  caption?: string;
  filename?: string;
}

export type DocumentMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Document> & {
    [RequestMessageTypesEnum.Document]: UploadedDocumentType | SelfHostedDocumentType;
  }

// #endregion

// #region Image Message types

export type UploadedImageType = {
  id: string;
  link?: never;
  caption?: string;
}

export type SelfHostedImageType = {
  id?: never;
  link: string;
  caption?: string;
}

export type ImageMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Image> & {
    [RequestMessageTypesEnum.Image]: UploadedImageType | SelfHostedImageType;
  }

// #endregion

// #region Location Message types

export type LocationType = {
  latitude: number;
  longitude: number;
  name?: string;
  address?: string;
}

export type LocationMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Location> & {
    [RequestMessageTypesEnum.Location]: LocationType;
  }

// #endregion

// #region Media Message types

export type MediaMessageFormType = {
  file: string,
  type: AudioMediaTypesEnum | DocumentMediaTypesEnum | ImageMediaTypesEnum | StickerMediaTypesEnum | VideoMediaTypesEnum,
  messaging_product: 'whatsapp'
}

// #endregion

// #region Reaction Message types

export type ReactionType = {
  message_id: string;
  emoji: string;
}

export type ReactionMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Reaction> & {
    [RequestMessageTypesEnum.Reaction]: ReactionType;
  }

// #endregion

// #region Sticker Message types

export type UploadedStickerType = {
  id: string;
  link?: never;
}

export type SelfHostedStickerType = {
  id?: never;
  link: string;
}

export type StickerMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Sticker> & {
    [RequestMessageTypesEnum.Sticker]: UploadedStickerType | SelfHostedStickerType;
  }

// #endregion

// #region Text Message types

export type TextType = {
  body: string;
  preview_url?: boolean;
}

export type TextMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Text> & {
    [RequestMessageTypesEnum.Text]: TextType;
  }

// #endregion

// #region Video Message types

export type UploadedVideoType = {
  id: string;
  link?: never;
  caption?: string;
}

export type SelfHostedVideoType = {
  id?: never;
  link: string;
  caption?: string;
}

export type VideoMessageRequestBodyType =
  MessageRequestType<RequestMessageTypesEnum.Video> & {
    [RequestMessageTypesEnum.Video]: UploadedVideoType | SelfHostedVideoType;
  }

// #endregion

/**
 * Interactive Messages
 */

// #region Address Interactive Message types

export type AddressValueType = {
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
}

export type AddressActionType = {
  name: InteractiveTypesEnum.Address;
  parameters: {
    country: CountryCodesEnum;
    saved_addresses?: [{
      id: string,
      value?: AddressValueType,
    }];
    validation_errors?: AddressValueType & { name?: string };
    values?: AddressValueType;
  }
}

export type AddressType = {
  action: AddressActionType;
  body: SimpleTextType;
  footer?: SimpleTextType;
  header?: InteractiveMessageHeaderType;
  type: InteractiveTypesEnum.Address;
}

export type AddressInteractiveMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Interactive> & {
    [RequestMessageTypesEnum.Interactive]: AddressType;
  }

// #endregion

// #region Call To Action URL Interactive Message types

export type CallToActionButtonType = {
  name: InteractiveTypesEnum.CallToAction;
  parameters: {
    display_text: string;
    url: string;
  }
}

export type CallToActionType = {
  action: CallToActionButtonType;
  body: SimpleTextType;
  footer?: SimpleTextType;
  header?: InteractiveMessageHeaderType;
  type: InteractiveTypesEnum.CallToAction;
}

export type CTAInteractiveMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Interactive> & {
    [RequestMessageTypesEnum.Interactive]: CallToActionType
  }

// #endregion

// #region Carousel Interactive Message types

export type CarouselCardType = {
  action?: CallToActionButtonType & { buttons?: QuickReplyButtonType[] };
  body?: SimpleTextType;
  card_index: number;
  header: InteractiveMessageHeaderType;
  type: InteractiveTypesEnum.CallToAction;
}

export type CarouselType = {
  action: { cards: CarouselCardType[] };
  body: SimpleTextType;
  type: InteractiveTypesEnum.Carousel;
}

export type CarouselInteractiveMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Interactive> & {
    [RequestMessageTypesEnum.Interactive]: CarouselType
  }

// #endregion

// #region List Interactive Message types

export type ListType = {
  action: InteractiveMessageActionType;
  body: SimpleTextType;
  footer?: SimpleTextType;
  header?: InteractiveMessageHeaderType;
  type: InteractiveTypesEnum.List;
}

export type ListInteractiveMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Interactive> & {
    [RequestMessageTypesEnum.Interactive]: ListType
  }

// #endregion

// #region Location Request Interactive Message types

export type LocationRequestActionType = {
  name: "send_location";
}

export type LocationRequestType = {
  action: LocationRequestActionType;
  body: SimpleTextType;
  footer?: SimpleTextType;
  header?: InteractiveMessageHeaderType;
  type: InteractiveTypesEnum.LocationRequest;
}

export type LocationRequestInteractiveMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Interactive> & {
    [RequestMessageTypesEnum.Interactive]: LocationRequestType
  }

// #endregion

// #region Reply Button Interactive Message types

export type ReplyButtonType = {
  action: InteractiveMessageActionType;
  body: SimpleTextType;
  footer?: SimpleTextType;
  header?: InteractiveMessageHeaderType;
  type: InteractiveTypesEnum.Button;
}

export type ReplyButtonInteractiveMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Interactive> & {
    [RequestMessageTypesEnum.Interactive]: ReplyButtonType;
  }

// #endregion

// #region Other Message types

export type MarkAsReadMessageRequestType =
  GeneralMessageType & {
    status: 'read';
    message_id: string;
  };

export type TypingIndicatorMessageRequestType =
  GeneralMessageType & {
    status: 'read';
    message_id: string;
    typing_indicator: {
      type: 'text';
    }
  };

// #endregion