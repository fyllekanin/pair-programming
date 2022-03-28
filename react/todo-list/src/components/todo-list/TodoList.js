import TodoTask from '../todo-task/TodoTask';
import { useState } from 'react';

function TodoList() {
    const [tasks, setTasks] = useState([
        { name: 'First Task', isComplete: false },
        { name: 'Second Task', isComplete: false }
    ]);

    const onComplete = task => {
        const item = tasks.find(i => i.name === task);
        item.isComplete = true;

        // Send in the same task list without doing a copy, causing it not to re-render thanks to reference equality
        setTasks([...tasks]);
    };
    
    return (
        <div className="TodoList">
            <div>This is the list</div>
            {tasks.map((item, index) => (<TodoTask key={index} onComplete={onComplete} task={item} />))}
        </div>
    )
}

export default TodoList;