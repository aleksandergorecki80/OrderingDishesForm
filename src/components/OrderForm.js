import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import moment from 'moment';
import { Container, Button, Header, Form } from 'semantic-ui-react';
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
};

const OrderFormFunction = ({
  handleSubmit,
  type,
  diameter,
  spiciness_scale,
}) => {
  return (
    <Container text className="margin-top">
      <Header as='h1'>Order Form</Header>
      <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Field
          name="name"
          type="text"
          component={RenderInput}
          label="Dish name"
        />
        </Form.Field>
        <Form.Field>
        <Field
          name="preparation_time"
          type="time"
          component={RenderInput}
          label="Preparation time"
          step="1"
        />
        </Form.Field>
        <Form.Field>
        <Field
          placeholder="--- Chose a type ---"
          name="type"
          component={RenderSelectList}
          label="Dish type"
          options={dishTypes}
        />
        </Form.Field>
        {type === 'pizza' && (
          <Fragment>
            <Form.Field>
            <Field
              name="no_of_slices"
              type="number"
              component={RenderInput}
              label="Number of slices"
              min="4"
              max="10"
            />
            </Form.Field>
            <Form.Field>
            <Field
              name="diameter"
              type="range"
              component={RenderInput}
              label="Diameter"
              min="20"
              max="50"
              step="0.1"
              initialValue="35"
              className="range-style"
            /> {renderDiameter(diameter)}
            </Form.Field>
          </Fragment>
        )}
        {type === 'soup' && (
          <Form.Field>
          <Field
            name="spiciness_scale"
            type="radio"
            component={RenderRadio}
            label="Spiciness Scale"
            min="1"
            max="10"
            selectedValue={spiciness_scale}
          />
          </Form.Field>
        )}
        {type === 'sandwich' && (
          <Form.Field>
          <Field
            name="slices_of_bread"
            type="number"
            component={RenderInput}
            label="Slices of bread"
            min="1"
            max="10"
            value="10"
          />
          </Form.Field>
        )}
        <Button color='green' type="submit">Submit</Button>
      </Form>
    </Container>
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
    slices_of_bread: 2,
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
