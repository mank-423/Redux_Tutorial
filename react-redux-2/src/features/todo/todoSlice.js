import { createSlice, nanoid } from '@reduxjs/toolkit'

//This is the initial state in the slice which we will update
const initialState = {
    todos: [{id: 1, text: 'Hello'}],
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
            // state.todos.filter((todo) => 
            //     todo.id !== action.payload
            // )
            const todoIndex = state.todos.findIndex((todo) => todo.id === action.payload);
            if (todoIndex !== -1) {
                state.todos.splice(todoIndex, 1); // Remove the todo at the specified index
            }
        }
    }
})

//We are using this to acess direclty the reducers
// Using useDispatch hook
export const {addTodo, removeTodo} = todoSlice.actions;

//Using useSelector we can access the whole reducer
export default todoSlice.reducer;