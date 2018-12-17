const defaultPlayerState = {
  isLoggedIn: false,
  isLoading: false,
  message: null,
};

const player = (state = defaultPlayerState, action) => {
  switch (action.type) {
    case 'FETCH_ACCESS_TOKEN_REQUEST':
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    case 'FETCH_ACCESS_TOKEN_SUCCESS':
      return {
        ...state,
        isLoggedIn: action.payload.isLoggedIn,
        isLoading: action.payload.isLoading,
      };
    case 'FETCH_ACCESS_TOKEN_FAILED':
      return {
        ...state,
        isLoading: action.payload.isLoading,
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default player;
