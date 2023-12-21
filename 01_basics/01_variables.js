const accountId = 144553 //cannot be changed 
let accountEmail = "priyanshusingh.07p@gmail.com"   //this is used to configure a variable
/*
prefer not to use var : beacuse of the issue of block scope and functional scope
 */
var accountPassword = "123"
accountCity = "jaipur"  //do not use the assignment in this way
let accountState //unassigned variable is treated as undefined when printed

// accountId = 2    //not allowed assignment to const declaration
// here we have checked if the reassignment is allowed or not in this case
//and as we see that it is all good except const
accountEmail = "hc@hc.com"
accountPassword = "12121212"
accountCity = "Bengaluru"
console.log(accountState)
console.table([accountId, accountEmail, accountPassword, accountCity])