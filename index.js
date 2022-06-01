// var x = [1, 8, 3, 7, 5, 6];
// function secondLargest() {
//   var arrange = x.sort((a, b) => {
//     return a - b;
//   });
//   var large = arrange[arrange.length - 2];
//   console.log(large);

//   }

// secondLargest();

// var x = [1, 8, 8, 3, 7, 5, 5, 6];

// function secondLargest() {

//     console.log(new Set(x));
//     console.log([... new Set(x)]);
//     var newArray = [...new Set(x)]

//   var arrange = newArray.sort((a, b) => {
//     return a - b;
//   });
//   var slarge = arrange[arrange.length - 2];
//   console.log(slarge);
// }
// secondLargest();

//arrranging in strings

// var names = [ "agnus","vishnu", "adwaith"];

// function alphabetic(){
//     var ordering = names.sort((a,b)=>{

//         if(a>b){
//             return 1;
//         }
//         else return -1;

//     })
//     console.log(ordering);
// }

// alphabetic();

// var names = [ "agnus","vishnu", "adwaith"];

// function alphabetic(){
//     var ordering = names.sort((a,b)=>{

//       return  (a>b)?1:-1

//     })
//     console.log(ordering);
// }

// alphabetic();

// var names = [ "agnus","vishnu","vishnu", "adwaith"];

// function alphabetic(){

//   var duplicate =   new Set(names);
//  var noDupl =  [...duplicate];
//  console.log(noDupl);

//     var ordering = noDupl.sort((a,b)=>{

//       return  (a>b)?1:-1

//     })
//     console.log(ordering);
// }

// alphabetic();

// sum (a)(b)

// function CURRYING

// function add(a){
//     return (function two(b){
//         return a+b
//     })
// }

// console.log(add(1)(2));

// sum(a,b,c)

// sum(a)(b)(c)

// function sum(a) {
//     return(function two(b){
//         return(function three(c){
//             return a+b+c;
//         })
//     })
// }

// console.log(sum(1)(2)(3));

// DEEP COPYING

// var a = {name: "vishnu",
// rollno : "23"}

// var b = {name: a.name,
// rollno : a.rollno};

// console.log(a===b);

// function copy(x){

// var b = {...x};
// return b;

// }

// var a = {name: "vishnu",
// rollno : "23",
// address : {street : "xyz",
// dist : "abc"}}

// var check  = copy(a)
// console.log(check);
// console.log(check === a);
// console.log(check.address === a.address);
// console.log(Object.keys(a).length);

// var a = {name: "vishnu",
// rollno : "23",
// address : {street : "xyz",
// dist : "abc"}}

// console.log(Object.keys(a));

// function copy(x){
//     var keys  = Object.keys(x);
//     console.log(keys);
//     var len = keys.length;
//     var obj ={};
//     for(i=0;i<len;i++){
//         if ( (typeof x[keys[i]]) === "object"){   // x.keys[i]
//           obj[keys[i]] = copy( x[keys[i]])}

//            else {
//             obj[keys[i]] = x[keys[i]];
//            }

//     }

//     return obj;

// }

// console.log(copy(a));

// var eng = " hello my name is vishnu"
// var x =eng.split(" ").sort().join("")
// console.log(x);

// let  p = new Promise((resolve,reject) => {
//     let a  = 1 + 2;
//     if(a===3){
//         resolve("sucess")
//     }

//     else {
//         reject("failed")
//     }
// })

// p.then((message)=>{
//     console.log("the attempt is " + message);
// }).catch((message) => {
//     console.log("the attempt is " + message);
// })

// let p = new Promise((resolve,reject)=>{
//    let a  = 1+1;
//    if(a===3){
//        resolve("sucess")
//    }
//    else reject("failed")
// })

// p.then((message)=>{
//     console.log("the attempt is" + " " + message);
// }).catch((message)=>{
//     console.log("the attempt is"+ " " + message);
// })

//PROMISES

// let p = new Promise((resolve,reject)=>{
//     let a = 1+2;
//     if(a === 3){
//         resolve("sucess")
//     }

//     else reject("failed")
// })

// p.then((message)=>{
//     console.log("the attempt is " + message);
// }).catch((message)=>{
//    console.log( "the attempt is " + message);
// })

// async function check(){
//     var p =  new Promise((resolve,reject)=>{
//         let a  = 12;
//         if(a === 20){
//             resolve("sucess") // goes to try
//         }
//         else reject("failed") // goes to catch
//     })
//     try{
//         let x = await p
//     console.log(x);
//     } catch {
//         console.log("attempt failed");
//     }

// }

// check()

//object destructring
// const obj = {a:1, b:2};
// const {a,b} = obj;
// console.log(a,b);

//OBJECT PROTOTYPING

// function Person(first,last,age,eyecolor){
//     this.firstname = first;
//     this.lastname = last;
//     this.age = age;
//     this.eyecolor = eyecolor;
// }

// const guy = new Person("sherlock","holmes",40 , "blue");
// console.log(guy);

// setInterval(()=>{
//     console.log("hello world");
// },1000)

// setTimeout(()=>{
//     console.log("thime wait is 3 sec");
// },3000)

// const d = new Date();
// console.log(d);

// var a = 3;
// var b = "3";

// if(a==b){
//     console.log("true");
// }

// if(a===b){
//     console.log("true");
// }

// console.log(a);
// var a ="hello"

// var a = function display(){
//     console.log("vishnu");
// }

// console.log(a);
// a()
// display()

// var arry = [1,2,5,9];

// var xarray = arry.map((item)=>{
//    if(item > 2) {
//         console.log(item);
//     }
// })

// var yarray = arry.filter((item)=>{
//     return item > 1
// })

// console.log(yarray);

// const item = [
//   { name: "vishnu", rollno: 23 },
//   { name: "agnus", rollno: 3 },
//   { name: "adwaith", rollno: 2 },
// ];

// var sorted = item.map((item)=>{
//     return item.name
// })

// console.log(sorted);


// var filtered = item.filter((item)=>{
//     return item.rollno < 20;
// })

// console.log(filtered);

// var total = item.reduce((count, item)=>{
//      var count = count + item.rollno
//      return count
// },0)

// console.log(total);



// const items = [
//     { sub : "English", marks : 98},
//     {sub : "maths", marks : 100},
//     {sub: " computer", marks : 97}
// ]


// var total = items.reduce((total, item)=>{
    
//     return total += item.marks
// },0)

// console.log(total);



// var p = new Promise((resolve,reject)=>{
//     var a = 1+1;
//     if(a === 2) {
//         resolve("sucess")
//     } else {
//         reject("failed")
//     }
// })

// p.then((message)=>{
//     console.log("the task is" + message);
// }).catch((message)=> {
//     console.log("the task is" + message);
// })




// let p = new Promise((resolve,reject)=>{
//     let a = 1
//     if(a > 2 ) {
//         resolve("sucess")
//     }else {
//         reject(" failed ")
//     }
// })

// p.then((message)=>{
//     console.log("the task is " + message);
// }).catch((message)=>{
//     console.log("the task is " + message);
// })



// nums = [2,5,7,15], target = 9

// var twoSum = function(nums, target) {
//     var mp = {};
//     for(var i = 0; i <nums.length; i++) {
//         var value = nums[i];
//         var complementpair = target - value; //7
//         if(mp[complementpair] !== undefined) {
//             return [mp[complementpair],i];
            
//         }
//         else {
//             mp[value] = i;
//         }
//     }
    
// };


// var sum = function(nums,target){
//     var map ={ }
//     for(i=0; i<nums.length; i++){
//         var value = nums[i];
//         var comp = target - value;
//         if(map[comp] !== undefined){
//             return[map[comp],i]
//         } 
//         else {
//             map[value] = i;
//         }
//     }
// }
// console.log(sum(nums,target));


function lengthOfLongestSubstring(check) {
  var letters = check.split("");
  var max = 0;
  var result = new Map();
  console.log(result);
  var start = 0;
  
  for (var i = 0; i < letters.length; i++) {
    if (!result.has(letters[i])) {
      result.set(letters[i], i);
    } else {
      i = result.get(letters[i]);
      result.clear();
    }
    
    if (max < result.size) {
      max = result.size;
    }
  }
  return max;
}


console.log(lengthOfLongestSubstring("dvdf"));