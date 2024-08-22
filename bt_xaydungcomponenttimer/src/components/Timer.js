import {useEffect, useState} from "react";

function Timer(){
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        if (timer===0){
            alert("Time' up")
            return;
        }
        const intervalValid = setInterval(()=>{
            setTimer(prev=>prev-1)
        },1000)
        return()=>clearInterval(intervalValid) ;

    }, [timer]);

    return (
        <div>
            <h1>Countdown: {timer}</h1>  {/* Hiển thị giá trị timer */}
        </div>
    );
}
export default Timer;