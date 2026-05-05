let student={
    name:"Mohit",
    course:"FSD",
    status:"Pass",
    Fees:"300000"
}
//for in loop is used for iteration over objects
for(let key in student){
    console.log(key+":"+student[key])
}
console.log(Object.keys(student))
console.log(Object.values(student))
console.log(Object.entries(student))
