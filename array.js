// Array is a data structure that can hold multiple values at once.It is a collection of elements, each identified by an index or key. Arrays can store different types of data, including numbers, strings, and even other arrays.
//creating an array
let arr=["Mohit","Rohit","Satyarth",5000,"Shivam"];
console.log(arr[3]); //5000

//updating an array
arr[4]="Rahul";
console.log(arr); //["Mohit","Rohit","Satyarth",5000,"Rahul"]

//Delete
delete arr[2];
console.log(arr);

//methods of array:
console.log(arr.length); //5

// let str=arr.join("*")//Mohit*Rohit*undefined*5000*Rahul
// console.log(arr)
// console.log(str) //Mohit*Rohit*undefined*5000*Rahul

let str=arr.join("")//Mohit-Rohit-undefined-5000-Rahul
console.log(arr)
console.log(str) //Mohit-Rohit-undefined-5000-Rahul
//adding an element at the end of the array
arr.push("hey")
console.log(arr) //["Mohit","Rohit",undefined,5000,"Rahul","hey"]

//deleting an element from the end of the array
let delI=arr.pop();
console.log(arr+"and deleted value is "+delI) //["Mohit","Rohit",undefined,5000,"Rahul"]

//unshift: adding an element at the beginning of the array
arr.unshift("check")
console.log(arr) //["check","Mohit","Rohit",undefined,5000,"Rahul"]

//shift: deleting an element from the beginning of the array
let delF=arr.shift();
console.log(arr+"and deleted value is "+delF)//["Mohit","Rohit",undefined,5000,"Rahul"] and deleted value is check