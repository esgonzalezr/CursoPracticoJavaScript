

function calculatePriceWithDiscount(price, discount) {
  let pricesWithDiscount = price - price * (discount / 100);
  return pricesWithDiscount;
  //console.log(pricesWithDiscount);
}

//Option 1: Dropdown list
function onClickCalculateDiscountOP1() {
  let inPrice = Number(document.getElementById("inputPrice").value);
  let inCoupon = document.getElementById("selectCoupon").value;
  let resultOP1 = document.getElementById("resultOP1");
  let inDiscount;
  switch (inCoupon) {
    case "DIS50OFF":
      inDiscount = 50;
      break;
    case "DIS30OFF":
      inDiscount = 30;
      break;
    case "DIS20OFF":
      inDiscount = 20;
      break;
  }
  resultOP1.innerText =
    "The price of your product with discount is: $" +
    calculatePriceWithDiscount(inPrice, inDiscount);
}


/* var findItems = itemArray.find(function(item){
  return item.name == "Book";
}); */


//Option 2: Objects Array
let couponsArray = [
  { name: "DIS50OFF", discount: 50 },
  { name: "DIS30OFF", discount: 30 },
  { name: "DIS20OFF", discount: 20 },
];

function onClickCalculateDiscountOP2() {
  let inPrice = Number(document.getElementById("inputPrice2").value);
  let inCoupon = document.getElementById("inputCoupon").value;
  let resultOP2 = document.getElementById("resultOP2");
  let findCoupon = couponsArray.find(function(coupon){
    return coupon.name == inCoupon;
  });
  if(!findCoupon){
    resultOP2.innerText = "Entered coupon not found."
  }else{
    resultOP2.innerText = `${findCoupon.discount}% OFF applied, the final price is $${calculatePriceWithDiscount(inPrice,findCoupon.discount)}`;
  }
  //console.log(findCoupon);
}

/* function onClickCalculateDiscount() {
  let inPrice = Number(document.getElementById("inputPrice").value);
  let inDiscount = Number(document.getElementById("inputDiscount").value);
  let resultP = document.getElementById("resultP");
  resultP.innerText = "The price of your product with discount is: $" + calculatePriceWithDiscount(inPrice, inDiscount);
} */
