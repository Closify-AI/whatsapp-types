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

import type { LanguagesEnum } from "../enums.js";
import type {
  DataFlowType,
  IdentityFlowType,
  InteractiveMessageActionType,
  InteractiveMessageHeaderType,
  MessageRequestType,
  NameFlowType,
  SimpleTextType
} from "./base.js";
import type {
  InteractiveTypesEnum,
  RequestMessageTypesEnum,
  TemplateCategoriesEnum,
  TemplateComponentTypesEnum,
  TemplateParameterTypesEnum
} from "./enums.js";

/**
 * Flows API Reference
 * https://developers.facebook.com/docs/whatsapp/flows/guides/sendingaflow
 */

export type CreateTemplateFlowRequestType = {
  name: string,
  language: LanguagesEnum,
  category: TemplateCategoriesEnum,
  components: [
    {
      type: TemplateComponentTypesEnum.Body,
      text: string
    },
    {
      type: TemplateComponentTypesEnum.Buttons,
      buttons: (DataFlowType | IdentityFlowType | NameFlowType) & {
        type: TemplateComponentTypesEnum.Flow,
        text: string,
      }[]
    }
  ]
}

export type SendTemplateFlowRequestType =
  MessageRequestType<RequestMessageTypesEnum.Template> & {
    [RequestMessageTypesEnum.Template]: {
      name: string,
      language: {
        code: LanguagesEnum
      },
      components: [
        {
          type: TemplateComponentTypesEnum,
          sub_type: TemplateComponentTypesEnum.Flow,
          index: number,
          parameters: {
            type: TemplateParameterTypesEnum.Action,
            [TemplateParameterTypesEnum.Action]: {
              flow_token?: string | 'unused';
              flow_action_data?: {
                [key: string]: string | object;
              }
            }
          }
        }
      ]
    }
  }

export type FlowActionType = {
  name: InteractiveTypesEnum.Flow;
  parameters: (NameFlowType | IdentityFlowType) & {
    flow_message_version: string;
    flow_cta: string;
    mode?: 'draft' | 'published';
    flow_token?: string | 'unused';
    flow_action?: 'navigate' | 'data_exchange';
    flow_action_payload?: {
      screen: string | 'FIRST_ENTRY_SCREEN';
      data?: Record<string, string | number | boolean | Array<string | number | boolean>>;
    }
  }
}

export type FlowType = {
  type: InteractiveTypesEnum.Flow;
  body: SimpleTextType;
  footer?: SimpleTextType;
  header?: InteractiveMessageHeaderType;
  action: FlowActionType;
}

export type FlowInteractiveMessageRequestType =
  MessageRequestType<RequestMessageTypesEnum.Interactive> & {
    [RequestMessageTypesEnum.Interactive]: FlowType
  }

export type ProductInteractiveType = {
  type: InteractiveTypesEnum.Product;
  body?: SimpleTextType;
  footer?: SimpleTextType;
  header?: InteractiveMessageHeaderType;
  action: InteractiveMessageActionType;
}

export type ProductListInteractiveType = {
  type: InteractiveTypesEnum.ProductList;
  body: SimpleTextType;
  footer?: SimpleTextType;
  header: InteractiveMessageHeaderType;
  action: InteractiveMessageActionType;
}