const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
reader.question("Welcome to the password validator tool! ", function(answer) {
    console.log(input);
});


function validatePassword(input){
    var minNumOfChars = 0
    var maxNumOfChars = 10
    var input = 'password.length'

    if (password.length < minNumOfChars || password.length > maxNumOfChars){ // <--Stack Overflow helped with this line
        console.log("success!")
    } else {
        console.log("Failure to meet password constraints")
    }


//Additional checks

    if (password.length < minNumOfChars){
        console.log("Make password longer")
    } else (password.length > maxNumOfChars){
        console.log("Make password shorter")")
    }



//Resources Used
// 1.https://stackoverflow.com/questions/12090077/javascript-regular-expression-password-validation-having-special-characters
