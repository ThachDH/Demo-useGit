console.log(`hello 8`)

// const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
// const name = person.name;
// const age = person.age;
// console.log(name); //Eric
// console.log(age); //26

const person = { name: "Eric", age: 26, eyeColor: "black", like: "girl" };
const { age, name } = person;
// const name = person.name;
// const age = person.age;
console.log(name); //Eric
console.log(age); //26

const city = [`ha noi`, `da nang`, `sai gon`, `ca mau`];
const [x,y, ,z] = city
console.log(x,y,z);

