import React, { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const TodosContext = createContext(); // Used in useContext(TodosContext)

const TodosContextProvider = ({ children }) => {
    //State
    const [todos, setTodos] = useState([]);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('todos'));
        if(data) setTodos(data);
    }, [])

    useEffect(() => {
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])


    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    // For this.form
    const handleSubmit = (event) => {
        event.preventDefault();
        const todo = {
            id: uuidv4(),
            name: title,
            isComplete: false
        }
        addTodo(todo);
        setTitle('')
    }

    const handleChange = (event) => {
        setTitle(event.target.value)
    }

    // Data context 
    const TodosContextData = {
        todos,
        title,
        addTodo,
        removeTodo,
        handleSubmit,
        handleChange
    }
 
    return (
        <TodosContext.Provider value={TodosContextData}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider;