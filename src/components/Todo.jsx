import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getTodo, todoAdd } from '../store/Todo/todo.actions';

const Todo = () => {
    const ref = useRef();
    const dispatch = useDispatch();
    const {todos} = useSelector((state)=>state.todo)

    const addNew = ()=>{
        let value = ref.current.value;
        todoAdd(dispatch,{
            value: value,
            isComplete:false
        })
    }
    useEffect(()=>{
        getTodo(dispatch)
    },[])
  return (
    <div>
        <h1>Todo App</h1>
        <div>
            <input type="text" placeholder='Enter Todo' ref={ref} />
            <button onClick={addNew}>Add</button>
        </div>
        {todos.map((todo)=>{
            return <div key={todo.id}>{todo.value}</div>
        })}
    </div>
  )
}

export default Todo