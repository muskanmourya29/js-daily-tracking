 function firstFun(mssg){ //parameter
    console.log(mssg);
    console.log("My first function in JS ");
    console.log("Learning Functions in JS");
 } 
 firstFun("Hi"); //argument

 //function to calculate sum of two number

 function sum(a,b){
    // local variables 
     s=a+b;
     return s; 
     console.log("after return"); //unreachable code detected
 }
 let value=sum(45,3);
 console.log(value);

 //multiplication function
 function multi(a,b){
 return a*b; 
}

console.log(multi(6,5));

//arrow function 
const arrowMul=(a,b)=>{
    console.log(arrowMul);
        console.log(a*b);
    
}
arrowMul(4,5);

// to print
const prin=()=>{ console.log("hello");
}
prin();


//create a function using the function keyword that takes a string as an argument & returns thr number of vowes in the String.

function calVowel(sen){
    let c=0;
    for(let ch of sen){
        if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u")
        c++;
}
console.log("vowel are:" , c);
}
calVowel("hello");

//with arrow function 
const calVow=sen=>{
    let c=0;
    for(let ch of sen){
        if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u")
        c++;
}
console.log("vowel are:", c);
}
calVow("hello");

//forEach loop in arrays
let arr=[1,2,3,4,5];
arr.forEach(function printVal(val){
    console.log("element are:",val)
});
 

//forEach with arrow function
let num=[1,2,3,4,5];
arr.forEach((val)=>{
    console.log(val);
});

//print string in upper case
let city=["delhi", "bareilly","pune"];
city.forEach((val,idx,city)=>{
    console.log(val.toUpperCase(),idx,city);
});

//for a given array of numbers, print the square of each value using the foreach loop
let nums=[1,2,3,4,2,5];
nums.forEach(function valSqu(val){
    val=val*val; //val**2 
    console.log(val);
});

//Another way

// let nums=[1,2,3,4,2,5];
//   function valSqu(val){
//      //val**2 
//     console.log(val*val);
//   }
// nums.forEach(valSqu);

//map method
let arr1=[23,4,23,32];
let newArr=arr1.map((val)=>{
    return val*2;
});
(console.log(newArr));

//filter method 
let arr2=[23,4,23,32];
let newArr1=arr2.filter((val)=>{
    return val%2==0;
});
console.log(newArr1);

//reduce method
let n=[1,4,3,2,4];
const output=n.reduce((accu , curr)=>{
    // return accu+curr;
     //for maximum number
   return accu>curr?accu:curr;  
});
console.log(output);


//We are given array of marks of students. Filter out of the marks of students that scored 90+
let marks=[67,98,67,88,98,95,87,94];
let highMark=marks.filter((val)=>{
    return val>90;
});
console.log(highMark);

//Take a number n as the input from the user Create an array of the number  from 1 to n.use the reduce the reduce method to calculate the sum and the product of the numbers in an array.

let n1=prompt("enter the number:");
let array=[];
for (let i=1; i<=n; i++){
    array[i-1]=i;
    }
console.log(array);
let sum1=array.reduce((res , curr)=>{
    return res+curr;
});
console.log("sum:",sum1);

let fact=array.reduce((res , curr)=>{
    return res*curr;
});
console.log("Factorial",fact);






