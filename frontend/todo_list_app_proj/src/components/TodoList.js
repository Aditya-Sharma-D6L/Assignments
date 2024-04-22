import React, { useState } from 'react'

const TodoList = () => {

    const [todos, setTodos] = useState([
        {id: 1, text: 'Learn react'},
        {id: 2, text: 'Build a project'}
    ]);

    const addTodo = (text) => {
        const newTodo = {id: todos.length + 1, text}
        setTodos([...todos, newTodo])
    }

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const updateTodo = (id, newText) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo))
    }

  return (
    <div>
     <h2>Todo List</h2> 
     <ul>
        {todos.map(todo => (
            <li key={todo.id}>
                {todo.text}
                <input type="text" defaultValue={todo.text} /> {/* Added input field */}
                <button onClick={ () => deleteTodo(todo.id) } >Delete</button>
                <button onClick={ () => {
                    const newText = document.querySelector(`#update-input-${todo.id}`)
                    updateTodo(todo.id, newText) 
                }} >Update</button>
            </li>
        ))}
     </ul>
     <AddTodoForm addTodo={addTodo} />
    </div>
  )
}

const AddTodoForm = ({ addTodo }) => {
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!text.trim()) return;
        addTodo(text);
        setText('');
    };

    return(
        <form onSubmit={handleSubmit}>
            <input type='text' value={text} onChange={ (e) => setText(e.target.value)} />
            <button type="submit">Add Todo</button>
        </form>
    )
}

export default TodoList
