import React, { useState, useEffect } from 'react';
import { getTodos, addTodo } from '../services/TodoListService';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        showTodos();
    }, []);

    const showTodos = async () => {
        try {
            const todosData = await getTodos();
            setTodos(todosData);
        } catch (error) {
            console.error('Lấy danh sách thất bại:', error);
        }
    };

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newTodoData = await addTodo({ title: newTodo, completed: false });
            alert('Thêm thành công');
            setTodos([newTodoData, ...todos]);
            setNewTodo('');
        } catch (error) {
            alert('Thêm thất bại');
        }
    };

    return (
        <div>
            <h1>Danh sách todo</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={newTodo}
                    onChange={handleInputChange}
                    placeholder="Enter new todo"
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {todos.map(todo => (
                    <li >{todo.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;