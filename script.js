function makeid(l) {
  // write your code here
	var text = "";
  
  // Define a character list containing uppercase letters, lowercase letters, and digits
  var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  // Iterate l times to generate each character in the random string
  for (var i = 0; i < l; i++) {
    // Append a randomly selected character from char_list to the text string
    text += char_list.charAt(Math.floor(Math.random() * char_list.length));
  }

  // Return the generated random string
  return text;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
