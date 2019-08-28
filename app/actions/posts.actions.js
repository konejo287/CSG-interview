import ThunkHelper from '../utilities/thunkHelper';
const API_URL = 'http://localhost:3004';

export const SAVE_POST = 'SAVE_POST';

export const RETRIEVE_POSTS = {
    BEGIN: 'RETRIEVE_POSTS_BEGIN',
    SUCCESS: 'RETRIEVE_POSTS_SUCCESS',
    FAILURE: 'RETRIEVE_POSTS_FAILURE'
};

const RETRIEVE_POSTS_EVENTS = [
    RETRIEVE_POSTS.BEGIN,
    RETRIEVE_POSTS.SUCCESS,
    RETRIEVE_POSTS.FAILURE
];

export const retrievePosts = () => {
    return dispatch => {
        return ThunkHelper(dispatch, RETRIEVE_POSTS_EVENTS, {
            method: 'get',
            url: `${API_URL}/posts`
        });
    }
};

export const savePost = (name, author) => {
    return {
        type: SAVE_POST,
        payload: {
            title: name,
            author: author
        }
    }
};