import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { ThemeContext } from '../context/Theme';
import { TodosContext } from '../context/Todos';
import { AuthContext } from '../context/Auth';

const TodosList = () => {
    const { changeTheme } = useContext(ThemeContext);
    const { isAuthenticated } = useContext(AuthContext);
    const {todos, addTodo, removeTodo } = useContext(TodosContext);


    if(isAuthenticated) {
        return (
            <div className="container">
                <TodoForm addTodo={addTodo} />
                { 
                    todos.length > 0 && (
                        <ul className="list-todo">
                            { todos.map((todo) => {
                                return <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} />
                            })}
                        </ul>)
                 }
                 {
                    todos.length <= 0 && (
                        <div className="empty">Todos is not available</div>
                    )
                 }
                 <button onClick={changeTheme} className="btn-theme">Switch Theme</button>
            </div>
        )    
    } else {
        return (
            <div className="container">
                <p className="lobby-waiting">
                    You're not loggin
                </p>
            </div>
        )
    }
    
}

export default TodosList;