const accountId = 12345
let accountEmail = "sumitprasad02012004@gmail.com"
var accountPassword="Sumit@2004"
accountCity="West-Bengal"
let accountState;

// accountId = 2345   //not allowed
/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail="sumitgupta02012004@gmail.com"
accountPassword="Gupta@2004"
accountCity="Bengalore"

console.log(accountId)
console.log(accountEmail)
console.log(accountPassword)
console.log(accountCity)
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])