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




// Working with the File System Module

// const fs = require('fs');

// // create file 
// fs.writeFile('example.txt', "this is an example", (err) => {
//     if(err)
//         console.log(err)
//      else {
//         console.log('File successfully created')
//         fs.readFile('example.txt','utf8', (err, file) => {
//             if(err) {
//                 console.log(err);
//             } else {
//                 console.log(file)
//             }
//         })
//      }
       
    
// });

// fs.rename('example.txt', 'example2.txt', (err)=> {
//     if(err) console.log(err)
//     else console.log('successfully renamed the file')
// });

// fs.appendFile('example2.txt', 'Some data being appended', (err)=> {
//     if(err) console.log(err)
//     else console.log('Successfully appended data to file')
// });

// fs.unlink('tutorial.js', (err)=> {
//     if(err) console.log(err)
//     else console.log('deleted')
// })

//Working with folders

// fs.mkdir('tutorial', (err) => {
//     if(err){
//         console.log(err)
//     } else {
//         fs.writeFile('./tutorial/example.txt', '123', (err)=> {
//             if(err) console.log(err);
//             else console.log('succesful');
//         })
//     }
// })


// fs.unlink('./tutorial/example.txt', (err)=> {
//     if(err) console.log(err);
//     else console.log('successfully deleted file')
// })
// fs.rmdir('tutorial', (err)=> {
//     if(err) console.log(err)
//     else console.log('deleted folder')
// })

// fs.readdir('example', (err, files)=> {
//     if(err) {
//         console.log(err)
//     } else {
//         for(let file of files) {
//             fs.unlink('./example/' + file, (err)=> {
//                 if(err){console.log(err)}
//                 else{ console.log('successfully deleted file')}
//             })
//         }
//     }
// });




// Working with Readable and Writable Streams and Pipe Chains

const fs = require('fs');
//zlib is for compressing files
const zlib = require('zlib');
const gunzip = zlib.createGunzip();
const readStream = fs.createReadStream('./example2.txt.gz');
const writeStream = fs.createWriteStream('uncompressed.txt');

readStream.pipe(gunzip).pipe(writeStream);




//Creating a Http Server Using the Http Module