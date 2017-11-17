const INIT_COMMENTS = 'INIT_COMMENTS';
const ADD_COMMENT = 'ADD_COMMENT';
const DEL_COMMENT = 'DEL_COMMENT';
export const initComments = (comments) => {
  return {
    type: INIT_COMMENTS,
    comments
  }
}
export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}
export const delComment = (index) => {
  return {
    type: DEL_COMMENT,
    index
  }
}
export default (state, action) => {
  if (!state) {
    state = {
      comments: []
    }
  }

  switch (action.type) {
    case INIT_COMMENTS:
      return {comments: action.comments};
      break;

    case ADD_COMMENT:
      return {
        comments: [
          ...state.comments,
          action.comment
        ]
      };
      break;

    case DEL_COMMENT:
      return {
        comments: [
          ...state.comments.slice(0, action.index),
          ...state.comments.slice(action.index + 1)
        ]
      };
      break;

    default:
      return state;
      break;
  }
}