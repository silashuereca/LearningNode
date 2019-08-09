// Import JS modules

// const tutorial = require('./tutorial')
// console.log(tutorial.sum(2,3));
// console.log(tutorial.PI);
// console.log(new tutorial.SomeMathObject());




// EventEmitter Class and Event Modules

// const EventEmitter = require('events');
// const eventEmitter = new EventEmitter();

// eventEmitter.on('tutorial', (num1, num2) => {
//     console.log(num1 + num2)
// });

// eventEmitter.emit('tutorial', 1,2);


// class Person extends EventEmitter {
//     constructor(name, lastname) {
//         super();
//         this._name = name;
//         this._lastname = lastname;
//     }

//     get name() {
//         return this._name;
//     }

//     get lastname () {
//         return this._lastname;
//     }
// }

// const SILAS = new Person('Silas');
// const CHLOE = new Person('Chloe');

// CHLOE.on('name', ()=> {
//     console.log('My name is ' + CHLOE.name)
// });

// SILAS.on('name', () => {
//     console.log('My name is ' + SILAS.name)
// });

// SILAS.emit('name');
// CHLOE.emit('name');




// Working with the Readline Module

// const readline = require('readline');
// const rl = readline.createInterface({ input : process.stdin,
//                                     output : process.stdout});
// const num1 = Math.floor((Math.random() * 10) +1);
// const num2 = Math.floor((Math.random() * 10) +1);
// const answer = num1 + num2;

// rl.question(`What is ${ num1 } + ${ num2 }? \n`, 
//     (userInput) => {
//         if(userInput.trim() == answer){
//             rl.close();
//             console.log('Correct!!!')
//         } else {
//             rl.setPrompt('Incorrect answer, please try again \n');
//             rl.prompt();
//             rl.on('line', (userInput)=> {
//                 if(userInput.trim() == answer){
//                     rl.close();
//                     console.log('Correct!!!')
//                 } else {
//                     rl.setPrompt('Incorrect answer, please try again \n');
//                     rl.prompt();
//                 }
//             })
//         }
//     })




// Working with File System Module

