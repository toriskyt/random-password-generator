// Assignment Code
var lowerCaseArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
];
var upperCaseArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
];
var numeralsArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialSymbolsArr = ["!", "@", "#", "$", "%", "&", "*"];
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// begin function
function generatePassword() {
  var options = askUser();
  console.log(options)
  var choices = []
  if(options.lowerCase) choices = choices.concat (lowerCaseArr);
  if(options.specialSymbols) choices = choices.concat (specialSymbolsArr);
  if(options.upperCase) choices = choices.concat (upperCaseArr);
  if(options.numerals) choices = choices.concat (numeralsArr);
  var password = "";
  for(var i = 0; i < Number(options.passLength); i++) {
    var index = Math.floor(Math.random() * choices.length);
    password = password + choices[index];
  }
  return password
}

// ask user for preferences for password
function askUser() {
  var lowerCase = confirm("Would you like a lowercase letter?");
  var upperCase = confirm("Would you like an uppercase letter?");
  var numerals = confirm("Would you like a number?");
  var specialSymbols = confirm("Would you like a special character?");
  var passLength = parseInt(prompt("How long would you like the password to be?"));
  console.group(lowerCase, upperCase, numerals, specialSymbols, passLength);

  // password needs to be greater than "8" and less than "128"
  // if a number less than "8" or greater than "128" is chosen, the alert will ask for a valid length
  if(passLength < 8 || passLength > 129) {
    alert("Please select a valid length.");
    return; 
  }
  var optionsObj = {
    lowerCase, upperCase, numerals, specialSymbols, passLength
  }
  console.log(optionsObj)
    return optionsObj
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
