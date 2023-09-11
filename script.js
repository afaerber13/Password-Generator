var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var generateBtn = document.querySelector("#generate");
var length = Number(prompt("How many characters will your password be? Choose between 8 and 128."))


character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];




function generatePassword() {
  enter = Number(prompt("How many characters will your password be? Choose between 8 and 128."))
  if (!enter) {
    alert("Must have a value");
} else if (enter < 8 || enter > 128) {


    enter = Number(prompt("Value must be between 8 and 128"));


}  else {
 
  confirmNumber = confirm("Will this contain numbers?");
  confirmCharacter = confirm("Will this contain special characters?");
  confirmUppercase = confirm("Will this contain Uppercase letters?");
  confirmLowercase = confirm("Will this contain Lowercase letters?");
};
if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose a criteria!");


}


// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");


//   passwordText.value = password;


// }


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

