var city = "Delhi"; // Global Scope

function f1() {
  var gender = "male"; // function scope
  console.log(city);
  function fn() {} // function scope
  fn();
}
fn(); // Invalid

function f2() {
  console.log(gender); //Invalid
  city = "Hyderabad";
  f1();
  fn(); //Invalid
  if (true) {
  } else {
  }
}

f1();
