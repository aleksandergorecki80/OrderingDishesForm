import axios from 'axios';

const https = 'https://frosty-wood-6558.getsandbox.com/dishes';

// JSON Headers
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const submitNewOrder = (formData) => {
  const body = JSON.stringify(formData);
  return async (dispatch) => {
    dispatch(startRequest());
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

const startRequest = () => {
  return { type: 'REQUEST_START' }
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

export const resetState = () => {
 return { type: 'RESET_STATE' }
};