import axios from "axios";
import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS, UPDATE_TODO } from "./todo.types"

export const getTodo = (dispatch)=>{
    dispatch({type:GET_TODOS_LOADING});
    axios.get("http://localhost:8080/todos").then((res)=>{
        dispatch({type:GET_TODOS_SUCCESS,payload:res.data})
    }).catch(()=>{
        dispatch({type:GET_TODOS_ERROR})
    })
}

export const todoAdd = (dispatch,payload)=>{
    axios.post("http://localhost:8080/todos",payload).then((res)=>{
        dispatch({type:ADD_TODO,payload:res.data})
    })
}
export const todoRemove = (id)=>{
    return {type:DELETE_TODO,payload: id};
}
export const todoComplete = (id)=>{
    return{type:COMPLETE_TODO,payload:id}
}
export const todoUpdate = (payload)=>{
    return {type:UPDATE_TODO,payload}
} 
