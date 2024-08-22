import React from 'react';
import ReactDOM from 'react-dom/client';


const root = ReactDOM.createRoot(document.getElementById("root"))

const tick = ()=>{
    root.render(
        <div>

            <h4>Thông tin trình duyệt của bạn :</h4>
            <h4>{navigator.userAgent}</h4>
            <h4>It is : {new Date().toLocaleTimeString()}</h4>
        </div>
    )
}
setInterval(tick,1000)


