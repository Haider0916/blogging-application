import uuid from 'react-uuid'

export const initialState = {
    checked:true,
    isLoading: false,
    blogs: [],
    comments: []
}

export const reducer = ( state , action ) => {
    switch(action.type) {
        case 'INITIAL_FETCH':
            return {
                ...state,
                isLoading: false,
                blogs: action.payload.blogs
            }
        case 'BLOG_LOADING':
            return {
                ...state,
                isLoading: true
            }
        case 'ADD_BLOG':         
            return {
                ...state,
                blogs:[...state.blogs,action.payload.newBlog]
            };
        case 'DELETE_BLOG':
            const filteredBlogs = state.blogs.filter(blog => blog.id !== action.payload.id);
            const filteredBlogComments = state.comments.filter(comment => comment.blogID !== action.payload.id);
            return {
                ...state,
                blogs:filteredBlogs,
                comments:filteredBlogComments
            };
        case 'EDIT_BLOG':
            const mappedBlogs = state.blogs.map(blog => blog.id === action.payload.newBlog.id ? action.payload.newBlog : blog);
            return {
                ...state,
                blogs:mappedBlogs
            };
        case 'ADD_COMMENT':
            return {
                ...state,
                comments:[...state.comments,action.payload.newComment]
            };
        case 'DELETE_COMMENT':
            const filteredComments = state.comments.filter(comment => comment.id !== action.payload.id);
            return {
                ...state,
                comments:filteredComments
            };
        case "CHANGE_THEME":
            return {
                ...state,
                checked:!state.checked
            };
        case "COMMENT_HOVERED":
            let comments = state.comments.map(comment => {
                return comment.id === action.payload.commentID
                ? {...comment, hovered:true } 
                : comment
            })
            return {
                ...state,
                comments
            }
        case "COMMENT_UNHOVERED":
            const tempcomments = state.comments.map(comment => {
                return comment.id === action.payload.commentID
                ? {...comment, hovered:false } 
                : comment
            })
            return {
                ...state,
                comments:tempcomments
            }
        default:
            return state;
    }
}