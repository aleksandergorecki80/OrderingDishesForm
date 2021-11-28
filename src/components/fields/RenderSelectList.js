import React from 'react';

const RenderSelectList = ({
    input,
    label,
    options,
    placeholder,
    meta: { touched, error, warning },
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <select {...input}>
          <option value=''>{placeholder}</option>
          {options.map((element) => {
            return <option value={element.value} key={element.value}>{element.name}</option>;
          })}
        </select>
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  );

export default RenderSelectList;