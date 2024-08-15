// 1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.
// 2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.
// 3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy".
// 4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.
// 5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.
// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".
// 7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
// 8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
// 9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..." cho tất cả các tên.
// 10. Tạo một đối tượng "book" với thuộc tính "title", "author" và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.


let arr = [0, 5, 7, 4, 3, 9, -1];

// 1
const newArr1 = arr.filter((value, index) => value > 5);
console.log(`newArr1 = ${newArr1}`);

// 2
const newArr2 = arr.reduce((temp, currentValue) => temp + currentValue);
console.log(`newArr2 = ${newArr2}`);

// 3
let V = 6;
const newArr3 = arr.some(value => value === V)
console.log(`newArr3 = ${newArr3 ? V : "ko tìm thấy"}`);

//4
const newArr4 = arr.every(value => value >= 0)
console.log(`newArr4 = ${newArr4 ? "Mọi phần tử đều lớn hơn 0" : "Có phần tử bé hơn 0"}`)

//5

let newArr5 = arr.find(element => element > 3);
console.log(`newArr5 = ${newArr5} `);

// 6
const [first, ...rest] = arr
console.log(`newArr6 = first = ${first}, rest = ${rest}`)

// 7
let person = [{
    age: 5,
    name: "cuong"
},
    {
        age: 18,
        name: "loc"
    }]
for (const {age, name} of person) {
    console.log(`newArr7  age = ${age}, name = ${name}`);
}

// 8
// function sum (...arr){
//     return arr.reduce((total,current)=> total + current,0)
// }
// console.log(`newArr8 ${sum(...arr)}`)
const sum = (...arr) => {
    return arr.reduce((value, index) => value + index, 0)
}
console.log(`newArr8 = ${sum(...arr)}`)

// 9
let word;
// function newArr9(word, ...arr){
//     return `${word}, ${arr.join(` and `)}`
// }
//
// console.log(newArr9("welcome",...arr))

const newArr9 = (word, ...arr) => {
    return `${word}, ${arr.join(` and `)}`
}
console.log(`newArr9 = ${newArr9("welcome", ...arr)}`)

// 10
let title = "JavaScript: The Good Parts";
let author = "Douglas Crockford";
let pages = 176;

// Tạo đối tượng "book" sử dụng Enhanced Object Literals
const book = {
    title,
    author,
    pages,
    displayInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    }
};
book.displayInfo();

