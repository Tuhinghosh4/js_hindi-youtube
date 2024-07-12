// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);

//const bigNumber = 345663726787895287325874923575734n



//Reference (Non primitive)

//Array, Objects, Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name:"Tuhin",
    age:19,
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof heros);