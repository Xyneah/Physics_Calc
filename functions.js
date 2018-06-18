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
		endLoc = i+1;
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

var stringy = "5*((1/2)+sin(2*pi*(5+4))+7)";

console.log(stringy);
for (var i = 0; i < stringy.length; i++){
    if (stringy[i] == '('){
	console.log(stringy.slice(i, endParen(stringy, i)));
    }
}



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
    for(i; i < string.length; i++){
	if ( string[i] == '/'){
	    if (string[i+1] != '('){
		string = string.slice(0,i).concat('\\over{',
		string.slice(i+1, i+2), '}', string.slice(i+2, string.length));
	    }
	}
	else{
	    string = string.replace('/(', '\\over{');
	}
    }
    return(string);
}
