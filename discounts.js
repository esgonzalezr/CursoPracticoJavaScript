function calculatePriceWithDiscount(price, discount) {
  let pricesWithDiscount = price - price * (discount / 100);
  return pricesWithDiscount;
  //console.log(pricesWithDiscount);
}

function onClickCalculateDiscount() {
  let inPrice = Number(document.getElementById("inputPrice").value);
  let inDiscount = Number(document.getElementById("inputDiscount").value);
  let resultP = document.getElementById("resultP");
  resultP.innerText = "The price of your product with discount is: $" + calculatePriceWithDiscount(inPrice, inDiscount);
}

let originalPrice = 120;
let discount = 18;

let pricesWithDiscount = originalPrice - originalPrice * (discount / 100);

/* console.log({
    Price: originalPrice,
    Discount: discount,
    PriceAfterDiscount: pricesWithDiscount
}); */
