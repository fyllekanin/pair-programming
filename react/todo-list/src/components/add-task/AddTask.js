import './AddTask.css';
import { useState } from "react";

function AddTask(props) {
    const [setting, setValue] = useState({value: '', isError: false});
    const error = setting.isError ? <div className="error">The task {setting.value} already exists</div> : '';
    const onAdd = () => {
        if (props.existingTasks.includes(setting.value)) {
            setValue({value: setting.value, isError: true});
            return;
        }
        props.onAdd(setting.value);
        setValue({value: '', isError: false});
    };

    return (
        <div className="AddTask">
            {error}
            <input type="text" placeholder="Add new task..." id="add-task-input" value={setting.value}
                   onChange={evt => setValue({value: evt.target.value, isError: setting.isError})}/>
            <button onClick={onAdd}>Add</button>
        </div>
    )
}

export default AddTask;