/*
//object destructuring
const obj = {
  id: 1,
  name: "anil",
  salary: 1000,
};

// const idValue = obj.id;
// const nameValue = obj.name;

//const { id: idValue, name: nameValue } = obj;
//console.log(idValue, nameValue);

// const id = obj.id;
// const name = obj.name
//const { id: id, name: name } = obj;
const { id, name } = obj;
console.log(id, name);

const values = [10, 20, 30, 40];

// const first = values[0];
// const third = values[2];

const [first, , , fourth] = values;
console.log(first, fourth);

const data = [
  {
    id: 1,
    name: "anil",
    projects: [
      {
        id: 100,
        name: "CITA",
      },
      {
        id: 101,
        name: "SAP",
      },
    ],
  },
  {
    id: 2,
    name: "tomas",
    projects: [
      {
        id: 102,
        name: "XYZ",
      },
      {
        id: 103,
        name: "ABC",
      },
    ],
  },
];

const [
  ,
  {
    projects: [, { name: projname }],
  },
] = data;

console.log(projname);

const copy = {};
for (const propName in obj) {
  const propValue = obj[propName];
  copy[propName] = propValue;
}

console.log(obj);
console.log(copy);

const copy1 = Object.assign({}, obj);
console.log(copy1);

//spread operator (...)
const another = { ...obj };
console.log(another);

const copyValues = [...values, 100, 200];

//rest operator (...)
function calculateAverage(name, ...arr) {}

calculateAverage("Daniel", 10, 20);
calculateAverage("sunitha", 10, 20, 30);

//arrow function
function add(a, b) {
  return a + b;
}

const subtract = function (a, b) {
  return a - b;
};

const multiply = (a, b) => a * b;
*/
function outer() {
  this.x = 100;
  //const ref = this;

  //   let inner = function () {
  //     this.y = 200;
  //     //console.log(ref.x + this.y);
  //     console.log(this.x + this.y);
  //   };
  //   inner = inner.bind(this);
  const inner = () => {
    this.y = 200;
    //console.log(ref.x + this.y);
    console.log(this.x + this.y);
  };
  inner();
}

new outer();

const fn = (a, b) => a + b;
