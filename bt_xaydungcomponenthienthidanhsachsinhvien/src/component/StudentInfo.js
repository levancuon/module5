import {Component} from "react";
import {render} from "@testing-library/react";

// function StudentList(props) {
//
//     console.log(props);
//     return (
//         <h1>Hello: {props.name}</h1>
//     );
// }
// const id = "student"

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student: [
                {
                    id: 1,
                    name: "Cuong",
                    address: "DN",
                    point: 9
                },
                {
                    id: 2,
                    name: "Hoi",
                    address: "Quảng Nam",
                    point: 9
                },
                {
                    id: 3,
                    name: "Nhat",
                    address: "Phu Yen",
                    point: 9
                }

            ]
        };
    }


render(){

    return (
        <div className="container">
            <h1>Danh sach hoc sinh</h1>
            <table>
                <thead>
                <tr>
                    <th scope="col">STT</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Tuổi</th>
                    <th scope="col">Điểm</th>
                </tr>
                </thead>
                <tbody>
                {this.state.student.map((s, index) => (
                    <tr key={s.id}>
                        <td>{index + 1}</td>
                        <td>{s.name}</td>
                        <td>{s.address}</td>
                        <td>{s.point}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}
}
export default StudentList;