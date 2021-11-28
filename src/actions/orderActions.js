import axios from 'axios';

const https = 'https://frosty-wood-6558.getsandbox.com/dishes';

// JSON Headers
const config = {
    headers: {
        'Content-Type': 'application/json'
    }
}

export const submitNewOrder = (formData) => {
    const body = JSON.stringify(formData)
    return (dispatch) => {
        return axios
          .post('https://frosty-wood-6558.getsandbox.com/dishes', body, config)
          .then((res) => {
            dispatch(requestSuccess(res.data));
          })
          .catch((err) => {
            console.log(err);
          });
      };
}

const requestSuccess = (payload) => {
    return {
        type: 'REQUEST_SUCCESS',
        payload
    }
}