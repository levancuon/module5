import {useState,useEffect} from "react";

function Selector(){
    let [selected, setSelected] = useState(0);
    let [value,setValue] = useState("");

    const choice = e => {
        setSelected(e.target.value)
    };
    useEffect(() => {
        switch (selected){
            case "0":
                setValue("java")
                break;
            case "1":
                setValue("Angular")
                break;
            case "2":
                setValue("Php")
                break;
            default:
        }
    }, [selected]);

    return (
        <div>
            Khoá học :
            <select
                onChange={e => {
                    choice(e);
                }}
            >
                <option value="0">Java</option>
                <option value="1">Angular</option>
                <option value="2">Php</option>
            </select>
            <h2>Your selected: {value}</h2>
        </div>
    )
}
export default Selector;