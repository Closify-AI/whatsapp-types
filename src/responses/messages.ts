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

import type { AudioMediaTypesEnum, DocumentMediaTypesEnum, ImageMediaTypesEnum, StickerMediaTypesEnum, VideoMediaTypesEnum } from "../enums.js";

export type MediaGetResponseType = {
  messaging_product: 'whatsapp',
  url: string,
  mime_type: AudioMediaTypesEnum | DocumentMediaTypesEnum | ImageMediaTypesEnum | StickerMediaTypesEnum | VideoMediaTypesEnum,
  sha256: string,
  file_size: number,
  id: string
}

export type MediaPostResponseType = {
  id?: string;
}

export type MessageResponseType = {
  messaging_product: 'whatsapp';
  contacts: {
    input: string,
    wa_id: string,
  }[];
  messages: { id: string }[];
}

export type MessageSuccessResponseType = {
  success: boolean
}

export type IncompatibleMessageResponseType = {
  errors: {
    code: number,
    href: string,
    title: string
  }[];
  id: string;
  message: {
    recipient_id: string;
  },
  recipient_id: string;
  status: 'failed';
  timestamp: string;
  type: 'message';
}