var info = {
  uname: "Raj Verma",
  city: "delhi",
  id: 101,
  email: "raj@gmail.com",
};

for (let keyname in info) {
  console.log(keyname, ":", "value");
}

var data = Object.keys(info);
console.log(data);
