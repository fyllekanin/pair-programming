import './TodoList.css';
import TodoTask from '../todo-task/TodoTask';
import { useState } from 'react';
import AddTask from "../add-task/AddTask";

const initialList = [
    { name: 'First Task', isComplete: false },
    { name: 'Second Task', isComplete: false },
    { name: 'Third Task', isComplete: false }
];

function TodoList() {
    const [state, setState] = useState(initialList);

    const onComplete = task => {
        const item = state.find(i => i.name === task);
        item.isComplete = true;

        setState([...state]);
    };

    const onDiscard = task => {
        setState(state.filter(item => item.name !== task));
    };

    const onAdd = task => {
        state.push({ name: task, isComplete: false });
        setState([...state]);
    };

    return (
        <div className="TodoList">
            <AddTask onAdd={onAdd} existingTasks={state.map(task => task.name)}/>
            <div className="task-grid">
                {state.map((item, index) => (
                    <TodoTask key={index} onComplete={onComplete} onDiscard={onDiscard} task={item}/>))}
            </div>
        </div>
    )
}

export default TodoList;