const initialState = {
  isLoading: true
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
      case 'REQUEST_ERROR':
        return action.err;
      case 'RESET_STATE':
          return initialState;
    default:
      return state;
  }
};

export default appReducer;
