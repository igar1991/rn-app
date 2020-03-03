import { UPLOAD_POST, TOOGLE_POST, REMOVE_POST } from "../type"
import { DATA } from "../../data"

export const postAction=()=> {
    return {
        type: UPLOAD_POST,
        payload: DATA
    }
}

export const tooggleHandler =(id)=> {
    return {
        type: TOOGLE_POST,
        payload: id
    }
}

export const removePost =(id)=> {
    return {
        type: REMOVE_POST,
        payload: id
    }
}