import React, {createContext, useReducer} from 'react';
import {postReducer} from '../reducer/postReducer';

// @ts-ignore
export const PostContext = createContext({});

const PostContextProvider = ({children}) => {
  const [posts, dispatch] = useReducer(postReducer, []);
  return (
    <PostContext.Provider value={{posts, dispatch}}>
      {children}
    </PostContext.Provider>
  );
};

export default PostContextProvider;
