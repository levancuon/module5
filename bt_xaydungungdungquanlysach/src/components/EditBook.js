import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBooks, editBook } from '../services/bookService';

function EditBook() {
    const { id } = useParams();
    const [book, setBook] = useState({ title: '', quantity: 1 });
    const navigate = useNavigate();

    useEffect(() => {
        loadBook();
    }, []);

    const loadBook = async () => {
        try {
            const data = await getBooks();
            const book = data.find((b) => b.id === parseInt(id));
            if (book) {
                setBook(book);
            }
        } catch (error) {
            console.error('Error loading book:', error);
        }
    };

    const handleChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await editBook(id, book);
            alert('Book updated successfully');
            navigate('/');
        } catch (error) {
            alert('Failed to update book');
        }
    };

    return (
        <div>
            <h1>Edit Book</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={book.title}
                    onChange={handleChange}
                    placeholder="Title"
                    required
                />
                <input
                    type="number"
                    name="quantity"
                    value={book.quantity}
                    onChange={handleChange}
                    placeholder="Quantity"
                    required
                />
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditBook;