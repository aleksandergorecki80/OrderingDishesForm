import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { validate } from '../utils/validation';
import RenderInput from './fields/RenderInput';
import RenderSelectList from './fields/RenderSelectList';
import RenderRadio from './fields/RenderRadio';

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

const OrderFormFunction = ({
  handleSubmit,
  type,
  diameter,
  spiciness_scale,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        type="text"
        component={RenderInput}
        label="Dish name"
      />
      <Field
        name="preparation_time"
        type="time"
        component={RenderInput}
        label="Preparation time"
        step="1"
      />
      <Field
        placeholder="--- Chose a type ---"
        name="type"
        component={RenderSelectList}
        label="Dish type"
        options={dishTypes}
      />
      {type === 'pizza' && (
        <Fragment>
          <Field
            name="no_of_slices"
            type="number"
            component={RenderInput}
            label="Number of slices"
            min="4"
            max="10"
          />
          <Field
            name="diameter"
            type="range"
            component={RenderInput}
            label="Diameter"
            min="20"
            max="50"
            step="5"
            value="25"
          />
          <span>{diameter}</span>
        </Fragment>
      )}      
      {type === 'soup' && (
        <Field
          name="spiciness_scale"
          type="radio"
          component={RenderRadio}
          label="Spiciness Scale"
          min="1"
          max="10"
          selectedValue={spiciness_scale}
        />
      )}
      {type === 'sandwich' && (
        <Field
          name="slices_of_bread"
          type="number"
          component={RenderInput}
          label="Slices of bread"
          min="1"
          max="10"
          value="10"
        />
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
