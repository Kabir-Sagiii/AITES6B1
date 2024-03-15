function f1() {
  var city = "delhi";

  if (true) {
    var id = 101;
  }

  if (true) {
    console.log(id, city);
  }
  console.log(id);

  function fn() {
    var gender = "male";
    console.log(city, id);
    switch (1) {
      case "1":
        console.log(gender);
    }
  }

  console.log(gender); //invalid
}

// console.log(city, id);

f1();
