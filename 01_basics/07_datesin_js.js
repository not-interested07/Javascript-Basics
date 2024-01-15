//Dates
let myDate = new Date()
console.log(typeof myDate); //Object
//the various forms of output are provided in here when used with the dates
console.log(myDate);                        //2024-01-15T16:54:52.429Z
console.log(myDate.toString());             //Mon Jan 15 2024 16:54:52 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toDateString())          //Mon Jan 15 2024
console.log(myDate.toISOString())           //2024-01-15T17:12:55.639Z
console.log(myDate.toJSON())                //2024-01-15T17:12:55.639Z  
console.log(myDate.toLocaleDateString())    //1/15/2024
console.log(myDate.toLocaleString())        //1/15/2024, 5:12:55 PM
console.log(myDate.toLocaleTimeString())    //5:12:55 PM
console.log(myDate.toTimeString())          //17:12:55 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toUTCString())           //Mon, 15 Jan 2024 17:12:55 GMT
 
let myCreatedDate = new Date(2023, 0, 23)   //here, month starts from zero
console.log(myCreatedDate.toDateString());      //date -- Mon Jan 23 2023
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString());    //date -- 1/23/2023, 5:03:00 AM
let myCreatedDate3 = new Date("2023-01-14")
console.log()

