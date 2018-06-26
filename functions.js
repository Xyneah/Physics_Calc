/* Welcome to the magical world of helper functions!
   All the parsing helper functions will be stored here.
   Each function will come with a helpful tag for what it
   does, what it returns, and a short tester to see how
   it works. LET THE FUNCTIONS BEGIN! */

/*
   =======================================================
   rmSpaces is a cute function that does exactly what it 
   sounds like it does: removes spaces from a string.

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


/*
   =======================================================
   chunkSize is a function that takes a string, a starting
   location in the string, and the direction (forward or
   backward) in which to search the string. The function
   is then walked in the specified direction, and the size
   is incremented accordingly. If the beginning parenthasis
   if found when walking forward, or ending parenthasis 
   when walking backwards, the contents of it are skipped
   over, and the size is incremented by the size of the
   contents skipped over. In short, stuff in parenthases
   are counted as a chunk. Otherwise, a chunk is ended by
   a mathematical operator, an ending parenthasis when
   walking forward, beginning parenthasis when walking 
   backward, or the beginning/end of the string is hit.
   Once this happens, the size of the chunk is returned.
 
   INPUT:
   STRING (string) - string to walk
   STRING (stringLoc) - starting location in the string
   STRING (direction) - only two viable options. 'f' for
                        forward, or 'b' for backward

   RETURNS:
   INT (size) - size of the chunk

  
   ~~~~~~Functions and  Methods to learn more about~~~~~~

   String Property: length
   https://www.w3schools.com/Jsref/jsref_length_string.asp
   =======================================================
*/

var chunkSize = function(string, stringLoc, direction){
    var size = 0;
    var i = stringLoc;
    if (direction == 'f'){ /* f is for forward */
	
	/* looping forward in the string. Checking first for
	   a portion to skip over, then for an ending
	   character, and incrementing if none are found. */
	for (i; i < string.length; i++){
	    if( (string[i] == '(') || (string[i] == '{') ){
		size += (endParen(string, i) - i) + 1;
		i = endParen(string, i);
	    }
	    else if( (string[i] == '+') || (string[i] == '-') ||
		     (string[i] == '/') || (string[i] == '*') ||
		     (string[i] == ')') ){
		break;
	    }
	    else{
		size++;
	    }
	}
	return(size);
    }
    /* same deal as above, but backwards */
    if (direction == 'b'){ /* b is for backward */
	for(i; i >= 0; i--){
	    if( (string[i] == ')') || (string[i] == '}') ){
		size += (i - beginParen(string, i)) + 1;			    
		i = beginParen(string, i);
	    }
	    else if( (string[i] == '+') || (string[i] == '-') ||
		     (string[i] == '/') || (string[i] == '*') ||
		     (string[i] == '(') ){
		break;
	    }
	    else{
		size++;
	    }
	}
	return(size);
    }
    console.log("Invalid direction entered. Enter either 'f' for forward, or 'b' for backward");
    return(null);
    
}


/*
   =======================================================
   slashToFrac converts 'numerator/denominator' (what a
   user would input for division, and converts it to 
   '\frac{numerator}{denominator}' LaTeX notation. This 
   function iterates through the string, and if a '/' is
   found, goes through the following process. First the
   numerator is found. If the numerator is in parenthases, 
   the contents are declared the numerator and the
   parenthases are trimmed. If not, the preceeding chunk
   is declared the numerator. The size and index of the
   beginning of the numerator are stored, and used to
   construct the final string. The same process is done
   for the denominator, except for the fact that it is the
   END of the denominator that is saved. Then the string
   is reconstructed in this order:

   1. Previous string before '/'
   2. \frac{numerator}{denominator}
   3. Portion of original string after the denominator

   This process is repeated until no more '/' exists, and
   the modified string is returned.

   INPUT:
   STRING (string) - original string to be parsed
   
   RETURNS:
   STRING (string) - string after parsing
   
   ~~~~~~Functions and  Methods to learn more about~~~~~~
   String Property: length
   https://www.w3schools.com/Jsref/jsref_length_string.asp

   String Method: string.slice()
   https://www.w3schools.com/jsref/jsref_slice_string.asp

   String Method: string.concat()
   https://www.w3schools.com/jsref/jsref_concat_string.asp
   =======================================================
*/

 var slashToFrac = function(string){
    var num; /* numerator */
    var sizeOfNum; /* character length of numerator */
    var numIndex; /* where in the string the numerator BEGINS */
    
    /* similar pattern for denominator */
    var denom; /* denominator */
    var sizeOfDenom; /* character length of denominator */
    var denomIndex; /* where in the string the denominator ENDS */
    var i = 0;
    for (i; i < string.length; i++){
	if (string[i] == '/'){
	    /* case where the numerator is not in parenthases */
	    if (string[i-1] != ')'){
		sizeOfNum =  chunkSize(string, i-1,'b');
		numIndex = i - sizeOfNum;
		num = string.slice(i-sizeOfNum, i);
	    }
	    else{
		/* case where numerator is in parenthases */
		num = string.slice(beginParen(string, i-1), i);
		numIndex = i - num.length;
		num = num.slice(1, num.length-1);
	    }
	    /* case where denominator is not in parenthases */
	    if (string[i+1] != '('){
		sizeOfDenom =  chunkSize(string, i+1,'f');
		denomIndex = i + sizeOfDenom;
		denom = string.slice(i+1, denomIndex+1);
	    }
	    else{
		/* case where denominator is in parenthases */
		denom = string.slice(i+1, endParen(string, i)+1);
		denomIndex = i + denom.length;
		denom = denom.slice(1, denom.length-1);				   	
	    }
	    /* reconstruction of the string */
	    string = string.slice(0, numIndex).concat("\\frac{" + num + "}{" + denom + "}" +
		     string.slice(denomIndex+1, string.length));
	}
    }
     return(string);
}

var squareRoot = function(string){
    var oldStr = string;
    var newStr = "";
    var beginRoot;
    var endRoot;
    var contentIndex;
    var contents;
    var safety = 0;
    oldStr = string.replace(/sqrt/g, "\\sqrt");
    while ((/\\sqrt/.test(oldStr) == true) && (safety<5)){
	beginRoot = oldStr.match(/\\sqrt/).index;
	endRoot = endParen(oldStr, beginRoot);
	contentIndex = beginParen(oldStr, endRoot);
	contents = oldStr.slice(contentIndex + 1, endRoot);
	newStr = newStr.concat(oldStr.slice(0, contentIndex) + '{' + contents + '}');
	oldStr = oldStr.slice(endRoot+1, oldStr.length);
	/*console.log("first match: " + beginRoot);
	console.log("end of root: " + endRoot);
	console.log("contents: " + contents);
	console.log("newStr: " + newStr);
	console.log("oldStr: " + oldStr); */
	safety++;
    }
    string = newStr.concat(oldStr);
    //console.log("passes: " + safety);
    return(string);
}

   
var stringy = "cobras + sqrt[3](y+(7+x))/sqrt(x)";

console.log("before: " + stringy);
stringy = rmSpaces(stringy);
console.log(stringy);
stringy = slashToFrac(stringy);
console.log(stringy);
stringy = squareRoot(stringy);
console.log("after: " + stringy);


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
