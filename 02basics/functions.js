// function saymyname(){
//     console.log("My");
//     console.log("name");
//     console.log("is");
//     console.log("John");
//     console.log("cena");

// }
// saymyname();

function addtwonumber(num1,num2){
    let res=num1+num2
    return res;
}

const res=addtwonumber(3,4)
//console.log("res:",res);

function loginusermessage(username){
    return `Welcome ${username}`;
}
console.log(loginusermessage("laksh"))

//rest operator 
function calculatecartprice(...num1){
    return num1;
}

console.log(calculatecartprice(1000,2000,3000));


const username={
    username: "laksh",
    price:3000
}
function calculatecartprice(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price}`);
}

calculatecartprice(username)
