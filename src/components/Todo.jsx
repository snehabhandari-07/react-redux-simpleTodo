import { useSelector } from "react-redux"
import AddForm from "./AddForm";
import { useDispatch } from "react-redux";
import { deleteTodo, markAsDone } from "../features/todo/todoSlice";

export default function Todo(){
    const todos = useSelector((state) => state.todos);

    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    }

    const handleDone = (id) => {
        dispatch(markAsDone(id));
    }
    return(
        <>
        <div className="todo-container">
        <h3>Todo List</h3>
        <hr />
        <AddForm/>
        <hr />
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    <span style={ {textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.task}&nbsp;&nbsp;</span>
                    <button onClick={() => handleDone(todo.id)}>Done</button> &nbsp;&nbsp;
                    <button onClick={() =>handleDelete(todo.id)}>Delete</button>
                    <hr />
                </li>
                
            ))}
        </ul>
        </div>
        </>
    )
}