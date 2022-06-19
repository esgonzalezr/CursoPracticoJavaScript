//Isoseles triangle height calc function
function isoHeight(side1, side2, side3) {
  var base;
  var height;
  if (side1 == side2) {
    base = side3;
    height = Math.sqrt(side1 ** 2 - base ** 2 / 4);
  } else if (side1 == side3) {
    base = side2;
    height = Math.sqrt(side1 ** 2 - base ** 2 / 4);
  } else if (side2 == side3) {
    base = side1;
    height = Math.sqrt(side2 ** 2 - base ** 2 / 4);
  } else {
    height = "Error, no equal sides, this is not a Isosoles triangle";
  }
  return "Isoseles height is: " + height;
}

//Isoseles triangle height calc function
function isoHeight(side1, side2, base) {
  if (side1 == side2 && side1 != base) {
    var height = Math.sqrt((side1**2)-((base**2)/4));    
    console.log("Isoceles triangle height is: " + height);
  }else{
    console.log("It isn't an Isoceles triangle");
  }
}

function potencia(number) {
  return number ** 2;
}
