import './App.css';
import React from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import StudentListFunc from "./components/StudentListFunct"
import {ToastContainer} from "react-toastify";
import StudentCreate from "./components/StudentCreate";
import StudentEdit from "./components/StudentEdit";

function App() {
    return (

            <div className="App container shadow p-2 mt-5 ">
                <BrowserRouter className=" container">
                    <div className="container d-flex justify-content-between mb-3 mt-5">
                        <h2>Quản lý học sinh</h2>
                        <div className="d-flex text-end">
                            <NavLink to="/" className="btn btn-primary ">Danh sách</NavLink>
                            <NavLink to="/create" className="btn btn-primary ms-1">Thêm mới</NavLink>
                        </div>
                    </div>
                    <div>
                        <Routes>
                            <Route path="/" element={<StudentListFunc/>}></Route>
                            <Route path="/create" element={<StudentCreate/>}></Route>
                            <Route path="/editStudent/:id" element={<StudentEdit/>}/>
                        </Routes>
                    </div>
                </BrowserRouter>
                <ToastContainer></ToastContainer>
            </div>

    );
}

export default App;
