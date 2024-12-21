function updateButtonText() {
    const operator = document.getElementById('operate').value;
    const calculateButton = document.getElementById('submit');
    
    switch (operator) {
        case '+':
            calculateButton.textContent = "Add";
            break;
        case '-':
            calculateButton.textContent = "Subtract";
            break;
        case '*':
            calculateButton.textContent = "Multiply";
            break;
        case '/':
            calculateButton.textContent = "Divide";
            break;
    }
}

function submitCalculation() {
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    const operator = document.getElementById('operate').value;
    const resultDisplay = document.getElementById('result');

    if (isNaN(number1) || isNaN(number2)) {
        resultDisplay.textContent = "Result = Please enter valid numbers.";
        return;
    }

    let result;

    switch (operator) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                resultDisplay.textContent = "Result = Error(Division by zero)";
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultDisplay.textContent = "Result = Invalid operation.";
            return;
    }

    resultDisplay.textContent = `Result = ${result.toFixed(2)}`;
}
