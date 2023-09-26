import React, {useState} from 'react';
import TodoForm from './TodoForm';

import {AiFillDelete} from "react-icons/ai";
import {CgEditUnmask} from "react-icons/cg";


function Todo({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ""
    });

    const submitUpdate = value =>{
        updateTodo( edit.id, value)
        setEdit({
            id:null,
            value: ""
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }



    return todos.map((todo, index)=>(
        // checks for true or false
        <div className={todo.isComplete ? "todo-row complete" : "todo-row"} key={index}>

            <div key={todo.id} onClick={()=> completeTodo(todo.id)}>
                {todo.text}
            </div>


            
            <div className="icons" >
            <CgEditUnmask 
        
            onClick={()=> setEdit({id: todo.id, value: todo.text})}
            className="edit-icon"
            />
            <AiFillDelete 
            onClick={()=> removeTodo(todo.id)}
            className="delete-icon"/>
           
            </div>

        </div>
    ))
}

export default Todo
