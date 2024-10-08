import React, {useEffect, useState} from "react";
import * as studentService from "../service/StudentService"
import {Link, NavLink} from "react-router-dom";
import {toast} from "react-toastify";
import { Modal, Button } from 'react-bootstrap';
import * as classervice from "../service/ClassroomService";

function StudentListFunct() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [studentDelete, setStudentDelete] = useState(null)
    const [modal, setModal] = useState(false)
    const [classroomId,setClassroomId] = useState("")

    useEffect(() => {
        getAllStudents(name,classroomId);
    }, [name,classroomId]);

    const [classrooms, setClassrooms] = useState([]);
    useEffect(() => {
        getAllClassrooms();
    }, []);

    const getAllClassrooms = async () => {
        try {
            const res = await classervice.getAllClassrooms();
            setClassrooms(res);
        } catch (error) {
            toast.error("Không thể tải danh sách lớp học.");
        }
    };

    const getAllStudents = async (name,classroomId) => {
        let res = await studentService.getAll(name,classroomId);
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
    const handleChangClass = (e)=>{
        setClassroomId(e.target.value)
    }
    const handleCloseModal = () => {
        setModal(false)
        setStudentDelete(null)
    }
    return (
        <div className="container">
            <div>
                <select className="classroomId form-select mb-2 w-auto " id="classroomId" value={classroomId} onChange={handleChangClass}>
                    <option className="" value="">Chọn lớp học</option>
                    {classrooms.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
                <input className="form-select mb-2" placeholder="Nhập tên tìm kiếm" type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th>Stt</th>
                        <th>Tên</th>
                        <th>Địa chỉ</th>
                        <th>Tuổi</th>
                        <th>Điểm</th>
                        <th>Lớp</th>
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
                                    <td>{items.address}</td>
                                    <td>{items.age}</td>
                                    <td>{items.point}</td>
                                    <td>{items.classroom?.name|| "không có lớp"}</td>

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