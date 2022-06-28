const array1 = [100, 200, 300, 120, 500];

function calcAvg(inArray) {
  let sumatoryArray = 0;
  let lengthArray = inArray.length;

  /* This is the first way to calculate the sumatory of an array.
  
  for (let i = 0; i < inArray.length; i++) {
    sumatoryArray += inArray[i];
  }*/

  //This is another way to calculate the sumatory of an array using an array method.
  sumatoryArray = inArray.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });

  const avg = sumatoryArray / lengthArray;
  return avg;
}


