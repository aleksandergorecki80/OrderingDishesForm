export const validate = (values) => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 5 || values.name.length > 15) {
    errors.name = 'Must be between 5 and 15 characters.';
  } else if (!/^[a-z ,.'-]+$/i.test(values.name)) {
    errors.name = 'Only letters and digids allowed';
  }

  if (!values.preparation_time) {
    errors.preparation_time = 'Required';
  }

  if (!values.type) {
    errors.type = 'Required';
  }

  if (!values.no_of_slices) {
    errors.no_of_slices = 'Required';
  } else if (isNaN(Number(values.no_of_slices))) {
    errors.no_of_slices = 'Must be a number';
  } else if (
    Number(values.no_of_slices) < 4 ||
    Number(values.no_of_slices) > 10
  ) {
    errors.no_of_slices = 'Number of slices must be between 4 and 10.';
  }

  if (!values.diameter) {
    errors.diameter = 'Required';
  } else if (isNaN(Number(values.diameter))) {
    errors.diameter = 'Must be a number';
  } else if (Number(values.diameter) < 20 || Number(values.diameter) > 50) {
    errors.diameter = 'Pizza diamiter must be between 20 and 50.';
  }

  if (!values.spiciness_scale) {
    errors.spiciness_scale = 'Required';
  }

  if (!values.slices_of_bread) {
    errors.slices_of_bread = 'Required';
  } else if (isNaN(Number(values.slices_of_bread))) {
    errors.slices_of_bread = 'Must be a number';
  } else if (
    Number(values.slices_of_bread) < 1 ||
    Number(values.slices_of_bread) > 10
  ) {
    errors.slices_of_bread = 'The value must be between 1 and 10.';
  }
console.log(errors)
  return errors;
};
