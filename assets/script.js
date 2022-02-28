// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// TO DO: when button is clicked I am presented with prompts for password criteria 
function generatePassword() {
  //using W3 schools to determine arrays and bootcamp 3.2.4

// TO DO: when prompted, I select which criteria to include, ask between 8-128 characters
  var generateBtn = prompt("Please select password length: between 8-128 characters.");
// TO DO: Choose character types (lowercase, uppercase, numeric, special characters)


if(generateBtn < 8 || generateBtn > 128) {
  window.alert("You need to provide a valid answer! Please try again.");
  return passwords;
}


if(generateBtn) {
  window.confirm("Do you want to include lowercase?");  
  window.confirm("Do you want to include UPPERCASE?");
  window.confirm("Do you want to include special characters(!@#$%)?");
  }    
// I found a version of this code on https://stackoverflow.com/questions/1497481/javascript-password-generator and used it as a starting point with what I wanted to do. 
// I modified the code to work with our criteria, I hope this is still considered my code. 
  var length = 12,
    lowerCase = "abcdefghijklmnopqrstuvwxyz";
    upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    numeric = "1234567890";
    specialCharacter = "~!@#$%^&*()_+";
    passWord = "";
  for (var i = 0; i <= length; i++) {
    var randomLetter = Math.floor(Math.random() * lowerCase.length);
    passWord += lowerCase.substring(randomLetter, randomLetter +1);
    //passWord += lowerCase.lowerAt(Math.floor(Math.random() * lower));
  for (var i = 0; i <= length; i++) {
    var randomUpper = Math.floor(Math.random() * upperCase.length);
    passWord += upperCase.substring(randomUpper, randomUpper + 1);
  } 
  for (var i = 0; i <= length; i++) {
    var randomNum = Math.floor(Math.random() * numeric.length);
    passWord += numeric.substring(randomNum, randomNum + 1);
  }
  for (var i =0; i <= length; i++) {
    var randomChar = Math.floor(Math.random() * specialCharacter.length);
    passWord += specialCharacter.substring(randomChar, randomChar + 1);
  }
  }
  return passWord;
}

// TO DO: Generate password 
    // TO DO: Display an alert or write password on page 



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
