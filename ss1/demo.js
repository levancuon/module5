// console.log(sum(3,4))
//
// // function sum(a,b) {
// //     return a + b;
// // }
//
// const sum = (a,b) => a + b;

// const Dog = (id, name) => {
//     this.id = id;
//     this.name = name;
// }
//
// let dog = new Dog(1, "abc");
// console.log(dog)

let obj = {
    a: 5,
    b() {
        console.log(this.a, this)
    },
    c : () => {
        console.log(this.a, this)
    }
}
obj.b();
obj.c();

