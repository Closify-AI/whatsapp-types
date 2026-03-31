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

import type { MessageResponseType } from "../responses/messages.js";
import type { BaseClass } from "../types/base.js";
import type { RequesterResponseInterface } from "../types/requester.js";
import type { TemplateComponentTypesEnum } from "./enums.js";
import type {
  AddressInteractiveMessageRequestType,
  CarouselInteractiveMessageRequestType,
  ContactType,
  CTAInteractiveMessageRequestType,
  ListInteractiveMessageRequestType,
  LocationRequestInteractiveMessageRequestType,
  MarkAsReadMessageRequestType,
  ReplyButtonInteractiveMessageRequestType,
  SelfHostedAudioType,
  SelfHostedDocumentType,
  SelfHostedImageType,
  SelfHostedStickerType,
  SelfHostedVideoType,
  TextType,
  UploadedAudioType,
  UploadedDocumentType,
  UploadedImageType,
  UploadedStickerType,
  UploadedVideoType
} from "./messages.js";
import type {
  ButtonParametersType,
  CarouselSubComponentType,
  LocationMessageType,
  ParametersType,
  TemplateButtonMessageType,
  TemplateCarouselMessageType,
  TemplateMessageType
} from "./templates.js";

export declare class MessagesClass extends BaseClass {
  audio(
    body: UploadedAudioType | SelfHostedAudioType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessageResponseType>>;
  contacts(
    body: [ContactType],
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessageResponseType>>;
  document(
    body: UploadedDocumentType | SelfHostedDocumentType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessageResponseType>>;
  image(
    body: UploadedImageType | SelfHostedImageType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessageResponseType>>;
  interactive(
    body:
      | AddressInteractiveMessageRequestType
      | CTAInteractiveMessageRequestType
      | CarouselInteractiveMessageRequestType
      | ListInteractiveMessageRequestType
      | LocationRequestInteractiveMessageRequestType
      | ReplyButtonInteractiveMessageRequestType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessageResponseType>>;
  location(
    body: LocationMessageType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessageResponseType>>;
  status(
    body: MarkAsReadMessageRequestType,
  ): Promise<RequesterResponseInterface<MessageResponseType>>;
  sticker(
    body: UploadedStickerType | SelfHostedStickerType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessageResponseType>>;
  template(
    body:
      | TemplateMessageType<TemplateComponentTypesEnum, ParametersType>
      | TemplateButtonMessageType<ButtonParametersType>
      | TemplateCarouselMessageType<CarouselSubComponentType>,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessageResponseType>>;
  text(
    body: TextType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessageResponseType>>;
  video(
    body: UploadedVideoType | SelfHostedVideoType,
    recipient: number,
    replyMessageId?: string,
  ): Promise<RequesterResponseInterface<MessageResponseType>>;
}
