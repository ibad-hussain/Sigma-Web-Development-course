// Importing a b c d constants from 'ecmascript.js' file as named exports

import {a, b} from "./ecmascript.js";
console.log(a, b)



// Importing obj object from 'ecmascript.js' file as default exports

import obj from "./ecmascript.js";
console.log(obj)

import hello from "./ecmascript.js";    // consoling obj object because it was a default export
console.log(hello)



// Importing a constant from 'commonjs.js' file

const num = require("./commonjs.js")
console.log(num)



// Importing an object from 'commonjs.js' file

const nums = require("./commonjs.js")
console.log(nums)



// Node.js wrapper function
function (exports, module, require, __dirname, __filename) {}