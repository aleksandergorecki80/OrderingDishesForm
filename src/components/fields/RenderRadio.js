import React, { Fragment, useState } from 'react';

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
    <div>
      <label>{label}</label>
      {spiciness_scale.map((element) => {
        if (element === parseInt(selectedValue, 10)) {
          return (
            <Fragment key={element}>
              <input {...input} type={type} value={element} checked={true} />
              <label>{element}</label>
            </Fragment>
          );
        }
        return (
          <Fragment key={element}>
            <input {...input} type={type} value={element} checked={false} />
            <label>{element}</label>
          </Fragment>
        );
      })}

      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  );
};

export default RenderRadio;
