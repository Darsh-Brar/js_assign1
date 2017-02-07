const myVal= process.argv;
//program for calculating tip

let myArr4=[]


let myMealCost = myArr4.push(Number(myVal[2]));
let myTipPercentage = myArr4.push(Number(myVal[3]));
//passing values to mealcost and tippercent

const tipAmount=(Number(myVal[3])/100) * Number(myVal[2]);

const totalOwing =tipAmount + Number(myVal[2])

const output='your meal was $${Number(myVal[2])} + a ${Number(myVal[3])}% tip = $ {totalOwing}'


console.log(output)
//console the output



const price = 102
const totalItems = 4
const totalPrice = price * totalItems
const outPut = `your payment for  ${totalItems} is =${totalPrice}`
console.log(outPut)
