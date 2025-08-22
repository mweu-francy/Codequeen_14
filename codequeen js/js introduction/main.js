/**
*this is how you declare variables
*/
//var 
var name = "Joan";
console.log(name);
//let  allows you to change a value leater
let age=30;
age =31;
console.log(age);
//const -does not allow you to change values to change later
const pi =3.14;
console.log(pi);
// data types
//strings - when declaring a string use double quotes or single quotes
let  greeting ="Hello, how are you doing today?"
//nummber(integer or float)
//integer
let year =2024;
console.log(year);
//float
let price =20.5;
console.log(price);
// boolean (true or false)
let isLoggedIn=true;
console.log(isLoggedIn);
//null(explicitly no value)
let emptyValue= null;
console.log(emptyValue);

//objects
let person ={
    firstName : "Jane",
    lastName: "Doe",
    age:25,
    isStudent :true
}
console.log(person);

//arrays
let fruits =["Apple","Banana", "Orannge"];
console.log(fruits);
// arrays can be a ixture of different data types
let mixedArray =["Apple","null", "3" ,  "true", "Orannge"];
console.log(mixedArray);


//Concantentaion - joining two names to make one name
let surname ="Mweu";
let givenName="Francisca";
const fullName = surname + " " + givenName;
const nameStatement = "My name is " + " " +surname + " " + givenName;
console.log(fullName);
console.log(nameStatement);

/* arithmetic operators*/
// addition

let x = 6;
let y = 3;
let z = x + y;
console.log(z);

//multiplication
let a = x * y;
console.log(a);

//subtraction
let b = x - y;
console.log(b);

//division
let c = x / y;
console.log(c);

// modulus
let d =x%y;
console.log(d);

//increment
x++;
console.log(x++);
c++;
console.log(c++);

//decrement
y--;
console.log(y--);

/* assignment operators*/
//+= operator
let e = 11;
e += 6;
console.log(e);

//-= operator
let f=10
f -= 6;
console.log(f);

// *= operator
let g=10
g *= 6;
console.log(g);

// **= exponential operator
let h = 10;
h **= 5;
console.log(h);

// /= division assignment operator
let i = 10;
i /= 5;
console.log(i);

//%= Operator
let j = 10;
j %= 5;
console.log(j);

/* logical assignment operators*/
//&&= Operator

//The ||= Operator
//The ??= Operator

// comparison operators
//== equal to- checks only the value
//=== strict equal - looks at datattype and value if they are the same

/* conditional statement*/
/* if  ststement*/
let score; 
score =85;

/* one way of writing if statement*/
let condition = score>50;
if (condition){
// code to be eecuted if conditon is true
console.log("Congratulations! You Passed")
}else{ console.log("FAIL")}


/* second way of writing if statement*/
if(score >=50){
    console.log("Congratulations! You Passed")
}else{ // code to executed if conditon is false
    console.log("FAIL")}

let temperature; 
temperature=30;

if (temperature >=28){
// code to be eecuted if conditon is true
console.log("Turn off room heater")
}else{ console.log("turn on room heater")}

let value; 
value="30";
//does not execute === strict equal - looks at datattype and value if they are the same
if (value ===30){
// code to be eecuted if conditon is true
console.log("They are equal")
}else{ console.log("not eaqual")}
//== equal to- checks only the value

if (value ==30){
// executes. code to be eecuted if conditon is true
console.log("They are equal")
}else{ console.log("not eaqual")}

// not equal to and strictly not equal to
let val;
val=20;
if (val!="20"){
    console.log("true,they are not equal") // this will not execute
}
if (val!=="20"){
    console.log("true,they are not equal")
}

// more than two condtions
//else if statement- specify a new conditon if the first one is false
let num;
num= 75;
if(num>95){
    console.log("Grade A");
}else if(num>=85){
    console.log("GRADE B")
}else if(num>=75){
    console.log("GRADE C")}
else{
    console.log("You have failed !")
}

/*FUNCTIONS*/
//block of code used to perform a specific task or caluclate a value
// defined with a "function" keyword
//function declaration---- function_keyword funtionname(parameters){ code to be executed}
function functionName(){
    console.log(" this is a function declaration");
}

// calling a function
functionName();

//function with parameters
function greet(name){
    console.log("Hello, how are you"+" "+ name+ "?");
}
greet("John");
greet("maryam");
greet("liam");
greet("Leo");

function greet1(name,age){
    console.log("Hello, my name is"+" "+ name+ " " + "and I am"+" "+age+" "+"years old");
}
greet1("John",3);
greet1("maryam",4);
greet1("liam",5);
greet1("Leo",6);

//function with return value
function add(a,b){
    return a+b;
}
console.log(add(3,5));
console.log(add(30,5));
//function for subtraction, multiplication, etc
