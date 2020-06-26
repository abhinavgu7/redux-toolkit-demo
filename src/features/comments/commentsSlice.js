import { createSlice } from "@reduxjs/toolkit"

export const commentsSlice = createSlice({
  name: "comments",
  initialState: [],
  reducers: {
    addComment: (state, action) => {
      //Add Comment Reducer
      console.log("Action", action);
      state = state.push({
        id: action.payload.id,
        comment: action.payload.comment,
        questionId: action.payload.questionId,
      });
    },
    editComment: (state, action) => {
      //Edit Comment Reducer
      state = state.map((comment) => {
        if (comment.id === action.payload.id) {
          return {
            id: action.payload.id,
            comment: action.payload.comment,
            questionId: action.payload.questionId,
          };
        } else {
          return {
            ...comment,
          };
        }
      });
      return state;
    },
    removeComment: (state, action) => {
      //Remove Comment Reducer
      state = state.filter((comment) => comment.id !== action.payload.id);
      return state;
    },
  },
})

export const { addComment, editComment, removeComment } = commentsSlice.actions

export const comments = state => state.comments

export default commentsSlice.reducer