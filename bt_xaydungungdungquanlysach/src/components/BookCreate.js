import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as bookService from "../service/BookService";
import { Field, Form, Formik } from "formik";
import { toast } from "react-toastify";

function BookCreate() {
    const initialValues = {
        title: "",
        quantity: 0
    };

    const navigate = useNavigate();

    const saveBook = async (value) => {
        value.quantity = +value.quantity;
        let isSuccess = await bookService.saveBook(value);
        if (isSuccess) {
            toast.success("Thêm mới thành công");
            navigate("/books");
        } else {
            toast.error("Thêm mới thất bại.");
        }
    };

    return (
        <>
            <div className="container">
                <h1>Thêm mới sách</h1>
                <Formik initialValues={initialValues} onSubmit={saveBook}>
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

                        <div className="d-flex justify-content-between align-items-center">
                            <button type="submit" className="btn btn-primary">Thêm mới</button>
                            <Link className="btn btn-success" to="/books">Trở lại trang chủ</Link>
                        </div>

                    </Form>
                </Formik>
            </div>
        </>
    );
}

export default BookCreate;