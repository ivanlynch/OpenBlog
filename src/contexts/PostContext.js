import React, {createContext, useReducer} from 'react';

import {postReducer} from '../reducer/postReducer';

export const PostContext = createContext();

const PostContextProvider = (props) => {
  const [posts, setPosts] = useReducer(postReducer, []);
  return (
    <PostContextProvider.Provider value={{posts, addPost, removePost}}>
      {props.chilren}
      <Button />
    </PostContextProvider.Provider>
  );
};

export default PostContextProvider;
