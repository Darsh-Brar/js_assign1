const myVal=process.argv;
//using process.argv

let myArr2=[]
//creating array

myArr2.push(Number(myVal[2]));
myArr2.push(Number(myVal[3]));
//adding values to array

console.log(myArr2);
//to console log the array

let a=Number(myVal[2])+Number(myVal[3]);
//adding values

if(Number(myVal[2]),Number(myVal[3])<10)

    {
        console.log('entered values are less than 10')
    }
    
else if(Number(myVal[2]),Number(myVal[3])>10 && Number(myVal[2]), Number(myVal[3])<100)

    {
        console.log('entered values are greater than 10 but less than 100')
    }
 
 else if(Number(myVal[2]),Number(myVal[3])>100 && Number(myVal[2]),Number(myVal[3])<1000)
    {
        console.log('entered values are greater than 100 but less than 1000')
    }
    
else 
    {
        console.log('enterd values are greater than 1000')
    }
//checking the values using if else
