
//ForEach 
 let arr = [1,2,3,4,5];

 arr.forEach(function(val){
    console.log(val + " Hello");
 })

 //map function :Map ek naya array bnata hai ,jisme har element ko original array e har element par koi operation (+,_,*,)apply krk naya value deta hai
let nums = [11,12,13,14,15];
let newnums = arr.map(function(val){
   return 14;
})
console.log(newnums)

//other map example
let names = ["Ram" ,"Shiv" ,"Keshav" , "Madhu"];
let newName = names.map(function(val){
   return(val + "has passes exam");

})
console.log(newName);

// filter():-filter bhinya array bnata pr sirf unhi elements ka jo conditiion ko pass krte hai (true return krte hai ) 
let even = [2,4,6,8,10];
let ans = arr.filter(function(val){
   if(val<=7){return true;}
   else return false;
})
console.log(ans);

// reduce() :- reduce ke single value return krta hai ,array ke sabhi elemnts ko combine krke (jaise sum,product krke )
let numbers = [1,2,3,4,5,6,7,8,9];
let sum = numbers.reduce((acc,num) => acc+num ,0);
console.log(sum);