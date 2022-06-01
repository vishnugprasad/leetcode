// (function (name){
//     console.log(name + " g prasad");
// }("vishnu"))



// IIFE

// (function (name){
//     console.log( name + " G prasad");
// }("vishnu"))
     


var person = {
    firstname: "Anna",
    lastname: "Delvi",
    getFullName : function(){
        var fullName = this.firstname + this.lastname
        return fullName;
    }
}


console.log(person.getFullName());


var logName = function(lang1,lang2){
    console.log("logged:" + this.getFullName());
    console.log("argument:" + lang1 + " " + lang2);
}


var logPersonName = logName.bind(person);
logPersonName("en", "es");