import {useState} from "react";


function Counter() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);

    const handleCounter1 = () => {
        setValue1(value1 => value1 + 1)
    }
    const handleCounter2 = () => {
        setValue2(value2 => value2 + 1)
    }

    return (
        <div>
            <div>
                <h1>Count : {value1}</h1>
                <button onClick={handleCounter1}>add 1</button>
            </div>
            <div>
                <h1>Count : {value2}</h1>
                <button onClick={handleCounter2}>add 2</button>
            </div>
        </div>
    )
}
export default Counter;