const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('.clear');
const resultDiv = document.querySelector('.result .answer');
const expressionDiv = document.querySelector('.result .expression');

let preOperator = "";
let attachedStr = "";
let displayedStr = "";
let result = 0;

numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener("click", numberBtnHandler);
});

operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", operatorBtnHandler);
})

clearBtn.addEventListener("click", clearBtnHandler);

function numberBtnHandler(event) {
    const btnValue = event.target.innerText;
    attachedStr += btnValue;
    displayedStr += btnValue;
    resultDiv.innerText = displayedStr;
    expressionDiv.innerText = attachedStr;
}

function operatorBtnHandler(event) {
    const operator = event.target.innerText;
    displayedStr = "";
    const lastChar = attachedStr.substring(attachedStr.length-1,attachedStr.length);

    if(lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/"){
        attachedStr = attachedStr.substring(0,attachedStr.length-1)
    }
    if (operator === "=") {
        result = eval(attachedStr).toFixed(13);
        resultDiv.innerText = result;
    } else if (preOperator === operator) {
        result = eval(attachedStr).toFixed(13);
        attachedStr += operator;
        resultDiv.innerText = result;
    } else {
        attachedStr += operator;
    }
    expressionDiv.innerText = attachedStr;
    preOperator = operator;

}

function clearBtnHandler() {
    expressionDiv.innerText = "0";
    displayedStr = "";
    attachedStr = "";
    preOperator = "";
    result = 0;
    resultDiv.innerText = result;
}