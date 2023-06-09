/*Q1 Arrays*/
let  sum = 0;
let average = 0;
const grades = [56, 87, 99, 40];
grades.push(68);
grades[3] = 60;
document.getElementById("grades").innerHTML = "Array of marks = [" + grades + "]";

for (mark of grades) {
  sum += mark;
}
average = sum / 4;
document.getElementById("av").innerHTML = "Average = " + average;

/*Q2 Objects*/
text = "";
let dots="";
const cars = {carType:"Jag", carBrand:"S-type", yearOfMake:2000, Wheels:4, Environmental:"-true" };
for (idx in cars) {
  {for ( let i = 0; i < (30 - idx.length); i++) {dots += "- "}} 
  text += idx + dots + cars[idx]  + "<br>";
  dots = "";
}

document.getElementById("mycars").innerHTML = text;