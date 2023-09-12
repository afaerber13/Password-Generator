var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
var generateBtn = document.querySelector("#generate");



character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];
var choices;
var toUpper = function (x) {
  return x.toUpperCase();
};
alphaUpper = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});


function generatePassword() {
  enter = parseInt(prompt("How many characters will your password be? Choose between 8 and 128."))
  if (!enter) {
    alert("Must have a value");
} else if (enter < 8 || enter > 128) {


    enter = parseInt(prompt("Value must be between 8 and 128"));


}  else {
 
  confirmNumber = confirm("Will your password contain numbers?");
  confirmCharacter = confirm("Will your password contain special characters?");
  confirmUppercase = confirm("Will your password contain Uppercase letters?");
  confirmLowercase = confirm("Will your password contain Lowercase letters?");
};

if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
  choices = alert("You must choose at least one option");

}
else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

  choices = character.concat (number, alpha, alphaUpper);
}
else if (confirmCharacter && confirmLowercase && confirmNumber) {
  choices = character.concat (alpha, number);
}
else if (confirmCharacter && confirmUppercase && confirmNumber){
  choices = character.concat (alphaUpper, number);
}
else if (confirmNumber && confirmLowercase && confirmUppercase){
  choices = number.concat (alpha, alphaUpper);
}
else if (confirmNumber && confirmLowercase){
  choices = number.concat (alpha);
}
else if (confirmNumber && confirmUppercase){
  choices = number.concat (alphaUpper);
}
else if (confirmNumber && confirmCharacter){
  choices = number.concat (character);
}
else if (confirmLowercase && confirmUppercase){
  choices = alpha.concat (alphaUpper);
}
else if (confirmCharacter){
  choices = character;
}
else if (confirmLowercase){
  choices = alpha;
}
else if (confirmUppercase){
  choices = space.concat (alphaUpper);
}
else if (confirmNumber){
  choices = number;
}

var password = []

for (var i = 0; i < enter; i++){
  var randomChoices = choices[Math.floor(Math.random() * choices.length)];
  password.push(randomChoices);
}
return password;
}





