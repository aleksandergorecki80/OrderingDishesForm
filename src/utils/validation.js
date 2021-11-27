export const validate = values => {
    const errors = {}
    if (!values.name) {
      errors.name = 'Required'
    } else if (values.name.length < 5 || values.name.length > 15) {
      errors.name = 'Must be between 5 and 15 characters.'
    } else if (!/^[a-z ,.'-]+$/i.test(values.name)) {
        errors.name = 'Only letters and digids allowed'
      }
  
    return errors
  }