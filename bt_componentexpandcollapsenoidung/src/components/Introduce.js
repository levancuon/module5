import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.css";

function Introduce(){
    const [button, setButton] = useState(false)
    const paragraph = "aisnd awodnwkdawo kl aodklwdawdlkawnd aisnd awodnwkdawo kl aodklwdawdlkawnd aisnd " +
        "awodnwkdawo kl aodklwdawdlkawnd aisnd awodnwkdawo kl aodklwdawdlkawnd aisnd " +
        "awodnwkdawo kl aodklwdawdlkawnd "

    const handleIntroduce = () => {
        setButton(()=>true)
    }
    if (button) {
        return (
            <div><p>{paragraph}</p></div>
        )
    }
    else {
        return(
            <div>
                <button onClick={handleIntroduce} >Giới thiệu</button>
                <div></div>
            </div>

        )
    }


}
export default Introduce;