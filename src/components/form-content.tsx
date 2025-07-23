import React from 'react';

import { Field } from '@flowgram.ai/free-layout-editor';

export const FormContent = ({ children }: React.PropsWithChildren) => (
  <>
    <Field<string> name="title">
      {({ field }) => <div className="demo-free-node-title">{field.value}</div>}
    </Field>
    <div className="demo-free-node-content">{children}</div>
  </>
);
