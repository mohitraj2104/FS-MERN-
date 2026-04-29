//run the code when the condition is true and keep running until the condition is false.
//you are given an number num, tell me how many times you can divide num by 5.
let num=25;
let count=0;
while(num%5==0){
    count++;
    num=num/5;
}
console.log(count);