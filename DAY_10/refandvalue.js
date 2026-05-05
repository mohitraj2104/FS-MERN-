let fridge={
    coldDrink:"1L",
    snacks:"chips"
}
//reference type: obj, arrays
//shallow copy
let refrigderator= fridge;
refrigderator.coldDrink="0.5L"
console.log(fridge)
//value type:
let money = 1000;
copyMoney=500
console.log(money)