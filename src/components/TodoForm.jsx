import React, { useContext } from 'react';
import { TodosContext } from '../context/Todos';

const TodoForm = () => {
    const { title, handleSubmit, handleChange } = useContext(TodosContext);
    
    return (
        <form className="form-add" onSubmit={handleSubmit}>
            <input 
                placeholder="Enter your todos " 
                onChange={handleChange} 
                value={title}
                required 
            />
            <button>Add</button> 
        </form>
    )
}

export default TodoForm;