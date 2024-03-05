//Asynchronous function:-Understanding
//fs is a library that gives a high level construct to do file system stuff like read from the file,write to a file
//  const fs=require("fs");
// fs.readFile("a.txt","utf-8",function(err,data){//"utf-8" is encoding
//     console.log(data);
// })
// console.log("Hi Hi Hi Hi Hi");


// console.log("Hi There");
// let a=0;
// for(let i=0;i<10000000000;i++){
//     a++;
// }
// console.log(a);
// console.log("Hi There 2");




//IMP Thing to see in o/p:even if the work of asynchronous function(.readFile) gets over it gets executed at the end becoz after running-
//asynchronous function it comes to Call back Queue and then after the Call stack gets completely executed then asynchronous function-
//present in Call Back Queue comes to Call Stack.



//Promise

const fs=require('fs');

//Writing my own asynchronous function

// function KiratReadFile(){//we call these as Wrapper becoz inside our own function i am using some common Asynchronous function
//     return new Promise(function(resolve){//new Promise:Creating instance of Promise class
//         console.log("inside Promise");
//         fs.readFile("a.txt","utf-8",function(err,data){
//             resolve(data);
//             console.log("Before Resolve");
//         });
//     })
// }

// //callback function call
// function onDone(data){
//     console.log(data);
// }

// var a=KiratReadFile();
// a.then(onDone);



//use of pending,resolved
// ex=1
// var d=new Promise(function(resolve){
//     resolve("foo");
// });

// function callback(d){
//     console.log(d);
// }
// d.then(callback);



//ex=2
//  var d=new Promise(function(resolve){
//     setTimeout(function(){
//     resolve("foo");
//     },1000)
// });
    
// function callback(data){
//         console.log(d);
//         console.log(data);
//     }
//   console.log(d);
//   d.then(callback); //these callback written inside d.then is callback function


//ex=3
// function KiratAsyncFunction(){
//     let p=new Promise(function(resolve){
//         setTimeout(resolve,2000)
//     });
//     return p;
// }

// const value=KiratAsyncFunction();
// console.log(value);
// value.then(function(){
//     console.log("Hi There");
// })


//ex=4
// function KiratAsyncFunction(){
//   let p=new Promise(function(resolve){
//       setTimeout(function(){
//         resolve("hi")
//       },2000);
// })
// return p;
// }

// function callback(data){
//     console.log(data);
// }

// const value=KiratAsyncFunction();
// console.log(value);
// value.then(callback)





//ex=5
// function PromisifiedOwnSetTimeOut(duration){
//   const p=new Promise(function(resolve){
//     setTimeout(function(){
//       resolve();
//     },duration)
//   });
//   return p;
// }

// const ans=PromisifiedOwnSetTimeOut(1000);
// ans.then(function(){
//   console.log("Timeout is Done");
// });


//ex=6:just see the o/p ki how the order appears in o/p
// console.log("At the top1");
// function promisifiedTimeout(){
//   console.log("Function called 3");
//   return new Promise(function(resolve){
//     console.log("Inside Promise callback 4");
//     setTimeout(function(){
//       console.log("Set Timeout called 5");
//       resolve("Done baby! I am burnt out")
//     },5000)
//   });
// }

// console.log("In middle 2");
// promisifiedTimeout().then(function(value){
//   console.log("Promisified then 6");
//   console.log(value);
// })



//Promise:syntax:here p is object and Promise is a class
//let p=new Promise(function(resolve){

//})



//Async Await:see the flow of o/p by running the code
function kiratsAsyncFunction(){
    let p = new Promise(function(resolve) {
      // do some async logic here:here below i just write basic code to make u understand but actually Below we have to write Async logic
      setTimeout(function(){
        resolve("hi there!")
      },3000); 
    });
    return p;
  }
  
  async function main() {//here in below line if we don't write await then the thing which i got back is promise by writing await i get back resolve value
    const value = await kiratsAsyncFunction();//By writing await we ensure that until the result gets returned in value variable we do not move forward but code present in main defenetely gets run.
    console.log(value);
    console.log("Hello Aaryan");
    
  }
  
  main();//async await always applied on function and not in main body
  console.log("Ji Bhar Ke Ji lo");
  console.log("Ji Bhar Ke Ji lo");
  console.log("Ji Bhar Ke Ji lo");
  console.log("Ji Bhar Ke Ji lo");


