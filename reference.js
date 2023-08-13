var a = [1, 2, 3, 4, 5];
// var b = a; // here b isn't copying but referencing i.e. any changes in b will affect a and vice a versa.

var b = [...a]; // this is copying using spread operator
b.pop();
console.log(a, b);

const obj = { name: "Ayush" };
const copyobj = { ...obj };

console.log(copyobj);
