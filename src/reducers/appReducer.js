const initialState = {};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_SUCCESS':
      return {
        ...state,
        ...action.payload,
      };
      case 'REQUEST_ERROR':
        return action.err;
    default:
      return state;
  }
};

export default appReducer;
