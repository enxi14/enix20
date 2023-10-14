$(document).ready(function() {
    var currentInput = '';
    var currentOperator = '';
    var currentTotal = '';

    // Click event handlers for number buttons
    $('.button').not('#calculate').click(function() {
        currentInput += $(this).text();
        $('#display').val(currentInput);
    });

    // Click event handler for operator buttons
    $('.button').not('#calculate').click(function() {
        if (currentTotal === '') {
            currentTotal = currentInput;
            currentInput = '';
        } else {
            currentTotal = calculate(currentTotal, currentInput, currentOperator);
            currentInput = '';
        }
        currentOperator = $(this).text();
        $('#display').val(currentTotal);
    });

    // Click event handler for the equals button
    $('#calculate').click(function() {
        if (currentOperator !== '') {
            currentTotal = calculate(currentTotal, currentInput, currentOperator);
            $('#display').val(currentTotal);
            currentInput = '';
            currentOperator = '';
        }
    });

    // Click event handler for the clear button
    $('#clear').click(function() {
        currentInput = '';
        currentOperator = '';
        currentTotal = '';
        $('#display').val('');
    });

    // Click event handler for the backspace button
    $('#backspace').click(function() {
        currentInput = currentInput.slice(0, -1);
        $('#display').val(currentInput);
    });

    // Calculation function
    function calculate(num1, num2, operator) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        if (operator === '+') {
            return num1 + num2;
        } else if (operator === '-') {
            return num1 - num2;
        } else if (operator === '*') {
            return num1 * num2;
        } else if (operator === '/') {
            if (num2 === 0) {
                return 'Error';
            }
            return num1 / num2;
        }
    }
});
