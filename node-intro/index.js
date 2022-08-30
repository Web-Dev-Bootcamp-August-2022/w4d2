// console.log(process.platform)

// to use ES6 imports in node either use .mjs as a file 
// extension or add "type": "module" to package.json
// import chalk from 'chalk'; // ES6 imports

// const chalk = require('chalk') // Common JS
// console.log(chalk.blue('Hello world!'));

// there are also node internal packages, then called modules

// these don't need to be installed, but they still need to be imported
// import crypto from 'crypto'
// const randomString = crypto.randomBytes(64).toString('Hex')
// console.log(randomString)

// here we import the add function
const addNumbers = require('./add')

const result = addNumbers(3, 6)

console.log(result)

// require('./add')

// import from functions

// const functions = require('./functions')
const { helloFunction, goodbyeFunction } = require('./functions')

console.log(helloFunction())










