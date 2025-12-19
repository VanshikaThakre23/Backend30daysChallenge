//This file contains overview of : forEach , map , filter ,find ,  reduce ,  objects

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
let integer = [1,2,3,4,5,6,7,8,9,10];
let even = integer.filter(function(el){
   if(el % 2 == 0){return true;}
      else return false;
});

console.log("filter")
console.log(even);

// find():-find hme pehle occurence dhund ke deta hai array me se [1,2,3,3,4] agr iss array pe find chalaya to pehla 3 dhundke return krega

let dhundo = [1,2,3,3,4];
let milgya = dhundo.find(function(e){
   if(e == 3) {return true;}
})

console.log("find function");
console.log(milgya);

// reduce() :- reduce ek single value return krta hai ,array ke sabhi elemnts ko combine krke (jaise sum,product krke )
let numbers = [1,2,3,4,5,6,7,8,9];
let sum = numbers.reduce((acc,num) => acc+num ,0);
console.log(sum);

// objects : key:value pair hote hai ----------------------------------------------------------------.

// create object = obj
let obj = {
   name:"rose",
   species:"flower"
}

// access object ka name ya age in console like =  obj.name;

console.log(obj.name);

// if we want to stop the change happening below we freeze object
Object.freeze(obj)//now niche kitne bhi value change krlo object change nahi hoga ,ab vo freexe ho gya hai ,niche vale sare console.log me rose hi print hoga tum change kroge tb bhi

// change obj name ki value
obj.name = "lotus"
console.log(obj.name);