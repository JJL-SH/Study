function makeActionCreator(type, ...argNames) {
  return function (...args) {
    let action = { type }

    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    })

    return action;
  }
}

const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';
const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';

const loadPostsSuccess = makeActionCreator(LOAD_POSTS_SUCCESS, 'userID', 'response');
const loadPostsFailure = makeActionCreator(LOAD_POSTS_FAILURE, 'userID', 'error');
const loadPostsRequest = makeActionCreator(LOAD_POSTS_REQUEST, 'id');

export function loadPosts(userId) {
  return function (dispatch, getState) {
    let { posts } = getState();

    if (posts[userId]) {
      return;
    }

    dispatch(loadPostsRequest(userId));

    fetch(`http://myapi.com/users/${userId}/posts`).then(
      (response) => {
        loadPostsSuccess(userId, response);
      },
      (error) => {
        loadPostsFailure(userId, error);
      }
    )
  }
}