import { WorkflowNodeRegistry } from '@flowgram.ai/free-layout-editor';

import { FormContent } from '../../components/form-content';

export const StartNodeRegistry: WorkflowNodeRegistry = {
  type: 'start',
  meta: {
    isStart: true, // Mark as start
    deleteDisable: true, // The start node cannot be deleted
    copyDisable: true, // The start node cannot be copied
    defaultPorts: [{ type: 'output' }], // Used to define the input and output ports, the start node only has the output port
  },
  formMeta: {
    render: () => <FormContent />,
  },
};
