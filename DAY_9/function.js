//function Declaration
function add(a, b) {
    console.log(a + b);
}   

function mul(a, b) {
    console.log(a * b);
}   
let sum=add(4, 5);
console.log(sum); //undefined
add(6,8)
let multi=mul(5,8);
console.log(multi); //undefined


// function Expression
const sub = function (a, b) {
    return a - b;
}

let substact=sub(9, 4);
console.log(substact);

//Arrow Function
let div = (a, b) => a/b;
let division=div(4, 2);
console.log(division);

let fullname= function(firstname, lastname="sir"){
    console.log("hey my name is "+firstname+lastname);
}

let intro=(name,course,age)=>{
    // console.log("hey my name is "+name+" and i am doing "+course+" and my age is "+age);

    console.log(`hey my name is ${name} and i am doing ${course} and my age is ${age}`);
}
intro("Mohit","Full Stack Development", 20);