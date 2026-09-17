const divide = (a, b) => {
  const p = new Promise((resolveFn, rejectFn) => {
    const res = a / b;
    if (res === Infinity) {
      const error = new Error("divisor should not be zero");
      rejectFn(error);
    }
    resolveFn(res);
  });
  return p;
};

const add = (a, b) => a + b;

const divPromise = divide(12, 3);
divPromise
  .then((divRes) => {
    console.log(divRes);
  })
  .catch((err) => {
    console.log(err);
  });

const addRes = add(12, 3);
console.log('add over');
console.log(addRes);
