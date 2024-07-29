let a=10;
if (a%2==0){
    console.log("the number is even")

}
else{
    console.log("the number is odd")
}
// ------ number or not -------
let b="6";
if(typeof b==="number"){
    console.log("the variable is number");
}
else{
    console.log("it is not a number");
}
// ----greatest of two number ------
const c=10;
const d=20;
if(c<d){
    console.log("d is greater");
}
else{
    console.log("c is greater")
}

const ab=40;
const bc=70;
const cd= 60;

if(ab>bc){
    console.log("ab is greater");
}
else if (bc>cd){
    console.log("bc is greater");
}
else{
    console.log("cd is greater")
}
const side1=30;
const side2=30;
const side3=30;

if(side1==side2&&side2==side3){
console.log("equilateral triangle");
}
else if(side1==side2||side2==side3)
{

    console.log("isoceles triangle");
}
else{
    console.log("scalene.triangle");
}
// let num1=20;
// let num2=10;
// console.log("add",num1+num2);
// console.log("sub",num1-num2);
// console.log("multiply",num1*num2);
// console.log("division",num1/num2);
// console.log("modulus",num1%num2);

// -------- operators  --------
function work(num1, num2, operation) {
    switch (operation) {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            return num1 / num2;
        case "modulus":
            return num1 % num2;
        default:
            return "Invalid operation";
    }
}
let num1 = 10;
let num2 = 5;
let operation = "add";
console.log(work(num1, num2, operation)); 

operation = "subtract";
console.log(work(num1, num2, operation));

operation = "multiply";
console.log(work(num1, num2, operation)); 

operation = "divide";
console.log(work(num1, num2, operation));

operation = "modulus";
console.log(work(num1, num2, operation));

operation = "exponent";
console.log(work(num1, num2, operation));

// ------- leap year ------
let year=2000;
if(year%400==0){
    console.log("it is a leap year");
}
else{
    console.log("it is not a leap year");
}

let mark=50;
if(mark>91){
    console.log("s grade");
}
else if(mark>81){
    console.log("a grade");

}
else if(mark>71){
    console.log("b grade");

}
else if(mark>61){
    console.log("c grade");

}
else if(mark>51){
    console.log("d grade");

}
else{
    console.log("failed ");

}
let month=9;
if (month<1||month>12){
    console.log("invalid month");
}
else if(month==2){
    console.log("it has 28 or 29 days ");
}
else if([month==4,6,9,11]){
    console.log("it has 30 days");
}
else {
    console.log("it has 31 days");
}

// -------- task 4 --------

let aa=10,i;
for(i=1;i<=aa;i++){
    console.log("number",i)
}
//-----------------------------------
const arr = [[1, 2], [3, 4], [5, 6]];

for (let l = 0; l < arr.length; l++) {
  for (let j = 0; j < arr[l].length; j++) {
    console.log(arr[l][j]);
  }
}
//-------------------------------------


function printEvenNumbers(numberz) 
{
  for (let h = 0; h < numberz.length; h++) 
  {
    if (numberz[h] % 2 == 0) 
    {
      console.log(`The even number : ${numberz[h]}`);
    }
  }
}
const numberz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
printEvenNumbers(numberz);


//--------------------------------------------



function calculatePower(base, exponent) {
    let result = 1;
    for (let i = 0; i < exponent; i++) {
        result *= base;
    }
    return result;
}
const base = 2;
const exponent = 3;
const result = calculatePower(base, exponent);
console.log(`${base} to the power of ${exponent} = ${result}`);


// -----------------------------
let baba=2
let papa=4
for(let i=baba;i<=papa;i+baba){
    baba=baba*i
    console.log(baba);
}
console.log(baba);





