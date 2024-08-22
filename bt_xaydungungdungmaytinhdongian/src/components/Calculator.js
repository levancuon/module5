import React, {Component, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";

function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState(null);

    const add = () => {
        setResult(parseInt(num1) + parseInt(num2))
    }
    const minus = () => {
        setResult(parseInt(num1) - parseInt(num2))
    }
    const divide = () => {
        setResult(parseInt(num1) / parseInt(num2))
    }
    const multiplication = () => {
        setResult(parseInt(num1) * parseInt(num2))
    }
    return (
        <div className="container me-5 mt-5 ms-5 shadow">
            <div className="text-center ">
                <h1>Máy tính đơn giản</h1>
                <div>
                    <input type="text"
                           value={num1}
                           onChange={(e) => setNum1(e.target.value)}
                           placeholder="Nhập số"/>
                </div>
                <div>
                    <input type="text"
                           value={num2}
                           onChange={(e) => setNum2(e.target.value)}
                           placeholder="Nhập số"/>
                </div>
                <div>
                    <p>Kết quả : {result}</p>
                </div>
                <div>
                    <button onClick={add}>+</button>
                    <button onClick={minus}>-</button>
                    <button onClick={multiplication}>x</button>
                    <button onClick={divide}>/</button>
                </div>
            </div>
        </div>
    )

}

export default Calculator;