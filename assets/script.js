// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
}

function generatePassword() {
  var options = askUser();
  console.log(options)
  return "a"
}
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var numeralsArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialSymbolsArr = ["!", "@", "#", "$", "%", "&", "*"];

function askUser() {
  var lowerCase = confirm("Would you like a lowercase letter?");
  var upperCase = confirm("Would you like an uppercase letter?");
  var numerals = confirm("Would you like a number?");
  var specialSymbols = confirm("Would you like a special character?");
  var passLength = parseInt(prompt("How long would you like the password to be?"));
  console.group(lowerCase, upperCase, numerals, specialSymbols, passLength);
  if(passLength < 8 || passLength >= 128) {
    alert("Please select a valid length.");
    return askUser(); 
  }
  var optionsObj = {
    lowerCase, upperCase, numerals, specialSymbols, passLength
  }
  console.log(optionsObj)
    return optionsObj
}




// var newPassword = "Your new password is  .";
    // if(newPassword) [
        // newPassword = lowerCase + upperCase + numerals + specialSymbols[Math.floor(Math.random() * 10)]

    // ]

// alert: ("The password is:");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Acceptance Criteria
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
  // DONE; enabled button in css
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
  // Use rock, paper, scissors example
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters 
  // if length of password >= 8 <= 128
  // the password is valid
  // else
  // the password is invalid
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  // (Booleon)
  // var lowercase = true/false
  // var uppercase = true/false
  // var numeric = true/false
  // var special characters = true/false
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
  // alert("The password is: ...")