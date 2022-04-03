import './App.css';
import React from 'react';
import TodoPage from './pages/todo-list/TodoPage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import SettingsPage from './pages/settings/SettingsPage';

function App() {
    return (
        <div className="App">
            <h2>Todo List</h2>
            <BrowserRouter>
                <nav>
                    <Link to="/">Todo</Link>
                    <Link to="/settings">Settings</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<TodoPage/>}></Route>
                    <Route path="/settings"
                           element={<SettingsPage/>}>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
