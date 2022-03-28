import './TodoTask.css';

function TodoTask(props) {
    const doneButton = props.task.isComplete ? null :
        <button className="done" onClick={() => props.onComplete(props.task.name)}>Done</button>;
    const discardClasses = props.task.isComplete ? 'discard full-button' : 'discard';

    return (
        <div className="TodoTask">
            <div>
                <span>{props.task.name}</span>
            </div>
            {doneButton}
            <button className={discardClasses} onClick={() => props.onDiscard(props.task.name)}>Discard</button>
        </div>
    )
}

export default TodoTask;