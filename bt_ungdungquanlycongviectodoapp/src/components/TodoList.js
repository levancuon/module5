import {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            items: "",
        };
    }


    handleChange = (event) => {
        this.setState({items: event.target.value})
    }

    handleItems = () => {
        if (this.state.items.trim() !== "") {
            this.setState((prevState) => ({
                todoList: [...prevState.todoList, prevState.items],
                items: "",
            }));
        } else {
            alert("Nhập nội dung đi")
        }
    };

    render() {
        return (
            <div className="container ">
                <h1>To do list</h1>
                <div>
                    <input placeholder="Nhập đê"
                           value={this.state.items}
                           onChange={this.handleChange}
                           type="text"/>
                    <button
                        onClick={this.handleItems}>Thêm mới</button>
                </div>
                <div>
                    <ul>
                        {this.state.todoList.map((items,index)=>(
                            <li key={index}>{items}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }



}


export default TodoList;















