var promiseObject = new Promise(function (resolve, reject) {
  //   reject({ error: "Something went wrong" });
  resolve([
    { name: "Rohan", city: "Pune" },
    { name: "Rohan", city: "Pune" },
  ]);
});

console.log(promiseObject);
