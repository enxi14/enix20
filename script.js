$(document).ready(function () {
    let input = "";
    let result = "";

    $("button").on("click", function () {
        let buttonValue = $(this).text();
        
        if (buttonValue === "C") {
            input = "";
            result = "";
        } else if (buttonValue === "=") {
            try {
                result = eval(input);
            } catch (error) {
                result = "Error";
            }
            input = result;
        } else if (buttonValue === "\u2190") { // Backspace
            input = input.slice(0, -1);
        } else {
            input += buttonValue;
        }

        $("#display").val(input);
    });
});
