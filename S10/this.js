var obj1 = {
  c: 100,
};

var obj2 = {
  c: 500,
};

var obj3 = {
  c: 700,
};

function add(x, y) {
  var result = x + y + this.c;
  console.log(result);
}

add.call(obj1, 100, 100); // 300

add.call(obj2, 100, 100); // 700

add.apply(obj2, [50, 50]); //600

var add = add.bind(obj3, 30, 30); //760
add(); //730
