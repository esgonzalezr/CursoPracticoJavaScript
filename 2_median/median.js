array = [465214, 100, 250, 300, 312500, 2000000];

function calcMedian(listNumber) {
  let lengthList = listNumber.length;
  let sortedList = listNumber.sort((a, b) => a - b);
  //console.log("Sorted array is: " + sortedList);
  let median, middle1, middle2 = 0;

  if (lengthList % 2 == 0) {
    middle1 = sortedList[lengthList / 2 - 1];
    middle2 = sortedList[lengthList / 2];
    //console.log(`Middle1 =${middle1} and Middle2 = ${middle2}`);
    median = (middle1 + middle2) / 2;
  } else {
    median = sortedList[Math.floor(lengthList / 2)];
  }
  return median;
}