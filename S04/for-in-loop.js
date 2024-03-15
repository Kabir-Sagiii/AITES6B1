var user = {
  name: "Rohan",
  city: "Mumbai",
  id: 101,
  email: "Rohan@gmail.com",
};

//  user.email
console.log(user["id"]);

for (let key in user) {
  //   console.log(user.name);
  console.log(key, ":", user[key]);
}
