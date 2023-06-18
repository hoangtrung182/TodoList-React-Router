import React, { useContext } from 'react';
import { ThemeContext } from '../context/Theme';
import { AuthContext } from '../context/Auth';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const { theme } = useContext(ThemeContext);
    const { isAuthenticated, changeAuthen } = useContext(AuthContext);
    const { isLightTheme, light, dark} = theme;

    return (
        <div className="navbar" style={isLightTheme ? light : dark}>
            <h1>My Todo list</h1>
            <ul className="navbar-menu">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <li>
                    <button onClick={changeAuthen}>
                        {
                            isAuthenticated ? 'Logout' : 'Login'
                        }
                    </button>
                </li>
            </ul>
            <p className="welcome">{ isAuthenticated ? 'Hi, My friend' : ''}</p>
        </div>
    )
}

export default Navbar;