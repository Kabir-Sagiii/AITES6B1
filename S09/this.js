var obj1 = {
  c: 100,
};

var obj2 = {
  c: 200,
};
function add(x, y) {
  var result = x + y + this.c;
  console.log(result);
}

add(10, 30); // obj1

add(10, 30); // obj2
