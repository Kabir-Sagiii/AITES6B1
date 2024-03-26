function createPromise() {
  // Logic

  return new Promise(function (resolve, reject) {
    // resolve({ name: "Sneha", city: "Mumbai" });
    reject({ error: "Something went wrong" });
  });
}

var promise = createPromise();
// console.log(promise);

//handle the Promise
promise
  .then(function (x) {
    console.log(x);
  })
  .catch(function (y) {
    console.log(y);
  });
