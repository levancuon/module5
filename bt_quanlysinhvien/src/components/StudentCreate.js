import React, {useEffect, useState} from "react";
import * as studentService from "../service/StudentService"
import {toast} from "react-toastify";
import {Formik, ErrorMessage, Field, Form} from "formik";
import {useNavigate} from "react-router-dom";
import * as yup from "yup"

function StudentCreate() {
    const [form, setForm] = useState({
        name: "",
        age: 0
    });

    const navigate = useNavigate();
    const objectValid =  {
        name:yup.string().required("Tên không được để trống").min(3, "ít nhất 3 ký tự"),
        age:yup.number().min(18,"lớn hơn 18 bitch").required("ko đc để trống")
    }
    const saveStudent = async (value) => {
        value.age = +value.age;
        let isSuccess = await studentService.create(value)
        if (isSuccess) {
            toast.success("THêm mới thành công")
            navigate("/")
        } else {
            toast.error("Thêm mới thất bại")
        }

    }

    return (
        <div>
            <Formik initialValues={form} onSubmit={saveStudent} validationSchema={yup.object(objectValid)}>
                <Form>
                    <div className="container p-5 shadow ">
                        <div className="row">
                            <div className="mb-3 col-6 text-end">
                                Name: <Field name="name"/>
                                <ErrorMessage name="name" component="b"></ErrorMessage>
                            </div>

                            <div className="col-6 text-start">
                                Age: <Field name="age"/>
                                <ErrorMessage name="age" component="b"></ErrorMessage>
                            </div>
                        </div>


                        <button type="submit">Thêm mới</button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default StudentCreate;