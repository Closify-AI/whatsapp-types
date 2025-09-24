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

// types 
export { BaseClass } from './types/base.js';
export type { WAConfigType } from './types/config.js';
export { HttpsServerClass } from './types/httpsServer.js';
export type { LoggerInterface } from './types/logger.js';
export { MessagesClass } from './types/messages.js';
export { RequesterClass } from './types/requester.js';
export { TwoStepVerificationClass } from './types/twoStepVerification.js';
export { WebhooksClass } from './types/webhooks.js';
export { WhatsAppClass } from './types/WhatsApp.js';

export {
  AudioMediaTypesEnum,
  ButtonPositionEnum,
  ButtonTypesEnum,
  ComponentTypesEnum,
  ConversationTypesEnum,
  CurrencyCodesEnum,
  DocumentMediaTypesEnum,
  HttpMethodsEnum,
  ImageMediaTypesEnum,
  InteractiveTypesEnum,
  LanguagesEnum,
  MessageTypesEnum,
  ParametersTypesEnum,
  ReferralSourceTypesEnum,
  StatusEnum,
  StickerMediaTypesEnum,
  SystemChangeTypesEnum,
  VideoMediaTypesEnum,
  WAConfigEnum,
  WARequiredConfigEnum,
  WebhookTypesEnum
} from './types/enums.js';

export {
  HttpsClientClass,
  HttpsClientResponseClass
} from './types/httpsClient.js';

export type {
  RequestDataType,
  RequestHeadersType,
  ResponseHeadersType,
  ResponseHeaderValueType,
  ResponseJSONBodyType,
  TimeoutErrorType
} from './types/httpsClient.js';

export type {
  AddressInteractiveType,
  AudioMediaType,
  AudioMessageRequestBodyType,
  AuthenticationTemplateRequestBodyType,
  ButtonComponentType,
  ButtonInteractiveType,
  CallToActionInteractiveType,
  ContactMessageType,
  ContactsMessageRequestBodyType,
  CurrencyParametersType,
  DateTimeParametersType,
  DocumentMediaMessageType,
  DocumentMessageRequestBodyType,
  DocumentParametersType,
  FlowInteractiveType,
  GeneralMessageBodyType,
  HostedAudioMediaType,
  HostedDocumentMediaType,
  HostedImageMediaType,
  HostedStickerMediaType,
  ImageMediaMessageType,
  ImageMessageRequestBodyType,
  ImageParametersType,
  InteractiveMessageRequestBodyType,
  InteractiveMessageType,
  InteractiveTemplateRequestBodyType,
  ListInteractiveType,
  ListSectionType,
  LocationMessageType,
  LocationParametersType,
  LocationRequestActionType,
  LocationRequestInteractiveType,
  LocationTemplateRequestBodyType,
  MediaTemplateRequestBodyType,
  MessageActionType,
  MessageAddressActionType,
  MessageAddressBaseType,
  MessageAddressesType,
  MessageButtonType,
  MessageComponentType,
  MessageContextType,
  MessageCTAButtonActionType,
  MessageCurrencyType,
  MessageDateTimeType,
  MessageEmailType,
  MessageFlowActionType,
  MessageHeaderType,
  MessageLanguageType,
  MessageNameType,
  MessageOrgType,
  MessagePhoneType,
  MessageProductType,
  MessageReplyButtonType,
  MessageRequestBodyType,
  MessageRowType,
  MessageSectionType,
  MessageSimpleTextType,
  MessagesResponseType,
  MessageURLType,
  MetaAudioMediaType,
  MetaDocumentMediaType,
  MetaHostedVideoMediaType,
  MetaImageMediaType,
  MetaStickerMediaType,
  MultiProductSectionType,
  NamedFlowParametersType,
  ProductInteractiveType,
  ProductListInteractiveType,
  QuickReplyButtonParametersType,
  ReactionMessageRequestBodyType,
  ReactionMessageType,
  SelfHostedVideoMediaType,
  StatusMessageType,
  StatusRequestBodyType,
  StickerMediaMessageType,
  StickerMessageRequestBodyType,
  TemplateMessageType,
  TextMessageRequestBodyType,
  TextMessageType,
  TextNamedParametersType,
  TextPositionalParametersType,
  TextTemplateRequestBodyType,
  UnnamedFlowParametersType,
  URLButtonParametersType,
  VideoMediaMessageType,
  VideoMessageRequestBodyType,
  VideoParametersType
} from './types/messages.js';

export type {
  GeneralHeaderInterface,
  GeneralRequestBodyType,
  RequesterResponseInterface
} from './types/requester.js';

export type {
  SetPinResponseType,
  TwoStepVerificationType
} from './types/twoStepVerification.js';

export type {
  SemanticVersionLabelsType,
  SemanticVersionStringType
} from './types/version.js';

export type {
  WebhookAudioType,
  WebhookButtonReplyType,
  WebhookButtonType,
  WebhookCallbackType,
  WebhookChangesType,
  WebhookContactType,
  WebhookContextType,
  WebhookConversationType,
  WebhookDocumentType,
  WebhookEntryType,
  WebhookErrorDataType,
  WebhookErrorType,
  WebhookIdentityType,
  WebhookImageType,
  WebhookInteractiveType,
  WebhookListReplyType,
  WebhookMessagesType,
  WebhookMetadataType,
  WebhookNfmReplyType,
  WebhookOrderType,
  WebhookOriginType,
  WebhookPricingType,
  WebhookProductItemsType,
  WebhookProfileType,
  WebhookReferralType,
  WebhookStatusesType,
  WebhookStickerType,
  WebhookSubscribeQueryType,
  WebhookSystemType,
  WebhookTextType,
  WebhookType,
  WebhookValueType,
  WebhookVideoType
} from './types/webhooks.js';

// typeCheckers
export { isWebhookType } from './typesCheckers/webhooksCheckers.js';

