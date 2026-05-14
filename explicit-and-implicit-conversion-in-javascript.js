/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


//Task 1: Debug the code

// Here we need to Convert "5" to a number before subtraction
let result = Number ("5") - 2; // Therefore the Number("5") ensures numeric math value. 

console.log("The result is: " + result);

// Lets convert "false" string to a boolean expression. 
let isValid = (String("false")).toLowerCase()===("true"); // Now isValid becomes false, because the string is literally "false"
if (isValid) {
    console.log("This is valid!");
}
else { 
  console.log("This is NOT valid");
}

// Here we need to convert age to a number making addition
let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);


//Task 2: Examples of Type Conversion
let output = "10" - 3;  
console.log(output); 

let Gamelevel = "5";
let totalLevel = Number(Gamelevel) + 5;
console.log("YourGameLevelIs:"+ totalLevel);
