import { WorkflowNodeRegistry } from '@flowgram.ai/free-layout-editor';

import { FormContent } from '../../components/form-content';

export const ConditionNodeRegistry: WorkflowNodeRegistry = {
  type: 'condition',
  meta: {
    defaultPorts: [{ type: 'input' }],
    useDynamicPort: true,
  },
  formMeta: {
    render: () => (
      <FormContent>
        <div style={{ position: 'relative', height: 50 }}>
          <div
            data-port-id="if"
            data-port-type="output"
            style={{ position: 'absolute', right: 0, top: '33%' }}
          />
          <div
            data-port-id="else"
            data-port-type="output"
            style={{ position: 'absolute', right: 0, top: '66%' }}
          />
        </div>
      </FormContent>
    ),
  },
};
