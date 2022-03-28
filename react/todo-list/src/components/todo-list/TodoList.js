import './TodoList.css';
import TodoTask from '../todo-task/TodoTask';
import { useState } from 'react';
import AddTask from "../add-task/AddTask";

const initialList = [
    {name: 'First Task', isComplete: false},
    {name: 'Second Task', isComplete: false},
    {name: 'Third Task', isComplete: false}
];

function TodoList() {
    const [tasks, setTasks] = useState(initialList);

    const onComplete = task => {
        const item = tasks.find(i => i.name === task);
        item.isComplete = true;

        setTasks([...tasks]);
    };

    const onDiscard = task => {
        setTasks(tasks.filter(item => item.name !== task));
    };

    const onAdd = task => {
        tasks.push({name: task, isComplete: false});
        setTasks([...tasks]);
    };

    return (
        <div className="TodoList">
            <AddTask onAdd={onAdd} existingTasks={tasks.map(task => task.name)}/>
            <div className="task-grid">
                {tasks.map((item, index) => (
                    <TodoTask key={index} onComplete={onComplete} onDiscard={onDiscard} task={item}/>))}
            </div>
        </div>
    )
}

export default TodoList;