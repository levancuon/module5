import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as bookService from "../service/BookService";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {toast} from "react-toastify";

function BookManager() {
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [bookToDelete, setBookToDelete] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        getAllBookList();
    }, []);

    const getAllBookList = async () => {
        let res = await bookService.getAllBookList();
        setBooks(res);
    };

    const handleDeleteClick = (book) => {
        setBookToDelete(book);
        setShowModal(true);
    };

    const handleConfirmDelete = async () => {
        if (bookToDelete) {
            const isSuccess = await bookService.deleteBook(bookToDelete.id);
            if (isSuccess) {
                setBooks(books.filter(b => b.id !== bookToDelete.id));
                setShowModal(false);
                setBookToDelete(null);
                toast.success("Xóa thành công")
            } else {
                toast.error("Xóa thất bại!!!")
            }
        }
    };

    const handleCloseModal = () => {
        setShowModal(false);
        setBookToDelete(null);
    };

    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center">
                <h1>Quản lý thư viện</h1>
                <Link className="btn btn-success" to="/create">Thêm mới</Link>
            </div>
            <table className="table table-striped mt-4">
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Title</th>
                    <th>Quantity</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {books.map((book, index) =>
                    <tr key={book.id}>
                        <td>{index + 1}</td>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <Link className="btn btn-warning me-3" to={`/editBook/${book.id}`}>Chỉnh sửa</Link>
                            <Button className="btn btn-danger" onClick={() => handleDeleteClick(book)}>Xóa</Button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa sách có tên là : <strong>{bookToDelete?.title}</strong>?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleConfirmDelete}>
                        Xác nhận xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default BookManager;