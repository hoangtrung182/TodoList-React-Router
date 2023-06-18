import { useContext } from 'react';
import { ThemeContext } from '../context/Theme';

const TodoItem = ({ todo, removeTodo }) => {
    const { theme } = useContext(ThemeContext);
    const { isLightTheme, light, dark} = theme;
    return (
        <li 
            className="item" 
            style={isLightTheme ? light : dark} 
            onClick={removeTodo.bind(this, todo.id)}
        >
            {todo.name}
        </li>
    )
}

export default TodoItem;