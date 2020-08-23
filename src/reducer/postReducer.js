import uuid from 'uuid';
export const postReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {title: action.post.title, author: action.post.author, id: uuid()},
      ];
    case 'REMOVE_POST':
      return state.filter((post) => post.id !== action.id);
    default:
      state;
  }
};
