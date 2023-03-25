// Assignment Code
const cb1 = document.getElementById('cb1')
var includeUppercase = cb1.checked;

const cb2 = document.getElementById('cb2')
const includeLowercase = cb2.checked;

const cb3 = document.getElementById('cb3')
const includeNumber = cb3.checked;

const cb4 = document.getElementById('cb4')
const includeSpecialChar = cb4.checked;


//determine lenght of password
var passwordLenght = document.getElementById('numberSelect')
document.getElementById('numberSelect').addEventListener('change', function() {
  passwordLength = this.value;
});



 var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword(passwordLenght, cb1.checked, cb2.checked, cb3.checked, cb4.checked);
  const passwordText = document.querySelector("#password");

   passwordText.value = password;
    console.log (password)
    //**password is blankn in the console log but shows activty when clicking gererate password **Debug
}
function generatePassword(lenght, includeUppercase, includeLowercase, includeNumber, includeSpecialChar) {
  var allchars = "";
  if (includeUppercase) allchars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeLowercase) allchars += "abcdefghijklmnopqrstuvwxyz";
  if (includeNumber) allchars += "0123456789";
  if (includeSpecialChar) allchars += "@#$%^&()_+~|}{[]></-=";
  var password = "";
  for (let i = 0; i < length; i++) {
    password += allchars.charAt(Math.floor(Math.random() * allchars.length));
  }
  return password;

  console.log ('password')
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log (writePassword)

