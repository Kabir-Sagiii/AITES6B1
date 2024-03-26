var fn = () => {
  console.log("My first Arrow Function");
};

fn();

const f1 = (x, y) => {
  console.log(x, y);
  console.log(this); // Global object
};

f1(10, "AIT");
