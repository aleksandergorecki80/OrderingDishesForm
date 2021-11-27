import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const OrderFormFunction = ({
  handleSubmit,
  name,
  preparation_time,
  type,
  no_of_slices,
  diameter,
  spiciness_scale,
  slices_of_bread,
}) => {
  console.log(
    name,
    preparation_time,
    type,
    no_of_slices,
    diameter,
    spiciness_scale,
    slices_of_bread
  );
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
        type="number"
        component={renderField}
        label="Preparation time"
      />
      <div>
        <label>Dish type</label>
        <div>
          <Field name="type" component="select">
            <option />
            <option value="pizza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="sandwich">Sandwich</option>
          </Field>
        </div>
      </div>
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
        type="diameter"
        component={renderField}
        label="Diameter"
        min="20"
        max="50"
        step="5"
      />
      <Field
        name="slices_of_bread"
        type="number"
        component={renderField}
        label="Slices of bread"
        min="1"
        max="10"
        value="10"
      />
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
    </form>
  );
};

const ReduxOrderForm = reduxForm({
  // a unique name for the form
  form: 'orderForm',
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
