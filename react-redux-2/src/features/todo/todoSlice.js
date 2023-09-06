import { createSlice, nanoid } from '@reduxjs/toolkit'

//This is the initial state in the slice which we will update
const initialState = {
    todos: [],
}

//Now creating a slice and exporting it
export const todoSlice = createSlice({
    name: 'todo', //A name for the todo
    initialState, //Giving it the initial state
    
    //Adding reducers to the slice
    //They are like the functions who will take logic
    reducers: {
        addTodo: (state,action) => { 
            const todo = {
                id: nanoid(),
                text: action.payload,
            }

            state.todos.push(todo);
        },

        removeTodo: (state, action) => {
            state.todos.filter((todo) => 
                todo.id != action.payload
            )
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions;

export default todoSlice.reducer;