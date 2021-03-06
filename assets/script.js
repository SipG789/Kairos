// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
//using W3 schools to determine arrays and bootcamp 3.2.4
const lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
// using characters from keyboard that match owasp.org characters 
const specialCharacter = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"];


// TO DO: when button is clicked I am presented with prompts for password criteria 
function generatePassword() {
// TO DO: when prompted, I select which criteria to include, ask between 8-128 characters
  var generateBtn = prompt("Please select password length: between 8-128 characters.");
// TO DO: Choose character types (lowercase, uppercase, numeric, special characters)

if(generateBtn < 8 || generateBtn > 128) {
  window.alert("You need to provide a valid answer! Please try again.");
  return passwords;
}

if(lowerCase) {
  window.confirm("Do you want to include lowercase?");  
  let lower = lowerCase.length;

  for (let i= 0; i < lower; i++);
}

if (upperCase){
  window.confirm("Do you want to include UPPERCASE?");
  let upper = upperCase.length;

  for (let i= 0; i < upper; i++);
}
if (specialCharacter) {
  window.confirm("Do you want to include special characters(!@#$%)?");

  let spec = specialCharacter.length;

  for (let i= 0; i < spec; i++);
  }

  return Math.floor(Math.random()*12);
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
