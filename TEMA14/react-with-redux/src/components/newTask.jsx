import React from 'react';
import { store } from '../store/store';

const NewTask = () => {
    
    const addTask = (event) => {
        event.preventDefault();
        const {target} = event;
        const name = target.taskName.value;
        const description = target.taskDescription.value;
        const priority = target.taskPriority.value;
        target.taskName.value = '';
        target.taskDescription.value = '';
        target.taskPriority.value = '';
        store.dispatch({
            type: 'CHARGE_TASK',
            payload: {
                name,
                description,
                priority
            }
        })
    }
    
    return (
        <div class = 'container mt-3'>
            <form onSubmit={addTask}>
                <div class="mb-3">
                    <label for="taskName" class="form-label"><h5>Task Name:</h5></label>
                    <input type="text" class="form-control" id="taskName" name='taskName' placeholder="..."/>
                </div>
                <div class="mb-3">
                    <label for="taskDescription" class="form-label"><h5>Task Description</h5></label>
                    <textarea class="form-control" id="taskDescription" name='taskDescription' rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <select class="form-select" aria-label="Default select example" name='taskPriority'>
                        <option selected>Priority</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                    </select>
                </div>
                <div class="mb-3">
                    <button class="btn btn-dark" type="submit">Add Task</button>
                </div>
            </form>
        </div>
    );
}

export default NewTask;
