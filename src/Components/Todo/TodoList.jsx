import React, { useState } from "react"
import Styles from './TodoList.module.css'
function TodoList() {
    const [tasks, setTasks] = useState(["Go to work", "Eat launch", "Take a shower"])
    const [newTask, setNewTask] = useState("")

    function handleInputChange(event) {
        setNewTask(event.target.value)
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(t => [...tasks, newTask])
        }
    }
    function removeTask(index) {
        setTasks(tasks.filter((_, i) => i !== index))
    }

    function moveUp(index) {
        if (index > 0) {
            let updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] =
                [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    function moveDown(index) {
        if (index < tasks.length - 1) {
            let updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] =
                [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return (
        <>
            <div className={Styles.cont}>
                <div className={Styles.todo_cont}>
                    <h2>To-Do List</h2>
                    <input type="text" value={newTask} onChange={handleInputChange} placeholder='Enter a task...' />
                    <button className={Styles.add} onClick={addTask}>Add</button>

                    <ol className={Styles.ol}>
                        {tasks.map((task, index) => <li key={index} className={Styles.li}>
                            <span className={Styles.text}>{task}</span>

                            <button className={Styles.delete} onClick={() => removeTask(index)}>Delete</button>
                            <button className={Styles.move} onClick={() => moveUp(index)}>Up</button>
                            <button className={Styles.move} onClick={() => moveDown(index)}>Down</button>
                        </li>)}
                    </ol>
                </div>
            </div>
        </>


    )
}
export default TodoList