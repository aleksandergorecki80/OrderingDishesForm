import axios from 'axios';

const https = 'https://frosty-wood-6558.getsandbox.com/dishes';

// JSON Headers
const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const submitNewOrder = (formData) => {
  // const body = JSON.stringify(formData)
  const body = JSON.stringify({
    name: '',
  });
  return async (dispatch) => {
    try {
      const res = await axios.post(https, body, config);
      dispatch(requestSuccess(res.data));
    } catch (error) {
      dispatch(requestError(error.response.data));
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
    console.log(err)
  return {
    type: 'REQUEST_ERROR',
    err,
  };
};
