/**
 * Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
 * SPDX-License-Identifier: MIT
 */

import { WorkflowNodeRegistry } from '@flowgram.ai/free-layout-editor';

import { StartNodeRegistry } from './start';
import { EndNodeRegistry } from './end';
import { CustomNodeRegistry } from './custom';
import { ConditionNodeRegistry } from './condition';

/**
 * You can customize your own node registry
 * 你可以自定义节点的注册器
 */
export const nodeRegistries: WorkflowNodeRegistry[] = [
  StartNodeRegistry,
  ConditionNodeRegistry,
  EndNodeRegistry,
  CustomNodeRegistry,
];
