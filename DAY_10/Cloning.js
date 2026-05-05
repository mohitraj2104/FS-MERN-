/*let obj={
    name:"student",
    age:21,
    salary:"1.5L"
}
//shallow clonning
let copyObj=obj;
copyObj.name="karan";
console.log(obj)
*/
let obj1={
    name:"iphone",
    price:10000,
    intro:function(){
        console.log(`${this.name}=${this.price}`)
    },
    detail:{
        model:"14",
        store:"bhubaneswar"
    }
}
//spread operator or destructuring
/*let copyObj1={...obj1};
copyObj1.name="samsung",
console.log(obj1)
console.log(copyObj1)
copyObj1.intro()
copyObj1.detail.model=15;
console.log(obj1)
*/
