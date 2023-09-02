// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Function called generatepassword
function generatePassword() {
  //prompt user for pw length
  //verify that length entered is between 8 and 128
  //if it isn't, keep prompting until they enter a valid pw
  //ask user if they want to include:
    //capital letters
    //lowercase letters
    //numeric
    //special characters
  //keep track of answers in variables
  
  //after each correct prmopt, validate 
  
  //generte password if all prompts correct
  
  return "";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
