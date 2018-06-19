/* Welcome to the magical world of helper functions!
   All the parsing helper functions will be stored here.
   Each function will come with a helpful tag for what it
   does, what it returns, and a short tester to see how
   it works. LET THE FUNCTIONS BEGIN!
*/

/* function tag template */

/*
   =======================================================
   Description

   INPUT:
   
   RETURNS:
   
   ~~~~~~Functions and  Methods to learn more about~~~~~~
   
   =======================================================
*/









/*
   =======================================================
   endParen is a function that takes a string (string),
   and an integer location (stringLoc), preferably a
   beginning parenthasis inside the string, and returns
   an integer location of its matching end parentasis
   (endLoc). If it is not found or if stringLoc is larger
   than the length of the string, null is returned.

   INPUTS:
   STRING (string) - to parse for ending parenthasis
   INT (stringLoc) - where to start parsing the string

   RETURNS:
   INT (endLoc) - location of correct end parentisis in
                  the string
   *OR*

   null - if stringLoc is greater than the length of the 
          string or if correct end parenthasis is not 
	  found
   
   ~~~~~~Functions and Methods to learn more about~~~~~~
   String Property: length
   https://www.w3schools.com/Jsref/jsref_length_string.asp

   =======================================================
*/

var endParen = function(string, stringLoc){
    /* int beginParenth keeps track of number of beginning parentases */
    var beginParenth = 0;
    /* int endParenth keeps track of number of ending parentases */
    var endParenth = 0;
    var endLoc; /* stores location of correct end parenthasis */
    var i = stringLoc; /* start the iteration at location of interest */ 

    /* checking for viable strLoc */
    if (stringLoc > string.length){
	console.log("stringLoc is out of bounds");
	return(null);
    }

    /* Looping through string. Each time a character is '(', beginParenth
       is incremented. If the character is ')', endParenth is incremented,
       and then it is compared to beginParen. If they are equal, the 
       correct ending parenthesis is found. Its location is stored in
       endLoc and returned.
    */
    for(i; i < string.length ; i++){
	if (string[i] == '(') {
	    beginParenth++;
	}
	
        else if (string[i] == ')'){
	    endParenth++;
	    if (endParenth == beginParenth){
		endLoc = i;
		return(endLoc);
	    }
	}
    }
    
    /* If the function gets here, it means the string has been fully 
       iterated without finding the correct ending parenthasis.
    */
    if (endLoc == null){
	console.log("end parenthasis not found");
	return(null);
    }
}


/*
console.log("~~~Test Script for endParen~~~");

var stringx = "3/(4+(5-2)";

var stringy = "5*((1/23)+sin(2*pi*(5+4))+7)";

console.log("\nTesting case of mismatched parenthases:");
console.log("stringx: " + stringx);
console.log(endParen(stringx, 2) + "\n");

console.log("Testing case where strLoc (500) is way out of bounds:");
console.log("stringy" + stringy);
console.log(endParen(stringy, 500) + "\n");


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






var rmSpaces = function(string){
  var tempStr = "";
  for(var char of string){
    if (char != ' '){
      tempStr += char;
    }
  }
  string = tempStr;
  return(string);
}

var slashToOver = function(string){
    var i = 0;
    var d;
    var offset;
    
    for(i; i < string.length; i++){
	if ( string[i] == '/'){
	    if (string[i+1] != '('){
		offset = 0;
		d = i+1;
		for(d; d < string.length; d++){
		    if(!isNaN(string[d]) ){
			offset++;
		    }
		    else {
			break;
		    }
		}
		offset++;
		string = string.slice(0,i).concat('\\over{',
		string.slice(i+1, i+offset), '}',
		string.slice(i+offset, string.length));
	    }
	    else{
		var endPar = endParen(string, i);
		string = string.slice(0, endPar).concat('}',
			 string.slice(endPar+1, string.length));
		string = string.replace('/(', '\\over{');
	    }
	}
    }
    return(string);
}

/*
var stringy = "x/2 + y/4 + z/1333333336";
stringy = rmSpaces(stringy);
console.log(stringy);
console.log(slashToOver(stringy));
*/
