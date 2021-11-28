import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import moment from 'moment';
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

const renderDiameter = (diameter) => {
  return diameter % 1 === 0 ? `${diameter}.0` : diameter;
}

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
            step="0.1"
            initialValue="35"
          />
          <span>
            {renderDiameter(diameter)}
           </span>
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
  initialValues: {
    diameter: 35,
    no_of_slices: 6,
    spiciness_scale: 5,
    preparation_time: moment().format('hh:mm:ss'),
  },
})(OrderFormFunction);

const selector = formValueSelector('orderForm');

const OrderForm = connect((state) => {
  const { type, diameter, spiciness_scale } = selector(
    state,
    'type',
    'diameter',
    'spiciness_scale'
  );
  return {
    type,
    diameter,
    spiciness_scale,
  };
})(ReduxOrderForm);

export default OrderForm;
