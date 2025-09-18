import React, { use, useState } from 'react'
import todo_icon from '../assets/todo_icon.png'
import Todoitems from './Todoitems'
import { useRef } from 'react'

const Todo = () => {

const [todolist, setTodolist]= useState([]);

const inputRef = useRef();

const add =()=>{
    const inputText= inputRef.current.value.trim();
    if(inputText===""){
        return null;
    }
    
    const newTodo ={
        id:Date.now(),// for unique id 
        text:inputText,
        iscomplete:false,
    }

    setTodolist((prev)=>[...prev, newTodo]);
    inputRef.current.value="";// ofr clear input field

}

const deleteTodo =(id)=>{
    setTodolist((prevTodos)=>{
        return prevTodos.filter((Todo) => Todo.id !== id)
    })
}


  return (
 <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        
   {/*------------ title---------*/}
    <div className="flex item-center mt-7 gap-2">
        <img className='w-8' src={todo_icon} alt=""/>
        <h1 className='text-3xl font-semibold'>To-Do-List</h1>
    
    </div>    
     {/*------------Input Box---------*/}
     <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type='text' placeholder='Add your task '/>
        <button onClick={add} className='border-none rounded-full bg-blue-400 w-32 h-14 text-white  text-lg font-medium cursor-pointer'> Add +</button>
    </div>

    {/*------------To-Do-List---------*/}
    <div>
       {todolist.map((item,index)=>{
         return <Todoitems key={index} text={item.text} id={item.id} iscomplete={item.iscomplete}
          deleteTodo={deleteTodo}/>

       })} 
    
    </div>

    

    </div>
  )
}

export default Todo
