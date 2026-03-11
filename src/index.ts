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
export type { WAConfigType } from './types/config.js';
export type { LoggerInterface } from './types/logger.js';

export {
  AudioMediaTypesEnum,
  ButtonPositionEnum,
  ButtonTypesEnum,
  ComponentTypesEnum,
  ContactAddressTypesEnum,
  ConversationCategoryEnum,
  ConversationTypesEnum,
  CurrencyCodesEnum,
  DocumentMediaTypesEnum,
  HttpMethodsEnum,
  ImageMediaTypesEnum,
  InteractiveTypesEnum,
  LanguagesEnum,
  MessageTypesEnum,
  ParameterTypesEnum,
  PricingCategoryEnum,
  PricingTypeEnum,
  ReferralSourceTypesEnum,
  StatusEnum,
  StickerMediaTypesEnum,
  SystemChangeTypesEnum,
  TemplateCategoryEnum,
  TemplateIndustryEnum,
  TemplateLibraryParameterEnum,
  TemplateStatusEnum,
  TemplateTopicEnum,
  TemplateUseCaseEnum,
  UnsupportedTypesEnum,
  VideoMediaTypesEnum,
  WAConfigEnum,
  WARequiredConfigEnum,
  WebhookMessageTypesEnum
} from './types/enums.js';

export type {
  HttpsClientClass,
  HttpsClientResponseClass,
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
  CarouselComponentType,
  CarouselParametersType,
  CatalogButtonParametersType,
  ContactMessageType,
  ContactsMessageRequestBodyType,
  CouponButtonParametersType,
  CurrencyParametersType,
  DateTimeParametersType,
  DocumentMediaMessageType,
  DocumentMessageRequestBodyType,
  DocumentParametersType,
  FlowButtonParametersType,
  FlowButtonsComponentType,
  FlowInteractiveType,
  FlowRequestBodyType,
  FlowTemplateCreateRequestBodyType,
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
  LimitedTimeOfferParametersType,
  ListInteractiveType,
  ListSectionType,
  LocationMessageType,
  LocationParametersType,
  LocationRequestActionType,
  LocationRequestInteractiveType,
  LocationTemplateRequestBodyType,
  MarkAsReadMessageType,
  MarkAsReadRequestBodyType,
  MediaTemplateRequestBodyType,
  MessageActionType,
  MessageAddressActionType,
  MessageAddressBaseType,
  MessageAddressesType,
  MessageButtonType,
  MessageComponentType,
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
  MessagesClass,
  MessageSectionType,
  MessageSimpleTextType,
  MessagesResponseType,
  MessageURLType,
  MetaAudioMediaType,
  MetaDocumentMediaType,
  MetaHostedVideoMediaType,
  MetaImageMediaType,
  MetaStickerMediaType,
  MpmButtonParametersType,
  MultiProductSectionType,
  NamedFlowParametersType,
  ProductInteractiveType,
  ProductListInteractiveType,
  ProductParametersType,
  QuickReplyButtonParametersType,
  ReactionMessageRequestBodyType,
  ReactionMessageType,
  RegisteredFlowButtonsParametersType,
  ReplyToMessageType,
  SelfHostedVideoMediaType,
  StickerMediaMessageType,
  StickerMessageRequestBodyType,
  TapTargetParametersType,
  TapTargetTemplateRequestBodyType,
  TemplateButtonMessageType,
  TemplateCarouselMessageType,
  TemplateCreateResponseBodyType,
  TemplateLibraryButtonType,
  TemplateLibraryCreateRequestBodyType,
  TemplateLibraryPhoneNumberButtonInputType,
  TemplateLibraryQueryRequestBodyType,
  TemplateLibraryResponseBodyType,
  TemplateLibraryURLButtonInputType,
  TemplateMessageType,
  TemplateSingleProductMessageType,
  TextMessageRequestBodyType,
  TextMessageType,
  TextNamedParametersType,
  TextPositionalParametersType,
  TextTemplateRequestBodyType,
  TypingIndicatorMessageType,
  TypingIndicatorRequestBodyType,
  UnnamedFlowParametersType,
  UnregisteredFlowButtonsParametersType,
  URLButtonParametersType,
  VideoMediaMessageType,
  VideoMessageRequestBodyType,
  VideoParametersType
} from './types/messages.js';

export type {
  GeneralHeaderInterface,
  GeneralRequestBodyType,
  RequesterClass,
  RequesterResponseInterface
} from './types/requester.js';

export type {
  SetPinResponseType,
  TwoStepVerificationClass,
  TwoStepVerificationType
} from './types/twoStepVerification.js';

export type {
  SemanticVersionLabelsType,
  SemanticVersionStringType
} from './types/version.js';

export type {
  WebhookAudioMessageType,
  WebhookButtonMessageType,
  WebhookButtonReplyInteractiveMessageType,
  WebhookCallbackType,
  WebhookChangeType,
  WebhookContactAddressMessageType,
  WebhookContactEmailMessageType,
  WebhookContactMessageType,
  WebhookContactNameMessageType,
  WebhookContactOrgMessageType,
  WebhookContactPhoneMessageType,
  WebhookContactType,
  WebhookContactURLMessageType,
  WebhookContextMessageBusinessType,
  WebhookContextMessageForwardedType,
  WebhookDocumentMessageType,
  WebhookEditImageMessageType,
  WebhookEditMessageType,
  WebhookEntryType,
  WebhookErrorMessageType,
  WebhookIdentityMessageType,
  WebhookImageMessageType,
  WebhookInteractiveMessageType,
  WebhookListReplyInteractiveMessageType,
  WebhookLocationMessageType,
  WebhookMessageType,
  WebhookMetadataType,
  WebhookNfmReplyInteractiveMessageType,
  WebhookOrderMessageType,
  WebhookProductItemType,
  WebhookReactionMessageType,
  WebhookReferralType,
  WebhookRevokeMessageType,
  WebhooksClass,
  WebhookStatusConversationType,
  WebhookStatusErrorType,
  WebhookStatusPricingType,
  WebhookStatusType,
  WebhookStickerMessageType,
  WebhookSubscribeQueryType,
  WebhookSystemMessageType,
  WebhookTextMessageType,
  WebhookType,
  WebhookUnsupportedMessageType,
  WebhookValueType,
  WebhookVideoMessageType,
} from './types/webhooks.js';

// typeCheckers
export { isWebhookType } from './typesCheckers/webhooksCheckers.js';