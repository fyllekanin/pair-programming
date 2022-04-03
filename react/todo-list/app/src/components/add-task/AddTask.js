import './AddTask.css';
import { useState } from 'react';

function AddTask(props) {
    const [state, setState] = useState({ value: '', isError: false });
    const error = state.isError ? <div className="error">The task {state.value} already exists</div> : '';

    const onAdd = evt => {
        evt.preventDefault();
        if (props.existingTasks.includes(state.value)) {
            setState({ value: state.value, isError: true });
            return;
        }
        props.onAdd(state.value);
        setState({ value: '', isError: false });
    };

    return (
        <div className="AddTask">
            {error}
            <form onSubmit={onAdd}>
                <input type="text" placeholder="Add new task..." id="add-task-input" value={state.value}
                       onChange={evt => setState({ value: evt.target.value, isError: state.isError })}/>
                <button type="submit" onClick={onAdd}>Add</button>
            </form>
        </div>
    )
}

export default AddTask;
