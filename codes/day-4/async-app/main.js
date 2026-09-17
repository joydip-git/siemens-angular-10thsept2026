const divide = async (a, b) => {
  const res = a / b;
  if (res === Infinity) {
    const error = new Error("divisor should not be zero");
    throw error;
  }
  return res;
};

const add = async (a, b) => a + b;

try {
  const divPromise = divide(12, 3);
  const divRes = await divPromise;
  console.log(divRes);
  const addRes = await add(12, 3);
  console.log(addRes);
} catch (error) {
  console.log(error);
}

// const divPromise = divide(12, 3);
// divPromise
//   .then((divRes) => {
//     console.log(divRes);
//     add(12, 3)
//       .then((addRes) => {
//         console.log(addRes);
//       })
//       .catch((e) => console.log(e));
//     // console.log("add over");
//     // console.log(addRes);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const addRes = add(12, 3);
// console.log("add over");
// console.log(addRes);
