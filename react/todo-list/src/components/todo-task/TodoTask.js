import './TodoTask.css';
import { useState } from "react";

function TodoTask(props) {
    const [state, setState] = useState({ isInitial: true });
    if (state.isInitial) {
        setTimeout(() => {
            setState({ isInitial: false });
        }, 200);
    }

    const doneButton = props.task.isComplete ? null :
        <button className="done" onClick={() => props.onComplete(props.task.name)}>Done</button>;
    const discardClasses = props.task.isComplete ? 'discard full-button' : 'discard';
    const mainClasses = `TodoTask${state.isInitial ? ' hidden' : ''}`;

    return (
        <div className={mainClasses}>
            <div>
                <span>{props.task.name}</span>
            </div>
            {doneButton}
            <button className={discardClasses} onClick={() => props.onDiscard(props.task.name)}>Discard</button>
        </div>
    )
}

export default TodoTask;