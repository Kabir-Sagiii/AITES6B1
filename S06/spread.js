var obj1 = {
  pid: 101,
  pName: "Iphone 15",
  price: 148000,
};

var obj2 = {
  ...obj1,
  rating: 4.5,
  price: 200000,
  pName: "Samsung",
};

// console.log(obj2);

var arr1 = ["mumbai", "delhi", "pune", "banglore", "gurgoan", "chennai"];

var arr2 = ["Mohali", ...arr1, "Indore"];

console.log(arr2);
