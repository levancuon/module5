import { useEffect, useState } from "react";
import {useParams, useNavigate, Link} from "react-router-dom";
import * as bookService from "../service/BookService";
import { Formik, Field, Form } from "formik";
import { toast } from "react-toastify";


function BookEdit() {
    const { id } = useParams();
    const [book, setBook] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        findBook();
    }, [id]);

    const findBook = async () => {
        try {
            const data = await bookService.getBookById(id);
            setBook(data);
        } catch (error) {
            toast.error("Không thể tải dữ liệu sách.");
        }
    };

    const handleSubmit = async (value) => {
        try {
            const isSuccess = await bookService.editBook(id, value);
            if (isSuccess) {
                toast.success("Cập nhật thành công");
                navigate("/books");
            } else {
                toast.error("Cập nhật thất bại");
            }
        } catch (error) {
            toast.error("Lỗi khi cập nhật sách");
        }
    };

    if (!book) return <p>Loading...</p>;

    return (
        <div className="container">
            <h1>Sửa sách</h1>
            <Formik
                initialValues={{ title: book.title, quantity: book.quantity }}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <Field
                            name="title"
                            type="text"
                            className="form-control w-50"
                            id="title"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="quantity" className="form-label">Quantity</label>
                        <Field
                            name="quantity"
                            type="number"
                            className="form-control w-50"
                            id="quantity"
                        />
                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <button type="submit" className="btn btn-primary">Cập nhật</button>
                        <Link className="btn btn-success" to="/books">Trở lại</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default BookEdit;