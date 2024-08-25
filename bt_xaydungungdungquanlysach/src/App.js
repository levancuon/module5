import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import BookCreate from "./components/BookCreate";
import BookManager from "./components/BookManager";
import "bootstrap/dist/css/bootstrap.css";
import 'react-toastify/dist/ReactToastify.css';
import BookEdit from "./components/BookEdit";
import {ToastContainer} from "react-toastify";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/create" element={<BookCreate />} />
                    <Route path="/books" element={<BookManager />} />
                    <Route path="/editBook/:id" element={<BookEdit />} />
                </Routes>
            </BrowserRouter>
            <ToastContainer />
        </>
    );
}

export default App;