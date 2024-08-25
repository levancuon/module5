import React, {useEffect, useState} from "react";
import * as studentService from "../service/StudentService"
import {Link, NavLink} from "react-router-dom";
import {toast} from "react-toastify";
import { Modal, Button } from 'react-bootstrap';

function StudentListFunct() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [studentDelete, setStudentDelete] = useState(null)
    const [modal, setModal] = useState(false)

    useEffect(() => {
        getAllStudents(name);
    }, [name]);



    const getAllStudents = async (name) => {
        let res = await studentService.getAll(name);
        setStudents(res);
    }
    const deleteStudent = (student) => {
        setStudentDelete(student);
        setModal(true);
    }
    const handleDeleteStudent = async () => {
        if (studentDelete) {
            const isSuccess = await studentService.deleteStudent(studentDelete.id)
            if (isSuccess) {
                setStudents(students.filter(s => s.id !== studentDelete.id));
                setModal(false)
                setStudentDelete(null);
                toast.success("Xóa thành công")
            } else {
                toast.error(" Xóa thất bại")
            }
        }
    }
    const handleCloseModal = () => {
        setModal(false)
        setStudentDelete(null)
    }
    return (
        <div className="container">
            <div>
                <input className="form-select" placeholder="Nhập tên tìm kiếm" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Tên</th>
                        <th>Tuổi</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        students.map((items, index) => {
                            return (
                                <tr key={items.id}>
                                    <td>{index + 1}</td>
                                    <td>{items.name}</td>
                                    <td>{items.age}</td>
                                    <td>
                                        <Link className="btn btn-outline-danger"  to={`/editStudent/${items.id}`}>Chỉnh sửa</Link>
                                        <button className="btn btn-outline-danger ms-2" onClick={() => deleteStudent(items)}>Xóa</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </div>
            <Modal show={modal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Xác nhận xóa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Bạn có chắc chắn muốn xóa không ?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Hủy
                    </Button>
                    <Button variant="primary" onClick={handleDeleteStudent}>
                        Xác nhận xóa
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default StudentListFunct;