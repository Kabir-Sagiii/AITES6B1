function f1() {
  let city = "mumbai";

  if (true) {
    let state = "MH";
    const id = 101;
    var country = "India";
  }
  console.log(state); //Invalid
  console.log(country); //Valid

  if (true) {
    console.log(city); //valid
    console.log(state); //Invalid
    console.log(country); //valid
  }
}

f1();
