import axios from 'axios';



export const getTodos = async () => {
    try {
        const resp = await axios.get('https://jsonplaceholder.typicode.com/todos');
        return resp.data;
    } catch (error) {
        console.error('Lấy danh sách todo thất bại:', error);

    }
};

export const addTodo = async (todo) => {
    try {
        const resp = await axios.post('https://jsonplaceholder.typicode.com/todos', todo);
        return resp.data;
    } catch (error) {
        console.error('Thêm thất bại:', error);
    }
};