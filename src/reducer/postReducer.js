import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export const postReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_POST':
      return [
        ...state,
        {
          title: action.post.title,
          body: action.post.body,
          author: action.post.author,
          id: uuidv4(),
        },
      ];
    case 'REMOVE_POST':
      /**
       * @param {{ id: any; }} post
       */
      return state.filter((post) => post.id !== action.id);
    default:
      state;
  }
};
