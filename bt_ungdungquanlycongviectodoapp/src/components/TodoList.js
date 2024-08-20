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



import { useState, useEffect } from 'react';

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener('resize', handleResize);

        // Cleanup event listener khi component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Chỉ cần chạy một lần khi component mount

    return windowSize;
}

function Component() {
    const size = useWindowSize();

    return (
        <div>
            <h1>Window size:</h1>
            <p>Width: {size.width}</p>
            <p>Height: {size.height}</p>
        </div>
    );
}















