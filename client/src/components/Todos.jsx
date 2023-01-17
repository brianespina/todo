import React, {useEffect, useState} from "react";
import axios from "axios";
import Todo from "./Todo";

const Todos =  () => {

    const [todos, setTodos] = useState([]);
    const [todoElements, setTodoElements] = useState([]);

    useEffect(()=>{

        async function fetchTodos(){
            try {
                const allTodos = await axios.get('http://localhost:3080/todos');
                setTodos(allTodos.data)
            } catch (error) {
                console.log(error.message);
            }
        }

        fetchTodos();
        
    }, []);

    useEffect(()=>{
        const todoList = todos.map(todo => <Todo description={todo.description} ID={todo.todo_id} key={todo.todo_id}/>);
        setTodoElements(todoList)
    }, [todos])

    return(
        <>
            {todoElements}
        </>
       
    )
}

export default Todos