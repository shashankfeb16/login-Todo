import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom';
import { loginApi } from '../store/auth/auth.actions';

const Login = () => {

    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate()
    const {isAuth} = useSelector((state)=>state.auth)

    const [loginCred,setLoginCred] = useState({
        email: "eve.holt@reqres.in",
        password: "cityslicka"
    })

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setLoginCred({
            ...loginCred,
            [name]: value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(loginApi(loginCred))
    }

    useEffect(()=>{
        if(isAuth){
            navigate("/todo", { replace: true })
        }
    },[navigate,isAuth])


    return (
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input  name="email" type="email" placeholder="Enter Email" value={loginCred.email} onChange={handleChange} />
                <input type="password" name='password' placeholder='EnterPassword' value={loginCred.password} onChange={handleChange} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Login