// Square perimeter

//Static solution
console.group("Square measures");
/*const squareSide = 5;
console.log("Every side of the square measures " + squareSide + " centimeters");

const squarePerimeter = squareSide * 4;
console.log("Square perimeter is " + squarePerimeter + " centimeters");

const squareArea = squareSide * squareSide;
console.log("Square area is " + squareArea +  " cm^2");*/

//Dynamic solution
function squarePerimeter(squareSide) {
  return squareSide * 4;
}

function squareArea(squareSide) {
  return squareSide * squareSide;
}

console.groupEnd();

//Triangle
console.group("Triangle measures");
/* const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5; */

/* console.log("Triangle sides measure " + triangleSide1 + " cm, " + triangleSide2 + " cm, " + triangleBase + " cm.");
console.log("Triangle height is " + triangleHeight +  " cm"); */

/* const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log("Triangle perimeter is " + trianglePerimeter + " cm"); */

/* const triangleArea = (triangleBase*triangleHeight)/2;
console.log("Triangle area is " + triangleArea + " cm^2"); */

function trianglePerimeter(side1, side2, base) {
  return side1 + side2 + base;
}

function triangleArea(base, height) {
  return (base * height) / 2;
}

console.groupEnd();

//Circle
console.group("Circle measures");
/* //Radius
const radius = 4;
console.log("Circle radius is " + radius + " cm");

//Diameter
const diameter = radius * 2;
console.log("Circle diameter is " + diameter + " cm");

//PI
const PI = Math.PI;
console.log("PI is : " + PI);

//Circle perimeter (circumference)
const circumference = diameter * PI;
console.log("Circle circumference is " + circumference + " cm");

//Circle area
const circleArea = (radius * radius) * PI;
console.log("Circle area is " + circleArea + " cm^2");
 */

function circleDiameter(radius) {
  return radius * 2;
}

function circlePerimeter(radius) {
  return circleDiameter(radius) * Math.PI;
}

function circleArea(radius) {
  return radius * radius * Math.PI;
}

// Receiving data from HTML form
function calculateSquarePerimeter() {
  //Retrieve the complete html tag
  const input = document.getElementById("inputSquare");
  //Select only the value of the retreived tag
  const value = input.value;
  const perimeter = squarePerimeter(value);
  alert("Perimeter square is: " + perimeter);
}

function calculateSquareArea() {
  const input = document.getElementById("inputSquare");
  const value = input.value;

  const perimeter = squareArea(value);
  alert("Area square is: " + perimeter);
}

function calculateTrianglePerimeter() {
  const inSide1 = Number(document.getElementById("inputTriangleSide1").value);
  const inSide2 = Number(document.getElementById("inputTriangleSide2").value);
  const inBase = Number(document.getElementById("inputTriangleBase").value);
  const perimeter = trianglePerimeter(inSide1, inSide2, inBase);
  alert("Triangle perimeter is: " + perimeter);
}

function calculateTriangleArea() {
  const inBase = Number(document.getElementById("inputTriangleBase").value);
  const inHeight = Number(document.getElementById("inputTriangleHeight").value);
  alert("Triangle area is: " + triangleArea(inBase, inHeight));
}

function calculateCircleDiameter() {
  const radius = Number(document.getElementById("inputCircle").value);
  alert("Circle diameter is: " + circleDiameter(radius));
}

function calculateCirclePerimeter() {
  const radius = Number(document.getElementById("inputCircle").value);
  alert("Circle perimeter is: " + circlePerimeter(radius));
}

function calculateCircleArea() {
  const radius = Number(document.getElementById("inputCircle").value);
  alert("Circle area is: " + circleArea(radius));
}

console.groupEnd();
