const number1 = document.querySelector ("#numberOne");
const number2 = document.querySelector ("#numberTwo");

const addButton = document.querySelector (".add");
const substractButton = document.querySelector (".substract");
const multiplyButton = document.querySelector (".multiply");
const divideButton = document.querySelector (".divide");

const errorMessage = document.querySelector (".error-message");
const resultOp = document.querySelector (".result");



function validateResult (value) {
    const regexValue= /[0-9]/gm;
    if (value.length === 0) {
        errorMessage.innerHTML = "Introduceti cel putin 1 cifra"
    } else if (!regexValue.test(value)){
        errorMessage.innerHTML = "Introduceti doar cifre!"
    }else {
        errorMessage.innerHTML = "";
    } return errorMessage.innerHTML === "";
    }
    

number1.addEventListener("click", function (event) {
const number1 = event.target.value;
validateResult(number1);

// console.log(number1)
});

number2.addEventListener("click", function (event) {
    const number2 = event.target.value;
    validateResult(number2);
    
    // console.log(number2)
    });
    

    function operatii(operationName, op) {
        const one = Number(number1.value);
        const two = Number(number2.value);
        const resultOp = op(one, two);
    }


addButton.addEventListener("click", function(){
    let number1Input = Number(number1.value);
    let number2Input = Number(number2.value);
    let sum = number1Input + number2Input;

    resultOp.innerHTML = `<p>Rezultatul operatiei este ${sum}</p>`

});

substractButton.addEventListener("click", function(){
    let number1Input = Number(number1.value);
    let number2Input = Number(number2.value);
    let substract = number1Input - number2Input;

    resultOp.innerHTML = `<p>Rezultatul operatiei este ${substract}</p>`

});

multiplyButton.addEventListener("click", function(){
    let number1Input = Number(number1.value);
    let number2Input = Number(number2.value);
    let multiply = number1Input * number2Input;

    resultOp.innerHTML = `<p>Rezultatul operatiei este ${multiply}</p>`

});

divideButton.addEventListener("click", function(){
    let number1Input = Number(number1.value);
    let number2Input = Number(number2.value);
    let divide = number1Input / number2Input;

    resultOp.innerHTML = `<p>Rezultatul operatiei este ${divide}</p>`

});
