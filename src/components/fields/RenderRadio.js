import React, { Fragment } from 'react';
import { Form, Label } from 'semantic-ui-react';

const RenderRadio = ({
  input,
  label,
  type,
  min,
  max,
  meta: { touched, error, warning },
  selectedValue,
}) => {
  const spiciness_scale = [];
  for (let index = parseInt(min, 10); index <= max; index++) {
    spiciness_scale.push(index);
  }

  return (
    <Form.Field>
      <label>{label}</label>
      <div className="radio-buttons">
        {spiciness_scale.map((element) => {
          if (element === parseInt(selectedValue, 10)) {
            return (
              <div key={element} className="radio">
                <input
                  {...input}
                  type={type}
                  value={element}
                  checked={true}
                  className="radio-button"
                />
                <label>{element}</label>
              </div>
            );
          }
          return (
            <div key={element} className="radio">
              <input
                {...input}
                type={type}
                value={element}
                checked={false}
                className="radio-button"
              />
              <label>{element}</label>
            </div>
          );
        })}
      </div>
      {touched && error && (
        <Label basic color="red" pointing>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default RenderRadio;
