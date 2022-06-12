import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {logoutApi} from "../store/auth/auth.actions" 
const Navbar = () => {
  const dispatch = useDispatch();
  const {isAuth} = useSelector((state)=>state.auth);
  const navigate = useNavigate()

  const handleClick = ()=>{
    if(isAuth){
      dispatch(logoutApi());
      navigate("/")
    }
  }
  return (
    <div>
        <Link to="/"></Link>
        <Link to="/todo">Todo</Link>
        <button onClick={handleClick}>{isAuth ? "Logout": "Login"}</button>
    </div>
  )
}

export default Navbar