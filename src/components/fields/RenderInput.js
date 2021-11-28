import React from 'react';
import { Form, Label } from 'semantic-ui-react';

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
        className="width-100"
      />
      {touched && error && (
        <Label basic color="red" pointing>
          {error}
        </Label>
      )}
    </div>
  </Form.Field>
);

export default RenderInput;
