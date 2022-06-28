array = [22, 1, 2, 2, 2, 3, 1, 2, 3, 4, 1];

const arrayCount = {};

array.map(function (element) {
  if (arrayCount[element]) {
    arrayCount[element] += 1;
  } else {
    arrayCount[element] = 1;
  }
});