console.log("first five number are:");
 for(let i=1; i<=5; i++){
    console.log(i)
 }

 //for-of loop//
 let str="Muskan Mourya";
 let size=0;
 for(let val of str){
  console.log(val);
  size++;
}
console.log("length of the str",size);

//for-in loop//
let student={
    name:"Muskan",
    age:18,
    cgpa:9,
};
for(let key in student){
    console.log("key in the object:",key);
    console.log(key,student[key]);
}

let gameNum=25;
let userNum=prompt("Guess the Game Number");
while(gameNum!=userNum){
    console.log("wrong guess,try again")
    }
    console.log("congratulations you have guess the correct number");

