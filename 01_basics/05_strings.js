//it is a very important concept
const name = "Ram"
const repoCount = 50

//the outdated syntax
console.log(name + repoCount + "Value")  //Ram50 Value
//modern methods -- using backticks -- called String Interpolation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('hitesh-hc') 
//it will be shown as key-value pairs 

//discussing the various methods in the strings
console.log(gameName[0])            //accessing the key value pairs
console.log(gameName.__proto__);    //provides the empty object

console.log(gameName.lenght);       //provides the length of the string
console.log(gameName.toUpperCase()) //converts the copy of the string to uppercase
console.log(gameName.charAt(0));    //at what index what character is present

//finds the index at which a particular character occurs
console.log(gameName.indexOf('t'))
/*
..indexof() -- used to find the index of the first occurence of specified 
               substring or character within a string
..syntax    -- string.indexof(searchValue, startIndex)
               searchValue: The substring or character to search for within the string.
               startIndex (optional): The index at which to start the search. 
                                       If omitted, the search starts from the beginning.
..if the substring is not found it will return -1

..Important conclusions regarding this

..If you want to find the last occurrence of a substring , use lastIndexof()
..indexof() -- it is case-sensitive. to perform case-insensitive search use 
                touppercase and tolowercase before using it
*/

//for obtaining a substring
const newString = gameName.substring(0, 4);
console.log(newString);                 //hite -- 4 is not included
/*
..It is used to extract a portion of a string.
..syntax -- string.substring(startIndex, endIndex);
..startIndex: The index at which to begin extracting characters. 
              This index is inclusive.
..endIndex: The index before which to stop extracting characters. 
            This index is exclusive.
..If you omit the start index the method will extract characters from the 
  start index to the end of the string
..Negative Indices -- doesn't support negative indices , treats them as zero
                      and start extracting characters from the beginning of the
                      string .It does not modify the string but returns a new string
                      with the extracted characters.
*/

//It is also used to extract the values from a string.
const anotherString = gameName.slice(0, 4) 
console.log(anotherString);
/*
..syntax -- string.slice(startIndex, endIndex)
..startIndex: The index at which to begin extracting characters. 
              This index is inclusive.
..endIndex: The index before which to stop extracting characters. 
            This index is exclusive.
..Omitting the end index -- it will extract from the start index to the end.
*/

//trying out the negative indices of dlice function
let str = "Hello, World!";
let substring = str.slice(-5, -1);
console.log(substring);  // Returns "orld" -- -1 is not included

//removal of the spaces thorugh the trim function
const newStringOne = "   hitesh    "
console.log(newStringOne)
console.log(newStringOne.trim())
/*
..syntax -- string.trim()
..does not modify the original string but returns a new string with leading
  and trailing spaces removed
*/

//note on the replace function
const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', '-'))
/*
syntax -- string.replace(searchValue, replaceValue)
string -- string on which replace function is called
searchValue -- the substring or regular expression pattern to search for in the 
               string
replaceValue -- the substring to replace the found occurences of 'searchValue'
*/

//use of regular expression in replace
let strRegExp = "Apples are tasty, and apples are healthy.";
let newStr = str.replace(/apples/gi, "oranges");
console.log(newStr);    // Returns "Oranges are tasty, and oranges are healthy."
//the part of gi stands for global and case insensitive

/*
A detailed discussion on hoe the RegExp worked in this case :::
../(\w+)/g: This is a regular expression (regex) pattern 
            used for matching words in the string. Breaking it down:

            ..(\w+): This is a capturing group ((...)), which captures one or more 
                     word characters (\w). Word characters include letters, digits, 
                     and underscores.
            ..+: Quantifier that specifies that one or more occurrences of 
                 the preceding pattern should be matched.
            ../g: This is a global flag, which means that the replacement 
                  should be applied globally to all matches in the input 
                  string, not just the first one.
            ..Arrow Function in the Replacement:(match) => match.toUpperCase():
                  This is an arrow function used as a callback for the replacement. 
                  It takes each match found by the regex and converts it to 
                  uppercase using toUpperCase()
*/

console.log(url.includes('hitesh')) //returns the output in -- true/false
/*
..This method returns a boolean value and is used to check whether the given
  target substring or element is found
..Basic syntax for both arrays and strings: 
    --string.includes(searchString, position);
    --array.includes(searchElement, fromIndex);
    --position/fromIndex (optional): The position within the string or array 
                                     from which to begin the search
..It is a case-sensitive method.
*/


const splitString = new String('hitesh-hc-com')
console.log(splitString.split('-'))
/*
..It is used to split a string into an array of substrings based on specified 
  separators.
..Syntax* string.split(separator, limit)
        **separator: The character or regular expression used to identify 
                        the positions at which to split the string. This can 
                        be a simple string or a regular expression.
        **limit: specifies number of splits to be performed. resulting array 
                 will have at most "limit + 1" elements
..Split a string using a space -- let words = sentence.split(" ")
..does not modify the original string , it returns a new array containing 
  the substrings
..if the separatoe is an empty string, the string is split into an array of 
  individual characters                       
*/

//trying a few methods on strings 
/*
..trimStart & trimLeft -- equivalent methods used to remove beggining whitespaces
..trimEnd & trimRight -- equivalent methods used to trailing whitespaces
..older versions support left and right variations
*/

//the startsWith function
let strStartsWith = "Hello, World!";
let startsWithHello = str.startsWith("Hello");
console.log(startsWithHello);  // Returns true
/*
..Syntax -- string.startsWith(searchString, position);
..position -- where the string should begin (the iindex)
*/

//EndsWith function is written here
let strEndsWith = "Hello, World!";
let endsWithWorld = str.endsWith("World");
console.log(endsWithWorld);  // Returns true
/*
..Syntax -- string.endsWith(searchString, length);
..length -- the length of the string to consider.If not provided
            the entire string is considered
both startsWith and EndsWith function output in terms of true and false
*/












