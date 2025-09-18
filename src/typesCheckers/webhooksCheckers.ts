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

import { z } from 'zod';
import type { WebhookType } from '../types/webhooks.js';

// Define Zod schemas for your webhook types
// These schemas will also infer the TypeScript types, making your type definitions more robust.
const WebhookChangesSchema = z.looseObject({ // Use .looseObject() if there can be other fields you don't explicitly validate
  field: z.string(),
  // Add other properties of WebhookChangesType if they are relevant for validation
  // e.g., value: z.any().optional(),
});

const WebhookEntrySchema = z.looseObject({
  id: z.string().optional(), // Assuming 'id' might be present
  changes: z.array(WebhookChangesSchema).optional(),
  // Add other properties of WebhookEntryType if they are relevant for validation
});

const WebhookSchema = z.looseObject({
  object: z.literal('whatsapp_business_account'), // Ensures 'object' is exactly this string
  entry: z.array(WebhookEntrySchema),
  // Add other top-level properties if they exist and need validation
});

// Type guard function using Zod
export function isWebhookType(body: any): body is WebhookType {
  const result = WebhookSchema.safeParse(body);
  if (!result.success) {
    console.error('Zod validation error:', result.error);
  }
  return result.success;
}