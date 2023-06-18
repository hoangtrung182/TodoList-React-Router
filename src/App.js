import React from 'react';
import './styles.css';
import Navbar from './components/Navbar';
import TodosList from './components/TodosList';
import ThemeContextProvider from './context/Theme';
import TodosContextProvider from './context/Todos';
import AuthContextProvider from './context/Auth';

const App = () => {
    return (
        <div className="app">
            <div className="wrapper">
                <ThemeContextProvider>
                    <AuthContextProvider>
                        <Navbar />
                        <TodosContextProvider>
                            <TodosList />
                        </TodosContextProvider>
                    </AuthContextProvider>
                </ThemeContextProvider>
            </div>
        </div>
    )
}

export default App;