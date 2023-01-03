console.log('hello 5')

//1. Map
// Map trả cho chúng ta 1 array mới, cú pháp thì nhanh gọn

const myArray = [1,2,3,4];
// const myList = myArray.map((item) => item *2);
// bên trong hàm map là 1 function
// const myList = myArray.map((item)=>{
    // console.log(item);
//     return item *2;
// })
const myList = myArray.map((item)=>item *2)
console.log(myList, myArray)

// 2. Filter

