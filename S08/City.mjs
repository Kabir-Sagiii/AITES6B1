export var mycity = "Delhi"; //Named Export

export function changeCity() {
  console.log("changeCity() is called");
}

function newCity() {
  console.log("newCity() is called");
}
export default newCity;
