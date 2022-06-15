// Square perimeter
console.group("Square measures");
const squareSide = 5;
console.log("Every side of the square measures " + squareSide + " centimeters");

const squarePerimeter = squareSide * 4;
console.log("Square perimeter is " + squarePerimeter + " centimeters");

const squareArea = squareSide * squareSide;
console.log("Square area is " + squareArea +  " cm^2");
console.groupEnd();

//Triangle
console.group("Triangle measures");
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;

console.log("Triangle sides measure " + triangleSide1 + " cm, " + triangleSide2 + " cm, " + triangleBase + " cm.");
console.log("Triangle height is " + triangleHeight +  " cm");

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log("Triangle perimeter is " + trianglePerimeter + " cm");

const triangleArea = (triangleBase*triangleHeight)/2;
console.log("Triangle area is " + triangleArea + " cm^2");

console.groupEnd();

//Circle
console.group("Circle measures");
//Radius
const radius = 4;
console.log("Circle radius is " + radius + " cm");

//Diameter
const diameter = radius * 2;
console.log("Circle diameter is " + diameter + " cm");

//PI
const PI = Math.PI;
console.log("PI is : "+ PI);

//Circle perimeter (circumference)
const circumference = diameter * PI;
console.log("Circle circumference is " + circumference + " cm");

//Circle area
const circleArea = (radius * radius) * PI;
console.log("Circle area is " + circleArea + " cm^2");

console.groupEnd();