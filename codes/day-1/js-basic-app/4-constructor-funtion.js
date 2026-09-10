//2. constructor function syntax
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
  //use only when not using new keyword, otherwise new keyword will return the address
  //return this
}

var objRef = new person(1, "vivek", 1000);
var objRef1 = new person(2, "joy", 1000);

console.log(objRef);
console.log(objRef1);

//if you don't use new keyword all the properties and their values will be stored in top level object of the runtime - window (browser) or global (node js)