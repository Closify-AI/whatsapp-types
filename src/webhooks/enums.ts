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

export enum ContactAddressTypesEnum {
  Home = 'home',
  Work = 'work',
}

export enum ConversationCategoryEnum {
  Authentication = 'authentication',
  AuthenticationInternational = 'authentication_international',
  Marketing = 'marketing',
  MarketingLite = 'marketing_lite',
  ReferralConversion = 'referral_conversion',
  Service = 'service',
  Utility = 'utility',
}

export enum ConversationTypesEnum {
  BusinessInitiated = 'business_initiated',
  CustomerInitiated = 'customer_initiated',
  ReferralConversion = 'referral_conversion',
}

export enum MessageWebhookTypesEnum {
  Audio = 'audio',
  Button = 'button',
  Contacts = 'contacts',
  Document = 'document',
  Edit = 'edit',
  Image = 'image',
  Interactive = 'interactive',
  Location = 'location',
  NaturalFlow = 'nfm_reply',
  Order = 'order',
  Reaction = 'reaction',
  Revoke = 'revoke',
  Sticker = 'sticker',
  System = 'system',
  Text = 'text',
  Unsupported = 'unsupported',
  Video = 'video',
}

export enum MessageWebhookStatusEnum {
  Delivered = 'delivered',
  Failed = 'failed',
  Played = 'played',
  Read = 'read',
  Sent = 'sent',
}

export enum PricingCategoryEnum {
  Authentication = 'authentication',
  AuthenticationInternational = 'authentication_international',
  Marketing = 'marketing',
  MarketingLite = 'marketing_lite',
  ReferralConversion = 'referral_conversion',
  Service = 'service',
  Utility = 'utility',
}

export enum PricingTypeEnum {
  FreeCustomerService = 'free_customer_service',
  FreeEntryPoint = 'free_entry_point',
  Regular = 'regular',
}

export enum ReferralSourceTypesEnum {
  Ad = 'ad',
  Post = 'post',
}

export enum SystemChangeTypesEnum {
  CustomerChangedNumber = 'customer_changed_number',
  CustomerIdentityChanged = 'customer_identity_changed',
  UserChangedNumber = 'user_changed_number',
  UserIdentityChanged = 'user_identity_changed',
}

export enum UnsupportedTypesEnum {
  Button = 'button',
  Edit = 'edit',
  Poll = 'poll',
}