// Modify the following code such that the object properties are destructured and logged.
// const person = {
//                       name: “Noam Chomsky”,
//                       age: 92
//             }
           
//            let name = person.name;
//            let age = person.age;
//            console.log(name);
//            console.log(age);


const person = {
    name: "Noam Chomsky",
    age: 92
}

const{name:newname ,age:newage} = person;
console.log(newname);
console.log(newage);