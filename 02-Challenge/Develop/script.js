// Assignment Code
const includeUppercase = callback1.checked;
const callback1 = document.getElementById('callback1')

const includeLowercase = callback2.checked;
const callback2 = document.getElementById('callback2')

const includeNumber = callback3.checked;
const callback3 = document.getElementById('callback3')

const includeSpecialChar = callback4.checked;
const callback4 = document.getElementById('callback4')

//determine lenght of password
var passwordLenght = document.getElementById('numberSelect')
document.getElementById('numberSelect').addEventListener('change', function() {
  passwordLength = this.value;
});



// var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
