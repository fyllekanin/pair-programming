import './TodoTask.css';

function TodoTask(props) {
    return (
        <div className="TodoTask">
            <span>{props.task.name} {props.task.isComplete ? 'Done' : 'Todo'}</span>
            <button onClick={() => props.onComplete(props.task.name)}>GG</button>
        </div>
    )
}

export default TodoTask;