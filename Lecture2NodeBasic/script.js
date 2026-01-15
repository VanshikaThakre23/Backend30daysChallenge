const fs = require('fs');

// fs.writeFile("hey.txt" , "hey hello how are you",function(err){
//     if(err){
//         console.log(err);
//     }else console.log("done");
    
// })

// fs.appendFile("hey.txt" , "I am fine" , function(err){
//     if(err)console.log(err);
//     else console.log("done");
// })


fs.rename("hey.txt","hello.txt",function(err){})