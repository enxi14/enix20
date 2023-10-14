$(document).ready(function() {
    let currentInput = '0';

    $('.number').click(function() {
        if (currentInput === '0') {
            currentInput = $(this).text();
        } else {
            currentInput += $(this).text();
        }
        $('#result').val(currentInput);
    });

    $('.operator').click(function() {
        const operator = $(this).text();
        if (operator === 'C') {
            currentInput = '0';
        } else if (operator === '←') {
            currentInput = currentInput.slice(0, -1);
            if (currentInput === '') {
                currentInput = '0';
            }
        } else if (operator === '=') {
            try {
                currentInput = eval(currentInput).toString();
            } catch (error) {
                currentInput = 'Error';
            }
        } else {
            currentInput += operator;
        }
        $('#result').val(currentInput);
    });
});
