export const initialState = {
  checked: true,
  isLoading: false,
  blogs: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'INITIAL_FETCH':
      return {
        ...state,
        isLoading: false,
        blogs: action.payload.blogs,
      };
    case 'BLOG_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'CHANGE_THEME':
      return {
        ...state,
        checked: !state.checked,
      };
    default:
      return state;
  }
};
