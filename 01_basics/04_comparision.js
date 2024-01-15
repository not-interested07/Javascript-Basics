//Basic comparisions  -- in case of same datatypes
console.log(2 > 1);
console.log(2 < 1);
console.log(2 >= 1);
console.log(2 <= 1);
console.log(2 != 1);
console.log(2 == 1);

//comparisions of non-similar data-types
console.log("2" > 1);       //true -- automatic conversion of two to number
console.log("02" > 1);      //true -- similar conversion of two to number
 
//logic behind such conversions
console.log(null > 0);      //false
console.log(null == 0);     //false
console.log(null >= 0);     //true
//the reason -- equality check and comparisions work differently
//comparision converts the number treating it as zero -- that's why nul >= 0
//is true and null > 0 is false

//undefined provides false in all the cases
console.log(undefined > 0)      //false
console.log(undefined < 0)      //false
console.log(undefined == 0)     //false

//strict check -- "===" : checks not only the values but also the data types
console.log("2" === 2);     //output -- false


//NOTE -- null and undefined kind of conversions are not appreciated
