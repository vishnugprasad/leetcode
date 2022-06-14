// (function (name){
//     console.log(name + " g prasad");
// }("vishnu"))



// IIFE

// (function (name){
//     console.log( name + " G prasad");
// }("vishnu"))
     


// var person = {
//     firstname: "Anna",
//     lastname: "Delvi",
//     getFullName : function(){
//         var fullName = this.firstname + this.lastname
//         return fullName;
//     }
// }


// console.log(person.getFullName());


// var logName = function(lang1,lang2){
//     console.log("logged:" + this.getFullName());
//     console.log("argument:" + lang1 + " " + lang2);
// }


// var logPersonName = logName.bind(person);
// logPersonName("en", "es");



// var value
// var map = {}
// map[value] = 1;
// console.log(map[1]);


var obj = {name: "vishnu",
            admno: 23}

            obj.id = 3



            

var nums = [2,7,11,15]

var twoSum = function(nums, target) {
    var map = {};
    for(var i = 0; i <nums.length; i++) {
        var value = nums[i];
        var complementpair = target - value;
        if(map[complementpair] !== undefined) {
            return [map[complementpair],i];
            
        }
        else {
            map[value] = i;
        }
    }
    
};