import { createSlice } from '@reduxjs/toolkit'


export const postsSlice = createSlice({
    name: "posts",
    initialState: [],
    reducers: {
      addPost: (state, action) => {
        //Add Question reducer function
        state = state.push({
            id: action.payload.id,
            title: action.payload.title,
            body: action.payload.body,
        });
      },
      editPost: (state, action) => {
        state = state.map((post) => {
            if (post.id === action.payload.id) {
              return {
                id: action.payload.id,
                title: action.payload.title,
                body: action.payload.body,
              };
            } else {
              return {
                ...post,
              };
            }
        });

        return state;
      },
      removePost: (state, action) => {
        //Remove Post
        state = state.filter((post) => post.id !== action.payload.id);
        return state;
      },
    },
  });

export const { addPost, editPost, removePost } = postsSlice.actions;

export const selectPosts = state => state.posts

export default postsSlice.reducer