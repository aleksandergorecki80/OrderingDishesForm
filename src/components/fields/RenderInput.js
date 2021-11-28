import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

const RenderInput = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
    min,
    max,
    step,
    initialValue,
  }) => (
    <Form.Field>
      <label>{label}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          min={min}
          max={max}
          step={step}
          initialvalue={initialValue}
        />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </Form.Field>
  );

export default RenderInput;