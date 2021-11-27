import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { validate } from '../utils/validation';

const dishTypes = [
  {
    value: 'pizza',
    name: 'Pizza',
  },
  {
    value: 'soup',
    name: 'Soup',
  },
  {
    value: 'sandwich',
    name: 'Sandwich',
  },
];

const renderField = ({
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

const renderSelectList = ({
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

const OrderFormFunction = ({ handleSubmit, type, diameter }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        type="text"
        component={renderField}
        label="Dish name"
      />
      <Field
        name="preparation_time"
        type="time"
        component={renderField}
        label="Preparation time"
        step="1"
      />
      <Field
        placeholder="--- Chose a type ---"
        name="type"
        component={renderSelectList}
        label="Dish type"
        options={dishTypes}
      />
      {type === 'pizza' && (
        <Fragment>
          <Field
            name="no_of_slices"
            type="number"
            component={renderField}
            label="Number of slices"
            min="4"
            max="10"
          />
          <Field
            name="diameter"
            type="range"
            component={renderField}
            label="Diameter"
            min="20"
            max="50"
            step="5"
            value="25"
          />
          <span>{diameter}</span>
        </Fragment>
      )}
      {type === 'sandwich' && (
        <Field
          name="slices_of_bread"
          type="number"
          component={renderField}
          label="Slices of bread"
          min="1"
          max="10"
          value="10"
        />
      )}
      {type === 'soup' && (
        <div>
          <label>Spiciness Scale</label>
          <div>
            <label>
              <Field
                name="spiciness_scale"
                component="input"
                type="radio"
                value="1"
              />
              1
            </label>
            <label>
              <Field
                name="spiciness_scale"
                component="input"
                type="radio"
                value="2"
              />
              2
            </label>
            <label>
              <Field
                name="spiciness_scale"
                component="input"
                type="radio"
                value="3"
              />
              3
            </label>
            <label>
              <Field
                name="spiciness_scale"
                component="input"
                type="radio"
                value="4"
              />
              4
            </label>
            <label>
              <Field
                name="spiciness_scale"
                component="input"
                type="radio"
                value="5"
              />
              5
            </label>
            <label>
              <Field
                name="spiciness_scale"
                component="input"
                type="radio"
                value="6"
              />
              6
            </label>
            <label>
              <Field
                name="spiciness_scale"
                component="input"
                type="radio"
                value="7"
              />
              7
            </label>
            <label>
              <Field
                name="spiciness_scale"
                component="input"
                type="radio"
                value="8"
              />
              8
            </label>
            <label>
              <Field
                name="spiciness_scale"
                component="input"
                type="radio"
                value="9"
              />
              9
            </label>
            <label>
              <Field
                name="spiciness_scale"
                component="input"
                type="radio"
                value="10"
              />
              10
            </label>
          </div>
        </div>
      )}
      <button type="submit">Submit</button>
    </form>
  );
};

const ReduxOrderForm = reduxForm({
  // a unique name for the form
  form: 'orderForm',
  validate,
})(OrderFormFunction);

const selector = formValueSelector('orderForm');

const OrderForm = connect((state) => {
  const {
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  } = selector(
    state,
    'name',
    'type',
    'preparation_time',
    'no_of_slices',
    'diameter',
    'spiciness_scale',
    'slices_of_bread'
  );
  return {
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread,
  };
})(ReduxOrderForm);

export default OrderForm;
