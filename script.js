$(document).ready(function() {
            let currentInput = '';
            let previousInput = '';
            let operator = '';
            
            $('button').click(function() {
                const id = $(this).attr('id');
                
                if (!isNaN(id) || id === '.') {
                    currentInput += id;
                    $('#result').val(currentInput);
                } else if (id === '+' || id === '-' || id === '*' || id === '/') {
                    if (previousInput === '') {
                        previousInput = currentInput;
                        currentInput = '';
                    } else {
                        previousInput = operate(previousInput, currentInput, operator);
                        currentInput = '';
                    }
                    operator = id;
                    $('#result').val(previousInput);
                } else if (id === '=') {
                    if (previousInput !== '' && operator !== '') {
                        currentInput = operate(previousInput, currentInput, operator);
                        $('#result').val(currentInput);
                        previousInput = '';
                        operator = '';
                    }
                } else if (id === 'C') {
                    currentInput = '';
                    previousInput = '';
                    operator = '';
                    $('#result').val('0');
                } else if (id === '←') {
                    currentInput = currentInput.slice(0, -1);
                    $('#result').val(currentInput);
                } else if (id === '+/-') {
                    currentInput = (parseFloat(currentInput) * -1).toString();
                    $('#result').val(currentInput);
                }
            });
            
            function operate(a, b, op) {
                a = parseFloat(a);
                b = parseFloat(b);
                switch (op) {
                    case '+':
                        return (a + b).toString();
                    case '-':
                        return (a - b).toString();
                    case '*':
                        return (a * b).toString();
                    case '/':
                        return (a / b).toString();
                }
            }
        });