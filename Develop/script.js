// Insert arrays w/char, sym, lower, upper, nums
var char = ["!","@","#","$","%","^","&","*","(",")","-","+","_","=","{","}","[","]",";",":","~","`","'","?","/"];
var nums = ["1","2","3","4","5","6","7","8","9","0"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var arrays = []

// Insert prompt & confirms
// if statement for 8/128
// make sure at least one confirm is true

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt('How many characters would you like your password to be?');

  if (passwordLength < 8) {
    alert('Your password must be at least 8 characters long.')
  }

  else if (passwordLength > 128) {
    alert('Your password cannot exceed 128 characters.')
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Write function to make it work
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

