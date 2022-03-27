const initialState = {
  isLoading: false,
  error: false
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_START':
      return {
        ...state,
        isLoading: true
      }

    case 'REQUEST_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      };
      case 'REQUEST_ERROR':
        return {
          isLoading: false,
          error: true,
          ...action.err
        };
      case 'RESET_STATE':
          return initialState;
    default:
      return state;
  }
};

export default appReducer;
