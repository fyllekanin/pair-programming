import './TodoPage.css';
import TodoTask from '../../components/todo-task/TodoTask';
import { useState } from 'react';
import AddTask from '../../components/add-task/AddTask';

function TodoPage() {
    const [state, setState] = useState(JSON.parse(localStorage.getItem('tasks')));

    const onComplete = task => {
        const item = state.find(i => i.name === task);
        item.isComplete = true;

        localStorage.setItem('tasks', JSON.stringify(state));
        setState([...state]);
    };

    const onDiscard = task => {
        const tasks = state.filter(item => item.name !== task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        setState(tasks);
    };

    const onAdd = task => {
        state.push({ name: task, isComplete: false });
        localStorage.setItem('tasks', JSON.stringify(state));
        setState([...state]);
    };

    return (
        <div className="TodoPage">
            <AddTask onAdd={onAdd} existingTasks={state.map(task => task.name)}/>
            <div className="task-grid">
                {state.map((item, index) => (
                    <TodoTask key={index} onComplete={onComplete} onDiscard={onDiscard} task={item}/>))}
            </div>
        </div>
    )
}

export default TodoPage;
