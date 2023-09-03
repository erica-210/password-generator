// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Function called generatepassword
function generatePassword() {
  //prompt user for pw length
  //verify that length entered is between 8 and 128
  //if it isn't, keep prompting until they enter a valid pw
  var a = 8;
  var b = 128;
  var passwordLength = (a >= b);

  var userChoice = prompt("Password Length: ")
    if (!passwordLength) {
       prompt("Sorry, invalid length. Please, try again. Password Length: ")
    } else {
      return;
    }
  //ask user if they want to include:
    //capital letters
    //lowercase letters
    //numeric
    //special characters
  //keep track of answers in variables

  var capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseLeters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];

  var useCapital = prompt("Do you want to include capital letters? yes or no: ");
    if ("no") {
      
    } else if ()
  //after each correct prmopt, validate 
  
  //generte password if all prompts correct
  

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
