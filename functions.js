/* Welcome to the magical world of helper functions!
   All the parsing helper functions will be stored here.
   Each function will come with a helpful tag for what it
   does, what it returns, and a short tester to see how
   it works. LET THE FUNCTIONS BEGIN!
*/

var endParen = function(string, stringLoc){
    var beginParen = 0;
    var endParen = 0;
    var endLoc;
    var i = stringLoc;
    for(i; i <= string.length ; i++){
	if (string[i] == '(') {
	    beginParen++;
	}
	
        else if (string[i] == ')'){
	    endParen++;
	    if (endParen == beginParen){
		endLoc = i;
		break;
	    }
	}
    }
    if (endLoc == null){
	console.log("end paren not found");
	return(null);
    }
    return(endLoc);
}


/*
var stringy = "5*((1/23)+sin(2*pi*(5+4))+7)";

console.log(stringy);
for (var i = 0; i < stringy.length; i++){
    if (stringy[i] == '('){
	console.log("End paren at: " + endParen(stringy, i));
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

var stringy = "x/2 + y/4 + z/1333333336";
stringy = rmSpaces(stringy);
console.log(stringy);
console.log(slashToOver(stringy));
