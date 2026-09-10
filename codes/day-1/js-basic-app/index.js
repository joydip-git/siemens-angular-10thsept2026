// function changeText() {
//   var header = window.document.getElementById("mainHeader");
//   header.innerText = "welcome to JS";
// }
// window.addEventListener("DOMContentLoaded", changeText);

// var header = window.document.getElementById("mainHeader");
// var header = document.getElementById("mainHeader");
// header.innerText = "welcome to JS";

//string, number, bool, object
/*
var num = 12;
console.log(num, typeof num);
var nameValue = "joydip";
console.log(nameValue, typeof nameValue);
var char = "1";
console.log(char, typeof char);
var isManager = false;
console.log(isManager, typeof isManager);
num = "siemens";
console.log(num, typeof num);

//object literal syntax
var anilObj = {
  //value properties
  id: 1,
  name: "anil",
  salary: 1000,
  //functional property
  print: function () {
    return this.id + ", " + this.name + ", " + this.salary;
  },
};

console.log(anilObj.id);
console.log(anilObj["name"]);

console.log(anilObj.print());
//console.log(anilObj["print"]());

anilObj.location = "Bangalore";
anilObj["sayHello"] = function () {
  return "hello " + this.name;
};

console.log(anilObj.sayHello());

for (var propName in anilObj) {
  var propValue = anilObj[propName];
  console.log(propName + ":" + propValue);
}
*/
//constructor function syntax
function person(idValue, nameValue, salaryValue) {
  //local variable
  var data = 100;

  //object data
  this.id = idValue;
  this.name = nameValue;
  this.salary = salaryValue;
  this.print = function () {
    return this.id + ", " + this.name + ", " + this.salary;
    };
    //return this
}

var objRef = new person(1, "vivek", 1000);
var objRef1 = new person(2, "joy", 1000);
console.log(objRef);
console.log(objRef1);
