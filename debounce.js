// // //call

// // var emp1 = {
// //     firstName: "Vishnu  ",
// //     lastName: "G Prasad"
// // }

// // var emp2 = {
// //     firstName: "Agnus",
// //     lastName: " Maria Joseph"
// // }

// // function greet(message1,message2){
// //     console.log(message1 + " " + this.firstName + this.lastName + " " + message2 );
// // }

// // greet.call(emp1,"hello", " good evening")
// // greet.call(emp2, "hola", "good morning")


// var emp1 = { firstName : " Adwaith ",
// lastName: " R Krishna"}

// var emp2 = {firstName: "Agnus",
// lastName: " Maria Joseph"}

// function greetings(message1,message2){
//     console.log(message1+ " " + this.firstName+ this.lastName + " " + message2);
// }

// greetings.apply(emp1,["hola","Good evening"])
// greetings.apply(emp2,["hello","good evening"])


//Apply

// var emp1 = {firstName: "Vishnu ",
// lastName: "G Prasad"}

// var emp2 = {fierstName: "Agnus",
// lastName: "Maria Joseph"}

// function greeting(message1,message2){
//     console.log(message1+" "+ this.firstName + this.lastName + " "+ message2 );
// }

// var greetEmployee1 = greeting.bind(emp1) 
// greetEmployee1("Hola","Buenos dias")




// var emp1 = { 
//     firstName: "Vishnu",
//     lastName: " G Prasad"
// }


// function greeting(message1,message2){
//     console.log(message1 + " " + this.firstName + this.lastName + " " + message2 );
// }

// var employeeGreet = greeting.bind(emp1)
// employeeGreet("Hola", "Buenos dias")



// Let is having a block scope


// let counter = 30;
// if(counter === 30){
//     let counter = 35
//     console.log(counter)
// }

// console.log(counter);


// Immediately Invoking Function Execution

// (function vishnu(){
//     var x 
// })

//


// var object = {
//     name: "vishnu",
//     age: 20

// }

// console.log(object.name);
// console.log(object.age);


var person = {
    name: "vishnu",
    age: "20"
}

console.log(person.name);