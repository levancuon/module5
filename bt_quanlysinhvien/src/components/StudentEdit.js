import React, {useEffect, useState} from "react";
import * as studentService from "../service/StudentService"
import {toast} from "react-toastify";
import {Formik, Field, Form} from "formik";
import {Link, useNavigate, useParams} from "react-router-dom";

function StudentEdit() {
    const {id} = useParams();
    const [student, setStudent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        findStudent();
    }, [id])

    const findStudent = async () => {
        try {
            const data = await studentService.findStudent(id);
            setStudent(data);
        } catch (e) {
            toast.error(" Sách này ko thể sửa")
        }
    }
    const handleSubmit = (id, value) => {
        try {
            let isSuccess = studentService.editStudent(id, value)
            if (isSuccess) {
                toast.success("Cập nhật thành công")
                navigate("/")
            } else {
                toast.error("Cập nhật như đầu bòi")
            }
        } catch (e) {
            toast.error("Cập nhật như đầu bòi")
        }
    }
    if (!student) return <p>Loading...</p>;
    return (
        <div className="container">
            <h1>Sửa thông tin học sinh</h1>
            <Formik initialValues={{name: student.name, age: student.age}}
                    onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <div className="text-start"><label htmlFor="name" className="form-label">Tên</label></div>
                        <div>
                            <Field
                                name="name"
                                type="text"
                                className="form-control w-50"
                                id="name"
                            ></Field>
                        </div>

                    </div>
                    <div className="mb-3">
                        <div className="text-start"><label htmlFor="age" className="form-label">Tuổi</label></div>
                        <div >
                            <Field
                                name="age"
                                type="number"
                                className="form-control w-50"
                                id="age"
                            />
                        </div>

                    </div>
                    <div className="d-flex justify-content-between mt-3">
                        <button type="submit" className="btn btn-primary">Cập nhật</button>
                        <Link className="btn btn-success" to="/">Trở lại</Link>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}

export default StudentEdit;