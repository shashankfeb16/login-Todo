import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./auth.types"
import axios from "axios"
export const loginApi = (data)=> (dispatch)=>{
    dispatch({type:LOGIN_LOADING});
    axios.post("https://reqres.in/api/login",{
        email: data.email,
        password: data.password
    }).then((res)=>{
        dispatch({type:LOGIN_SUCCESS,payload:res.data})

    }).catch(()=>{

        dispatch({type:LOGIN_ERROR})
    })
}
export const logoutApi = ()=> ({type: LOGOUT})