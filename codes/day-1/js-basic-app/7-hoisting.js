//function main(){
console.log(x); //? undefined
var x;
x = 10;
console.log(x); //? 10

for (var i = 0; i < 1; i++) {
  var x;
  x = 20;
  console.log(x); //? 20
}

console.log(x); //? 20

test();
function test() {
  var x = 100;
  console.log(x);
}
test();

//sayHi()
var sayHi;
sayHi = function () {
  var y = 100;
};
sayHi();
//}
//main()
