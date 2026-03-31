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

export enum ButtonPositionsEnum {
  First,
  Second,
  Third,
}

export enum ButtonTypesEnum {
  Catalog = 'catalog',
  CopyCode = 'copy_code',
  Flow = 'flow',
  QuickReply = 'quick_reply',
  MultiProduct = 'mpm',
  URL = 'url',
}

export enum InteractiveMediaTypesEnum {
  Document = 'document',
  Image = 'image',
  Text = 'text',
  Video = 'video',
}

export enum InteractiveTypesEnum {
  Address = 'address_message',
  Button = 'button',
  CallToAction = 'cta_url',
  Carousel = 'carousel',
  Flow = 'flow',
  List = 'list',
  LocationRequest = 'location_request_message',
  Product = 'product',
  ProductList = 'product_list',
}

export enum RequestMessageTypesEnum {
  Audio = 'audio',
  Contacts = 'contacts',
  Document = 'document',
  Image = 'image',
  Interactive = 'interactive',
  Location = 'location',
  Reaction = 'reaction',
  Sticker = 'sticker',
  Template = 'template',
  Text = 'text',
  Video = 'video',
}

// #region Template Message Types

export enum TemplateCategoriesEnum {
  Authentication = 'AUTHENTICATION',
  Marketing = 'MARKETING',
  Utility = "UTILITY"
}

export enum TemplateComponentTypesEnum {
  Body = 'body',
  Button = 'button',
  Buttons = 'buttons',
  Carousel = 'carousel',
  Flow = 'flow',
  Header = 'header',
  LimitedTimeOffer = 'limited_time_offer',
  TapTarget = 'tap_target_configuration',
}

export enum TemplateIndustriesEnum {
  ECommerce = 'ECOMMERCE',
  FinancialServices = 'FINANCIAL_SERVICES',
  Hospitality = 'HOSPITALITY',
}

export enum TemplateLibraryParametersEnum {
  Address = 'ADDRESS',
  Amount = 'AMOUNT',
  Date = 'DATE',
  Email = 'EMAIL',
  Number = 'NUMBER',
  PhoneNumber = 'PHONE_NUMBER',
  Text = 'TEXT',
}

export enum TemplateParameterTypesEnum {
  Action = 'action',
  CouponCode = 'coupon_code',
  Currency = 'currency',
  DateTime = 'date_time',
  Document = 'document',
  Flow = 'flow',
  Image = 'image',
  LimitedTimeOffer = 'limited_time_offer',
  Location = 'location',
  Payload = 'payload',
  Product = 'product',
  TapTarget = 'tap_target_configuration',
  Text = 'text',
  Video = 'video',
}

export enum TemplateStatusesEnum {
  Approved = 'APPROVED',
  Pending = 'PENDING',
  Rejected = 'REJECTED',
}

export enum TemplateTopicsEnum {
  AccountUpdate = 'ACCOUNT_UPDATE',
  CustomerFeedback = 'CUSTOMER_FEEDBACK',
  OrderManagement = 'ORDER_MANAGEMENT',
  Payments = 'PAYMENTS',
}

export enum TemplateUseCasesEnum {
  AccountCreationInformation = 'ACCOUNT_CREATION_INFORMATION',
  AutoPayReminder = 'AUTO_PAY_REMINDER',
  DeliveryConfirmation = 'DELIVERY_CONFIRMATION',
  DeliveryFailed = 'DELIVERY_FAILED',
  DeliveryUpdate = 'DELIVERY_UPDATE',
  FeedbackSurvey = 'FEEDBACK_SURVEY',
  FraudAlert = 'FRAUD_ALERT',
  LowBalanceWarning = 'LOW_BALANCE_WARNING',
  OrderActionNeeded = 'ORDER_ACTION_NEEDED',
  OrderConfirmation = 'ORDER_CONFIRMATION',
  OrderDelay = 'ORDER_DELAY',
  OrderOrTransactionCancel = 'ORDER_OR_TRANSACTION_CANCEL',
  OrderPickUp = 'ORDER_PICK_UP',
  PaymentActionRequired = 'PAYMENT_ACTION_REQUIRED',
  PaymentConfirmation = 'PAYMENT_CONFIRMATION',
  PaymentDueReminder = 'PAYMENT_DUE_REMINDER',
  PaymentOverdue = 'PAYMENT_OVERDUE',
  PaymentRejectFail = 'PAYMENT_REJECT_FAIL',
  PaymentScheduled = 'PAYMENT_SCHEDULED',
  ReceiptAtttachment = 'RECEIPT_ATTACHMENT',
  ReturnConfirmation = 'RETURN_CONFIRMATION',
  ShipmentConfirmation = 'SHIPMENT_CONFIRMATION',
  StatementAttachment = 'STATEMENT_ATTACHMENT',
  StatementAvailable = 'STATEMENT_AVAILABLE',
  TransactionAlert = 'TRANSACTION_ALERT',
}

// #endregion