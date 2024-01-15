let score = "Priyanshu"
//console.log(typeof score)
//console.log(typeof(score))

let valueInNumber = Number(score)
//console.log(valueInNumber); //will output NaN for 33abc
                            //will output zero for null
                            //will output NaN for undefined
                            //will output 1 for true and zero for false
                            //will output NaN for string
//console.log(typeof valueInNumber);

//these are the results of the conversion
//the notes
//"33" => 33
//"33abc" => NaN
//true => 1 ... false => 0
//NaN stands for not a number but the type of NaN is number only

let IsLoggedIn = -10
let booleanIsLoggedIn = Boolean(IsLoggedIn)
//console.log(booleanIsLoggedIn);
//a number or a string stands for a true but an empty string or a zero is false
//a negative number also stands for true


let someNumber = 33
let StringNumber = String(someNumber)
console.log(StringNumber);        //at this point we check 
console.log(typeof StringNumber); //this will output that the number is converted to string

//**************************************Operations**********************/
let value = 3
let negValue = - value
console.log(negValue);         //works as expected

//basic operations
console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(2 / 2);
console.log(2 % 2);
console.log(2 ** 2);

//Tricky operations
let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
console.log(str3);

//these conversions are based on the ECMA script 
console.log("1" + 2);       // 12
console.log(1 + "2");       // 12
console.log("1" + "2");     // 12
console.log("1" + 2 + 2);   // 122
console.log(1 + 2 + "2");   // 32

// console.log(3 + 4 * 5 % 3); -- confusing node -- not appreciated

//another conversion sets
console.log(true);      //true
console.log(+true);     //1 -- true+ as a case is not possible
console.log(false);     //false
console.log(+"");       //0 -- empty "" stands for false

//this kind of code is not appreciated -- readability
let num1, num2, num3 
num1 = num2 = num3 = 2 + 2

//prefix and postfix operators are demonstrated
let gameCounter = 100
gameCounter++;
++gameCounter;
console.log(gameCounter);   //101






