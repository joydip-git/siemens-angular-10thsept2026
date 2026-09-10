//object: collection of keys and values

//1. object literal syntax
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

//accessing object value properties
console.log(anilObj.id);
console.log(anilObj["name"]);

//accessing object functional properties
console.log(anilObj.print());
//console.log(anilObj["print"]());


//adding additional properties in JS object
anilObj.location = "Bangalore";
anilObj["sayHello"] = function () {
  return "hello " + this.name;
};

console.log(anilObj.sayHello());


//iteratig through object properties
for (var propName in anilObj) {
  var propValue = anilObj[propName];
  console.log(propName + ":" + propValue);
}