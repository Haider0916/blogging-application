import uuid from 'react-uuid'

export const initialState = {
    checked:true,
    blogs: [
        {
            id:uuid(),
            title:'Title 1',
            author:'User 1',
            body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged',
        },
        {
            id:uuid(),
            title:'Title 2',
            author:'User 2',
            body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged'
        },
        {
            id:uuid(),
            title:'Title 3',
            author:'User 3',
            body:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book speci.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book speci. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book speci.'
        },
    ],
    comments: []
}

export const reducer = ( state , action ) => {
    switch(action.type) {
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