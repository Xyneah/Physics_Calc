/* Welcome to the magical world of helper functions!
   All the parsing helper functions will be stored here.
   Each function will come with a helpful tag for what it
   does, what it returns, and a short tester to see how
   it works. LET THE FUNCTIONS BEGIN!
*/

/*
   =======================================================
   rmSpaces is a cute function that does exactly what it 
   sounds like it does; removes spaces from a string.

   INPUT:
   STRING (string) - a string with spaces
   
   RETURNS:
   STRING (string) -the same string but without spaces

   ~~~~~~Functions and  Methods to learn more about~~~~~~
   None! I told you it was cute.
   
   =======================================================
*/

var rmSpaces = function(string){
  /* tempStr is an empty string that will house every
     character from string that is not a space */
  var tempStr = "";
    
  /* looping through the string and checking to see
     if each character is a space. If it is, it is 
     added to tempStr. If not, it moves on to the 
     next character without doing anything. */
  for(var char of string){
    if (char != ' '){
      tempStr += char;
    }
  }
  string = tempStr;
  return(string);
}



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
    if ( (stringLoc > string.length) || (stringLoc < 0) ){
	console.log("stringLoc is out of bounds");
	return(null);
    }

    /* Looping through string. Each time a character is '(', beginParenth
       is incremented. If the character is ')', endParenth is incremented,
       and then it is compared to beginParen. If they are equal, the 
       correct ending parenthesis is found. Its location is stored in
       endLoc and returned. */
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
       iterated without finding the correct ending parenthasis. */
    if (endLoc == null){
	console.log("end parenthasis not found");
	return(null);
    }
}




/*
   =======================================================
   beginParen is almost identical to endParen. The only
   difference is that it takes a location in a string and
   works backwards to find the first matching beginning
   parenthasis. It will also return null if boundary 
   conditions are not met, and returns the location of
   the matching parenthasis.

   INPUT:
   STRING (string) - to parse for beginning parenthasis
   INT (stringLoc) - location to begin parsing from

   RETURNS:
   INT (beginLoc) - location of beging parenthasis

   *OR*

   null - if either stringLoc is out of bounds or no
          matching beginning parenthasis is found

   ~~~~~~Functions and  Methods to learn more about~~~~~~
   String Property: length
   https://www.w3schools.com/Jsref/jsref_length_string.asp

   =======================================================
*/

var beginParen = function(string, stringLoc){
    var beginParenth = 0;
    var endParenth = 0;
    var beginLoc;
    var i = stringLoc;
    if ( (stringLoc > string.length) || (stringLoc < 0) ){
	console.log("stringLoc is out of bounds");
	return(null);
    }
    /* Instead of incrementing to the end of the string, 
       we decrement to the beginning of the string to
       find the beginning parenthasis */
    for(i; i >= 0; i--){
	if (string[i] == ')') {
	    endParenth++;
	}
	else if (string[i] == '(') {
	    beginParenth++;
	    if (beginParenth == endParenth){
		beginLoc = i;
		return(beginLoc);
	    }
	}
    }
    console.log("beginning parenthesis not found");
    return(null);
}

var chunkSize = function(string, stringLoc, direction){
    var size = 0;
    var i = stringLoc;
    if (direction == 'forward'){
	for (i; i < string.length; i++){
	    if (string[i] == '('){
		size += endParen(string, i) - i + 1;
		i = endParen(string, i);
	    }
	    else if( (string[i] == '+') || (string[i] == '-') ||
		     (string[i] == '/') || (string[i] == '*')  ){
		break;
	    }
	    else{
		size++;
	    }
	}
	return(size);
    }
    if (direction == 'backward'){
	for(i; i >= 0; i--){
	    if (string[i] == ')'){
		size += i - beginParen(string, i) + 1;			    
		i = beginParen(string, i);
	    }
	    else if( (string[i] == '+') || (string[i] == '-') ||
		     (string[i] == '/') || (string[i] == '*') ){
		break;
	    }
	    else{
		size++;
	    }
	}
	return(size);
    }
    console.log("Something went wrong");
    return(null);
}

stringy = "2+sin(3+(4+pi))+23";
console.log(stringy);
console.log(stringy.slice(2, 2+chunkSize(stringy, 2,'forward')) + ' is ' + chunkSize(stringy, 2,'forward') + ' characers long');
console.log(stringy.slice(15-chunkSize(stringy, 14,'backward'), 15) + ' is ' + chunkSize(stringy, 14,'backward') + ' characers long');






/*
	    
var slashToOver = function(string){
    var numerator;
    var denominator;
    var i = 0;
    for(i; i < string.length; i++){
	if (string[i] == '/'){
	    if(string[i-1] != ')'){
		numerator = string[i-2];
	    }
	    else{
		
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

/* CODE GRAVEYARD SPOOOOOKY! */

/*
var slashToOver = function(string){
    var i = 0;
    var digit;
    var offset;
    var endPar;
    
    for(i; i < string.length; i++){
	if ( string[i] == '/'){
	    if (string[i+1] != '('){
		offset = 0;
		digit = i+1;
		for(digit; digit < string.length; digit++){
		    if(!isNaN(string[digit]) ){
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
		endPar = endParen(string, i);
		string = string.slice(0, endPar).concat('}',
			 string.slice(endPar+1, string.length));
		string = string.replace('/(', '\\over{');
	    }
	}
    }
    return(string);
}
*/
