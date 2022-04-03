import './TodoPage.css';
import TodoTask from '../../components/todo-task/TodoTask';
import { useState } from 'react';
import AddTask from '../../components/add-task/AddTask';

function TodoPage() {
    const [state, setState] = useState([
        { name: 'First Task', isComplete: false },
        { name: 'Second Task', isComplete: false },
        { name: 'Third Task', isComplete: false }
    ]);

    const onComplete = task => {
        const item = state.find(i => i.name === task);
        item.isComplete = true;

        setState(state);
    };

    const onDiscard = task => {
        const tasks = state.filter(item => item.name !== task);
        setState(tasks);
    };

    const onAdd = task => {
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
