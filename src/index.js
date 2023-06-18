import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App'
import About from './about'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/about" element={<About />} />
        </Routes>
    </Router>
);
