// reducers
import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
  todos: [{id:'123', task:"demo-task", isDone: false}]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{ //state, action
        addTodo: (state, action) => { //reduer 1 - action will be created by redux
            const newTodo = {
                id: nanoid(),
                task: action.payload,
                isDone: false
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => { //reducer 2
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        markAsDone: (state, action) => { //reducer 3
            const todo = state.todos.find((todo) => todo.id === action.payload);
            if (todo) {
                todo.isDone = true;
            }
        }

    }
})

export const {addTodo, deleteTodo, markAsDone} = todoSlice.actions;
export default todoSlice.reducer;