function getUsers() {
  //We have to implement logic to send request to Server or Backend App
  var promiseObj = fetch("https://jsonplaceholder.typicode.com/users", {
    method: "GET",
  });
  promiseObj
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      // Implement the Logic to create Ordered List in JS
      var ol = document.createElement("ol");
      for (let user of data) {
        var li = document.createElement("li");
        li.innerText = user.name;
        ol.appendChild(li);
      }
      document.querySelector("body").appendChild(ol);
    })
    .catch((error) => {
      console.log(error);
      //UI to manage the errors
    });
}
