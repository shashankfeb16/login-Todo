import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, GET_TODOS_ERROR, GET_TODOS_LOADING, GET_TODOS_SUCCESS, UPDATE_TODO } from "./todo.types"

const initialState = {
    loading: false,
    error: false,
    todos: []
}
export const todoReducer = (state=initialState,{type,payload})=>{
    switch(type){
        case GET_TODOS_LOADING:{
            return{...state,
                loading: true
            }
        }
        case GET_TODOS_SUCCESS:{
            return{...state,
                loading:false,
                todos: payload
            }
        }
        case GET_TODOS_ERROR:{
            return{...state,
                loading:false,
                error:true
            }
        }
        case ADD_TODO:{
            return{...state,
                todos:[
                    ...state.todos,
                    {
                        ...payload,
                        // id:state.todos.length,
                        id: Date.now()
                    },
                ],
            }
        }
        case DELETE_TODO:{
            // return state.todos.filter(todo=>todo.id !==payload.id)

            return{...state,todos:[
                ...state.todos,{
                    ...payload.filter(todo=>todo.id !== payload.id)
                }
            ]}
        }
        case COMPLETE_TODO:{
            return{...state}
        }
        case UPDATE_TODO:{
            return{...state}
        }
        default:{
            return state
        }
    }
}