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
    

number1.addEventListener("change", function (event) {
const number1 = event.target.value;
validateResult(number1);

// console.log(number1)
});

number2.addEventListener("change", function (event) {
    const number2 = event.target.value;
    validateResult(number2);
    
    // console.log(number2)
    });
    

    function operatii(operationName, op) {
        const one = Number(number1.value);
        const two = Number(number2.value);
        const resultOp = op(one, two);
    }

// addButton.addEventListener ("click", function(){
//    operatii("add", (a, b)=> a + b);
//    resultOp.innerHTML = `Rezulatul operatiei este: ${resultOp}`;

// });

addButton.addEventListener("click", function(){
    let number1 = Number(number1.value);
    let number2 = Number(number2.value);
    let sum = number1 + number2;
    //console.log(adunare);
    result.innerHTML = `<p>Rezultatul operatiei este ${sum}</p>`

});

