import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';

let OrderForm = (props) => {
  const { handleSubmit } = props;
  const dish = 'pizza';  // Change this later for state

  // Pizza Extra Fields
  const numberOfSlicesAndDiameter = (
    <Fragment>
      <div>
        <label htmlFor="no_of_slices ">Number of Slices</label>
        <div>
          <Field name="no_of_slices " component="input" type="number" />
        </div>
      </div>
      <div>
        <label htmlFor="diameter">Diameter</label>
        <div>
          <Field
            name="diameter"
            component="input"
            type="range"
            min="20"
            max="50"
            value="50"
            step="5"
          />
        </div>
      </div>
    </Fragment>
  );

  // Soup extra fields
  const spicinessScale = (
    <div>
      <label>Spiciness Scale</label>
      <div>
      <label><Field name="spiciness_scale" component="input" type="radio" value="1"/>1</label>
      <label><Field name="spiciness_scale" component="input" type="radio" value="2"/>2</label>
      <label><Field name="spiciness_scale" component="input" type="radio" value="3"/>3</label>
      <label><Field name="spiciness_scale" component="input" type="radio" value="4"/>4</label>
      <label><Field name="spiciness_scale" component="input" type="radio" value="5"/>5</label>
      <label><Field name="spiciness_scale" component="input" type="radio" value="6"/>6</label>
      <label><Field name="spiciness_scale" component="input" type="radio" value="7"/>7</label>
      <label><Field name="spiciness_scale" component="input" type="radio" value="8"/>8</label>
      <label><Field name="spiciness_scale" component="input" type="radio" value="9"/>9</label>
      <label><Field name="spiciness_scale" component="input" type="radio" value="10"/>10</label>
      </div>
    </div>
  );

  // Sandwich extra fields
  const slicesOfBread = (
    <div>
      <label htmlFor="slices_of_bread ">Slices of bread</label>
      <div>
        <Field
          name="slices_of_bread "
          type="number"
          component="input"
          min="1"
          max="10"
          value="10"
        />
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Dish Name</label>
        <div>
          <Field
            name="name"
            component="input"
            type="text"
            placeholder="Dish Name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="preparation_time">Preparation time </label>
        <div>
          <input 
            type="time" 
            name="preparation_time"
            step="1" 
            min="00:00:00" 
            max="20:00:00"
            ></input>
        </div>
      </div>
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
      <div>
        {(dish === 'pizza' && numberOfSlicesAndDiameter) ||
          (dish === 'soup' && spicinessScale) ||
          (dish === 'sandwich' && slicesOfBread)}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

OrderForm = reduxForm({
  // a unique name for the form
  form: 'order',
})(OrderForm);

export default OrderForm;
