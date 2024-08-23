import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addBook } from '../services/bookService';

function AddBook() {
    const [title, setTitle] = useState('');
    const [quantity, setQuantity] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newBook = { title, quantity };

        try {
            await addBook(newBook);
            alert('Book added successfully');
            navigate('/');
        } catch (error) {
            alert('Failed to add book');
        }
    };

    return (
        <div>
            <h1>Add a new Book</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                    required
                />
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    placeholder="Quantity"
                    required
                />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default AddBook;