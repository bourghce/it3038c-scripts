// imports the "path" module  (requires = imports)
const path = require("path");

// const  (other options are var & let)
const hello = "Hello from Node JS Variable!"
//    console.log(hello)

// uses the "back tick" character
console.log (`Printing variable hello: ${hello}`);

// global variable, denosted w/ DOUBLE underscore "__"
console.log("directory name: " + __dirname);
console.log("directory and file name: " + __filename);

// using the Path module
console.log("Using PATH module:");
console.log(`Hello from file ${path.basename(__filename)}`);

// pass argument into script to handle in code
console.log(`Process args: ${process.argv}`)
