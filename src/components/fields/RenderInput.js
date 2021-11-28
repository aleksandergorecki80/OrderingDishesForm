import React from 'react';

const RenderInput = ({
    input,
    label,
    type,
    meta: { touched, error, warning },
    min,
    max,
    step,
    value,
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input
          {...input}
          placeholder={label}
          type={type}
          min={min}
          max={max}
          step={step}
          value={value}
        />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );

export default RenderInput;