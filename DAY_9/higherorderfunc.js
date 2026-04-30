//these works on array
let nums = [1,2,3,4,5,6,7,8,9];
nums.map((val,indx,arr)=>{
    return arr[indx]=val*5;
})
console.log(nums) //[5,10,15,20,25,30,35,40,45];

//filter
let res = nums.filter((val,index,arr)=>val%2==0);
console.log(res) //[2,4,6,8]
let ex=[1,2,3,4];
//reduce
let sum=ex.reduce((acc,val)=>acc+val)
console.log(sum) //10
//some, every, forEach