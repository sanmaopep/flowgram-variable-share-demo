import { WorkflowNodeRegistry } from '@flowgram.ai/free-layout-editor';

import { FormContent } from '../../components/form-content';

export const EndNodeRegistry: WorkflowNodeRegistry = {
  type: 'end',
  meta: {
    deleteDisable: true,
    copyDisable: true,
    defaultPorts: [{ type: 'input' }],
  },
  formMeta: {
    render: () => <FormContent />,
  },
};
