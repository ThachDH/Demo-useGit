console.log(`hello 7`)

const firstArr= [1, 2, 3, 4]
const secondArr= [4, 7, 8, 9]
const thirdtArr= [8, 7, 6, 5]
const forthArr = [...firstArr,...secondArr]
const fifthArr = [...secondArr, ...firstArr]

console.log(forthArr);
console.log(fifthArr);
console.log(...firstArr,...secondArr) // array thì nó sẽ nối lại chuỗi


const obj1 = {
    name : "thach",
    age : 21,
    address : "BR-VT",
}

const obj2 = {
    phone : "0334082629",
    status : "sigle",
    address : "Son Binh",
}

//console.log(...obj1) : như vậy sẽ lỗi bởi vì nó khongo biết biến này là arr hay obj nên nó bị lỗi
 console.log({...obj1,...obj2}) // copy 2 thằng object thì nó sẽ không nối obj mà nó sẽ ghi đè, thằng bên trái ghi đè lên thằng bên phải, 
 //cụ thể ở đây là ghi đè thằng address từ BR-VT thành Son Binh
 
 
 // Ex:
 const sum=(x,y,z) => {
    return x+y+z;
 }
 const numbers = [1,2,3];
 console.log(sum(...numbers))
