var price = 987;

var qty = 5;

function totalAmount() {
  console.log(price * qty);
}

function print() {
  console.log(qty, price);
}

module.exports = { totalAmount, print };
