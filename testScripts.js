
/*
console.log("\n~~~Test Script for rmSpaces~~~");

var stringx = "I  A m  A  C u t e  S t r i n g !";  

console.log("Before: " + stringx);
console.log("After: " + rmSpaces(stringx));
*/

/*
console.log("\n~~~Test Script for endParen~~~");

var stringx = "3/(4+(5-2)";

var stringy = "5*((1/23)+sin(2*pi*(5+4))+7)";

console.log("\nTesting case of mismatched parenthases:");
console.log("stringx: " + stringx);
console.log(endParen(stringx, 2) + "\n");

console.log("Testing case where strLoc (500) is way out of bounds:");
console.log("stringy: " + stringy);
console.log(endParen(stringy, 500) + "\n");

console.log("Testing case where strLoc (-5) is negative:");
console.log("stringy: " + stringy);
console.log(endParen(stringy, -5) + "\n");


console.log("\nTesting how endParen does parsing a string with " +
	    "many layers of parenthasies by \niterating through " +
	    "stringy. If a '(' is read, displays its end parenthais\n" +
	    "along with everything in the middle.\n");
console.log("stringy: " + stringy);
for (var i = 0; i < stringy.length; i++){
    if (stringy[i] == '('){
	console.log(stringy.slice(i, endParen(stringy, i)+1));
    }
}
*/

/*
console.log("\n~~~Test Script for beginParen~~~");

var stringx = "3/4+(5-2+5))";

var stringy = "5*((1/23)+sin(2*pi*(5+4))+7)";

console.log("\nTesting case of mismatched parenthases:");
console.log("stringx: " + stringx);
console.log(beginParen(stringx, stringx.length) + "\n");

console.log("Testing case where strLoc (500) is way out of bounds:");
console.log("stringy: " + stringy);
console.log(beginParen(stringy, 500) + "\n");

console.log("Testing case where strLoc (-5) is negative:");
console.log("stringy: " + stringy);
console.log(beginParen(stringy, -5) + "\n");

console.log("\nTesting how beginParen does parsing a string with " +
	    "many layers of parenthasies by \niterating through " +
	    "stringy. If a ')' is read, displays its beginning parenthais\n" +
	    "along with everything in the middle.\n");
console.log("stringy: " + stringy);
for (var i = stringy.length; i > 0; i--){
    if (stringy[i] == ')'){
	console.log(stringy.slice(beginParen(stringy, i), i+1));
    }
}
*/

