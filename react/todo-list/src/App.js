import './App.css';
import React from 'react';
import TodoPage from './pages/todo-list/TodoPage';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

const SettingsPage = React.lazy(() => import('./pages/settings/SettingsPage'));

function App() {
    localStorage.setItem('tasks', JSON.stringify([
        { name: 'First Task', isComplete: false },
        { name: 'Second Task', isComplete: false },
        { name: 'Third Task', isComplete: false }
    ]));

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
                           element={
                               <React.Suspense fallback={<div></div>}>
                                   <SettingsPage/>
                               </React.Suspense>
                           }>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;
