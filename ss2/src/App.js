import logo from './logo.svg';
import './App.css';

function App() {
    const id = "C0324h1"
    const student = [
        {
            id: 1,
            name: "cuong",
            age: 18,
        },
        {
            id: 2,
            name: "cuong",
            age: 18,
        },
        {
            id: 3,
            name: "cuong",
            age: 18,
        }
    ]
    const helloWorld = (name) => {
        alert(`hello ${name}`)
    }
    return (
        <>
            <h1 id={id} className="c0324h1" onClick={() => helloWorld("cuong")}>hello</h1>
            <table>
                <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {
                    student.map((item,index)=>
                    <tr>
                        <td>{index}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                    </tr>
                    )
                }
                </tbody>
            </table>
        </>
    );
}

export default App;
