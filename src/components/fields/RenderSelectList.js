import React from 'react';
import { Form, Label } from 'semantic-ui-react';

const RenderSelectList = ({
  input,
  label,
  options,
  placeholder,
  meta: { touched, error, warning },
}) => (
  <Form.Field>
    <label>{label}</label>
    <div>
      <select {...input}>
        <option value="">{placeholder}</option>
        {options.map((element) => {
          return (
            <option value={element.value} key={element.value}>
              {element.name}
            </option>
          );
        })}
      </select>
      {touched && error && (
        <Label basic color="red" pointing>
          {error}
        </Label>
      )}
    </div>
    </Form.Field>
);

export default RenderSelectList;
