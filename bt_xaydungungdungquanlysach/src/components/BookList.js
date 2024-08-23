import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getBooks, deleteBook } from '../services/bookService';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks();
    }, []);

    const loadBooks = async () => {
        try {
            const data = await getBooks();
            setBooks(data);
        } catch (error) {
            console.error('Error loading books:', error);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this book?')) {
            try {
                await deleteBook(id);
                alert('Book deleted successfully');
                loadBooks(); // Reload the books after deletion
            } catch (error) {
                alert('Failed to delete book');
            }
        }
    };

    return (
        <div>
            <h1>Library</h1>
            <Link to="/add">
                <button>Add a new Book</button>
            </Link>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        {book.title} - Quantity: {book.quantity || 1}
                        <Link to={`/edit/${book.id}`}>
                            <button>Edit</button>
                        </Link>
                        <button onClick={() => handleDelete(book.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default BookList;