// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Function called generatepassword
function generatePassword() {
  //prompt user for pw length
  //verify that length entered is between 8 and 128
  //if it isn't, keep prompting until they enter a valid pw
  var passwordLength = parseInt(prompt("Password Length: "))
    console.log(passwordLength);
    if (!passwordLength || passwordLength < 8 || passwordLength > 128) {
       alert("Sorry, invalid length. Please, try again.")
       return generatePassword();
    }

  //ask user if they want to include:
    //capital letters
    //lowercase letters
    //numeric
    //special characters
  //keep track of answers in variables
  var capitalLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "`", "{", "|", "}", "~"];

  var useCapital = confirm("Do you want to include capital letters? yes or no: ");

  var useLowercase = confirm("Do you want to include lowercase letters? yes or no: ");

  var useNumbers = confirm("Do you want to include numbers? yes or no: ");

  var useSpecial = confirm("Do you want to include special characters? yes or no: ");

  //after each correct prmopt, validate 
  if (!useCapital && !useLowercase && !useNumbers && !useSpecial) {
    alert("You must pick at least one type of Character")
    return generatePassword();
  } 

  var possibleCharacters = []
  if (useLowercase ) {
    possibleCharacters = possibleCharacters.concat(lowercaseLetters);
  }

  if (useCapital) {
    possibleCharacters = possibleCharacters.concat(capitalLetters);
  }

  if (useNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
  }

  if (useSpecial) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
  }

  //generte password if all prompts correct
  randomPassword = "";
  for (var i = 0; i < passwordLength; i++) {
    var shuffle = Math.floor(Math.random() * possibleCharacters.length);
    randomPassword = randomPassword + possibleCharacters[shuffle];
  }

  return randomPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
