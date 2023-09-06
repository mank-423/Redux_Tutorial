import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice' 

function AddToDo() {
    
    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();

        dispatch(addTodo(input))
        setInput('');
    }
    
    return (
    <div>
        <form onSubmit={addTodoHandler} className='space-x-3 mt-12'>

             {/*Input box  */}
            <input 
                type="text" 
                value={input}
                placeholder='Enter the task'
                onChange={(e) => setInput(e.target.value)}
                className='bg-gray-800 rounded border border-geay-700 focus: border-indigo-500
                focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8
                transition-colours duration-200 ease-in-out' 
            />

            {/* Button for adding the task */}
            <button 
                type="submit"
                className='text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600
                rounded text-lg'
            >
                Add task
            </button>
        </form>  
    </div>
  )
}


export default AddToDo
