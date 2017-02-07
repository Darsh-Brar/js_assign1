const myVal=process.argv;
//using processs.argv

let myArr1=[];
//creating a new array which is empty

myArr1.push(myVal[2]);
//third place value

console.log(myArr1);
//to console log the third value

myArr1.push(Number(myVal[2]));

//to convert the third value to number from string

myArr1.push(Number(myVal[3]));
//to convert th forth value from string to number

let a=Number(myVal[3]) +Number(myVal[4]);
//adding the numbers that we conveted to numbers from strings

console.log(a);
//to console log the total of two numbers that we did in previous step
