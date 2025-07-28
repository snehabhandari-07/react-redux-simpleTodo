import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

export default function AddForm(){
    let [task, setTask] = useState("");

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(task);
        dispatch(addTodo(task));
        setTask("");
    }

    const handleChange = (e) => {
        setTask(e.target.value);
    }
    return (
        <>
        <form onSubmit={handleSubmit}>
            <input placeholder="Add a task" value={task} onChange={handleChange}></input>
            <button>Add Task</button>
        </form>
        </>
    )
}