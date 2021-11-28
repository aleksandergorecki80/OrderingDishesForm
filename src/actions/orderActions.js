import axios from 'axios';

const https = 'https://frosty-wood-6558.getsandbox.com/dishes';
// const https = 'https://frosty-wood-6558.getsandbox.com/dishes1';

// JSON Headers
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const submitNewOrder = (formData) => {
  const body = JSON.stringify(formData);
  return async (dispatch) => {
    try {
      const res = await axios.post(https, body, config);
      dispatch(requestSuccess(res.data));
    } catch (error) {
      if(error.response) {
        dispatch(requestError(error.response.data));
      }
      console.log(error)
    }
  };
};

const requestSuccess = (payload) => {
  return {
    type: 'REQUEST_SUCCESS',
    payload,
  };
};

const requestError = (err) => {
  return {
    type: 'REQUEST_ERROR',
    err,
  };
};
