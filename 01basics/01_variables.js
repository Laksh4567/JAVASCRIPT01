const accountid=14435679 // once the value is defined by using const it cannot be changed.
let accountEmail="nandalaksh2003@gmail.com"
var accountpassword="12356"
accountCity="Jaipur"
let accountState; //delievered undefined value
// the value of let and var can be changed as normal for example
accountEmail="nanda2003@gmail.com"
accountpassword="2125423"
//prefer not to use var because of issues in block scope and functinal scope
accountCity="Bengaluru"

console.log(accountid)
console.table([accountid,accountEmail,accountpassword,accountState])
