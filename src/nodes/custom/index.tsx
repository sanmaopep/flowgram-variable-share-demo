import { WorkflowNodeRegistry } from '@flowgram.ai/free-layout-editor';

import { FormContent } from '../../components/form-content';

export const CustomNodeRegistry: WorkflowNodeRegistry = {
  type: 'custom',
  meta: {},
  defaultPorts: [{ type: 'output' }, { type: 'input' }], // A normal node has two ports
  formMeta: {
    render: () => <FormContent />,
  },
};
