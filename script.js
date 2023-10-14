function appendToDisplay(value) {
    $("#display").val($("#display").val() + value);
}

function clearDisplay() {
    $("#display").val('');
}

function calculateResult() {
    try {
        var result = eval($("#display").val());
        $("#display").val(result);
    } catch (error) {
        $("#display").val('Error');
    }
}

$(document).ready(function () {
    $(".number, .operator").click(function () {
        appendToDisplay($(this).text());
    });

    $(".clear").click(function () {
        clearDisplay();
    });

    $(".equals").click(function () {
        calculateResult();
    });
});
