import {useState} from "react";


function counter() {
    const [counter, setCounter] = useState(0);
    const [value, setValue] = useState(0);

    const handleCounter = () => {
        setCounter(prev => prev + 1)
    }
    const handleValue = () => {
        setValue(prev => prev + 1)
    }

    return (
        <div>
            <div>
                <h1>Count : {counter}</h1>
                <button onClick={handleCounter}>add 1</button>
            </div>
            <div>
                <h1>Count : {value}</h1>
                <button onClick={handleValue}>add 2</button>
            </div>
        </div>
    )
}
export default counter;