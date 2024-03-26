var obj1 = {
  x: 100,
  y: 200,
  fn: function () {
    console.log(this);
  },
};

obj1.fn();

var obj2 = {
  a: 100,
  b: 200,
  f2: () => {
    console.log(this);
  },
};
obj2.f2();
