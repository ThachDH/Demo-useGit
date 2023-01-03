console.log(`hello 10`);

let user = {};
// a user without 'address' property
console.log(user.address);
//console.log(user.address.street);
 //Error
 // user.address --> undefined
 // undefined.street --> ERROR
 

 // ****** để sửa hoặc hạn chế vấn đề bị lỗi 
//How to fix it ?
// 2 cách này hơi dài nên ta sẽ code gọn lại bằng Optional Chaining
console.log(user.address ? user.address.street : undefined);
console.log( user.address && user.address.street ); // undefined (no error)

// Optional Chaining
console.log(user?.address?.street )
console.log(user?.address?.street?? 'Not found users ' ) // Thay vì undefined thì nó sẽ hiện ra thông báo này
// thằng bên trái ?. mà tồn tại thì bên thằng bên phải mới đc truy cập





