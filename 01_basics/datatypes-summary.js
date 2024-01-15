//The only classification of datatypes -- Primitive and Non - Primitive
//Primitive
//7 categories are present: all primitive types are call by value
//String, Number, Boolean, Null, Undefined, Symbol, BigInt

//javascript -- dynamically typed language


const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;              //undefined value

const id  = Symbol('123')       // the return type of symbol should be symbol
const anotherId = Symbol('123')
console.log(id === anotherId)   // after running a strict check  -- false
//justifies the fact that the two symbols are unique

const bigNumber = 2364823648234672n
console.log(typeof bigNumber)


//Reference type -- also known as non - primititve
// Array
// Objects
// Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name: "priyanshu",
    age: 22,
}

const myFunction = function(){
    console.log("Hello World!");
}
console.log(typeof myFunction);     //output -- object function 

//Return types of variables in JS when typeoof is used :
/*
Primitive Datatypes:
Number    -- number
String    -- string
Boolean   -- boolean 
null      -- object 
undefined -- undefined
Symbol    -- symbol
Bigint    -- Bigint
*/

/*
Return types of non-primitive datatypes :
Arrays   -- object
Function -- function
object   -- object 
*/
