import { UPLOAD_POST, TOOGLE_POST,REMOVE_POST, ADD_POST } from "./type"

const initialState = {
    allPost: [],
    bookedPost: []
}

export const postReduser = (state=initialState, action)=> {
    switch(action.type) {
        case UPLOAD_POST: return {
            ...state, allPost: action.payload, bookedPost: action.payload.filter(item=> item.booked)
        }
        case TOOGLE_POST:
            const allPosts = state.allPost.map(post=> {
                if(post.id === action.payload) {
                    post.booked= !post.booked
                }
                return post
            })
             return {
            ...state, allPosts, bookedPost: allPosts.filter(post=> post.booked)
        }
        case REMOVE_POST: return {
            ...state, allPost: state.allPost.filter(p=> p.id !== action.payload), bookedPost: state.bookedPost.filter(p=> p.id !== action.payload) 
        }
        case ADD_POST:
            return {
             ...state, allPost: [{...action.payload},...state.allPost]
            }
        default: return state
    }  

}