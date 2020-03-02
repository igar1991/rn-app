import { UPLOAD_POST, TOOGLE_POST } from "./type"

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
        default: return state
    }  

}