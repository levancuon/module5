import axios from "axios";


const URL_STUDENT = "http://localhost:8080/students"


export const getAll = async (name) => {
    try {
        let url = "http://localhost:8080/students?_expand=classroom"
        if (name){
            url += `&name_like=${name}`
        }
       let resp = await axios.get(url);
        return resp.data;
    } catch (e) {
        console.log("ko tim thay")
        return []
    }


}

export const deleteStudent = async (id) => {
    try {
        await axios.delete(`${URL_STUDENT}/${id}`);
        return true;
    } catch (e) {
        return false;
    }
}


export const create = async (value) => {
    try {
        await axios.post(URL_STUDENT, value)
        return true;
    } catch (e) {
        console.log(e)
        return false;
    }
}
export const findStudent = async (id) => {
    try {
        let resp = await axios.get(`${URL_STUDENT}/${id}`)
        return resp.data;
    } catch (e) {
        return false;
    }
}
export const editStudent = async (id, value) => {
    try {
        await axios.put(`${URL_STUDENT}/${id}`, value);
        return true;
    } catch (e) {
        return false;
    }
}