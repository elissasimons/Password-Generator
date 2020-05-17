// Insert arrays with items that will randomize
var char = ["!","@","#","$","%","^","&","*","(",")","-","+","_","=","{","}","[","]",";",":","~","`","'","?","/"];
var nums = ["1","2","3","4","5","6","7","8","9","0"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var charArray = [];
var password = '';

var passwordText = document.querySelector("#password");
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", function() {

  //Add prompt & confirms for user input
  alert('Hello! Please create a password that is between 8-128 characters that includes at least one of the following options.');

  var passwordLength = prompt('How many characters would you like your password to be?');

  if (passwordLength < 8) {
    alert('Your password must be at least 8 characters long.')
  }

  if (passwordLength > 128) {
    alert('Your password cannot exceed 128 characters.')
  }

  var specialChars = confirm('Would you like to include special characters?');

  var numbers = confirm('Would you like to include numbers?');

  var lowCase = confirm('Would you like to include lower case letters?');

  var uppCase = confirm('Would you like to include upper case letters?');

  // Push syms, nums, letters into empty array when confirmed in prompt

  if (specialChars) {
    charArray = charArray.concat(char);
   
  }
  
  if (numbers) {
    charArray = charArray.concat(nums);
    
  }

  if (lowCase) {
    charArray = charArray.concat(lowerCase);
    
  }

  if (uppCase) {
    charArray = charArray.concat(upperCase);
  
  }

  // Add for loop to randomize and create password
  for (var i = 0; i < passwordLength; i++) {
    var randomPassword = Math.floor(Math.random() * charArray.length);
    password += charArray[randomPassword];
  } 

  document.getElementById('password').innerHTML = password;

})