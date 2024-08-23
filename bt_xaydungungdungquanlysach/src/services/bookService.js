import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getBooks = async () => {
    try {
        const resp = await axios.get(API_URL);
        return resp.data;
    } catch (error) {
        console.error('Error fetching books:', error);
        throw error;
    }
};

export const addBook = async (book) => {
    try {
        const resp = await axios.post(API_URL, book);
        return resp.data;
    } catch (error) {
        console.error(' Thêm sách thất bại:', error);
        throw error;
    }
};

export const editBook = async (id, updatedBook) => {
    try {
        const resp = await axios.put(`${API_URL}/${id}`, updatedBook);
        return resp.data;
    } catch (error) {
        console.error('Error editing book:', error);
        throw error;
    }
};

export const deleteBook = async (id) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting book:', error);
        throw error;
    }
};