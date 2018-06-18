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
		string = string.slice(0,i).concat('\\over{', string.slice(i+1, i+2), '}', string.slice(i+2, string.length));
	    }
	}
    }
    return(string);
}
str = "5 *7 / 3 + 8";
str = rmSpaces(str);
str = slashToOver(str);
console.log(str);
