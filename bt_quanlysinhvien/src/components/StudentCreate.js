import React, {useEffect, useState} from "react";
import * as studentService from "../service/StudentService"
import {toast} from "react-toastify";
import {Formik, ErrorMessage, Field, Form} from "formik";
import {useNavigate} from "react-router-dom";
import * as yup from "yup"
import * as classeservice from "../service/ClassroomService"

function StudentCreate() {
    const [form, setForm] = useState({
        name: "",
        address: "",
        age: "",
        point: 0,
        classroomId: ""
    });
    const [classrooms, setClassrooms] = useState([]);
    useEffect(() => {
        getAllClassrooms();
    }, []);

    const getAllClassrooms = async () => {
        try {
            const res = await classeservice.getAllClassrooms();
            setClassrooms(res);
        } catch (error) {
            toast.error("Không thể tải danh sách lớp học.");
        }
    };

    const navigate = useNavigate();
    const objectValid = {
        name: yup.string().required("Tên không được để trống").min(3, "ít nhất 3 ký tự"),
        age: yup.number().min(18, "lớn hơn 18 bitch").required("ko đc để trống"),
        address: yup.string().required("Tên không được để trống"),
        point: yup.string().required("Tên không được để trống").min(0, "Điểm ko đc âm bitch"),

    }
    const saveStudent = async (value) => {
        value.age = +value.age;
        let isSuccess = await studentService.create(value)
        if (isSuccess) {
            toast.success("Thêm mới thành công")
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
                                <div className="mb-2">
                                    Tên: <Field name="name"/>
                                    <ErrorMessage name="name" component="b"></ErrorMessage>
                                </div>
                                <div className="mb-2">
                                    Địa chỉ: <Field name="address"/>
                                    <ErrorMessage name="address" component="b"></ErrorMessage>
                                </div>
                                <div className="mb-2">
                                    Tuổi: <Field name="age"/>
                                    <ErrorMessage name="age" component="b"></ErrorMessage>
                                </div>
                                <div className="mb-2">
                                    Điểm: <Field name="point"/>
                                    <ErrorMessage name="point" component="b"></ErrorMessage>
                                </div>
                            </div>

                            <div className="col-6 text-start">
                                <div>
                                    Lớp:
                                    <Field as="select" name="classroomId" className="form-select form-select-sm">
                                        <option value="">Chọn lớp học</option>
                                        {classrooms.map(c => (
                                            <option key={c.id} value={c.id}>{c.name}</option>
                                        ))}
                                    </Field>
                                    <ErrorMessage name="point" component="b"></ErrorMessage>
                                </div>


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