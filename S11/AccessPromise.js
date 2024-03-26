// var promiseObject = new Promise(function (resolve, reject) {
//   resolve("kabir");
//   //   resolve([
//   //     { name: "Rohan", city: "Pune" },
//   //     { name: "Rohan", city: "Pune" },
//   //   ]);
// });

var promiseObject = new Promise(function (resolve, reject) {
  //   reject("Sagar");
  reject({ error: "Something went wrong", status: false });
});

//Handling or Accessing the Promise Object data
promiseObject
  .then(function (successdata) {
    console.log("successdata", successdata);
  })
  .catch(function (errordata) {
    console.log("errordata", errordata.error);
  });
