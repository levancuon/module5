// console.log("Start");
//
// new Promise((resolve) => {
//     setTimeout(() => {
//         resolve("Processing...");
//     }, 2000);
// }).then((message) => {
//     console.log(message);
// });
//
// console.log("End");

// console.log("Start");
//
// async function process() {
//     await new Promise((resolve) =>
//         setTimeout(() => resolve(), 2000)
//     );
//     console.log("Processing...");
// }
//
// process();
// console.log("End");


const myPromise = new Promise((cl, cc) => {
    let success = true;
    if (success) {
        cl("Tác vụ thành công!");
    } else {
        cc("Tác vụ thất bại!");
    }
});

// Sử dụng promise
myPromise
    .then((result) => {
        console.log(result); // Kết quả khi promise thành công
    })
    .catch((error) => {
        console.log(error); // Xử lý lỗi khi promise bị từ chối
    });
