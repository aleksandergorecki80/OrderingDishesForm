import React from 'react';

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
          initialvalue={initialValue}
        />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );

export default RenderInput;