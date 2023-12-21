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
console.log(StringNumber);
console.log(typeof StringNumber);

