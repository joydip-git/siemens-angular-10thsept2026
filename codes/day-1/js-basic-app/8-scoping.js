//function main(){
//console.log(x); //? undefined
let x; //var x
x = 10;
console.log(x); //? 10

for (let i = 0; i < 1; i++) {
  let x; //var _x
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

sayHi();
var sayHi = function () {
  var y = 100;
};
sayHi();
//}
//main()
