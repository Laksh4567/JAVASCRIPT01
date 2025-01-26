const user = {
    username: "john",
    price: 789,

    welcomeMessage: () => {
        console.log(`welcome ${this.username}`); // `this` will not refer to `user`
    }
}

user.welcomeMessage(); // Output: welcome undefined


function chai(){
    console.log(this);
}
chai.call(user); // Output: user


// Arrow function
const addone=(num1,num2)=>{
    console.log(num1+num2);
}

//***********(IIFE-:Immediately Invoked function Expression )
//for to remove the polution of the global variable we use IIFE
(function chai(){
    console.log(`DB connected`);
})()






