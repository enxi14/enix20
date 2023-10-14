let currentInput = '0';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== 'C') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    document.getElementById('result').value = currentInput;
}

function clearDisplay() {
    currentInput = '0';
    document.getElementById('result').value = currentInput;
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        document.getElementById('result').value = currentInput;
    } catch (error) {
        document.getElementById('result').value = 'Error';
        currentInput = '0';
    }
}
