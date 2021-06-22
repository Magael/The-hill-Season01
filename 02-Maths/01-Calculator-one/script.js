// 02-maths/01-calculator-one/script.js - 2.1: calculator1

(() => {
    // to get the value of an input: document.getElementById("element-id").value


    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        var x = Number(document.getElementById("op-one").value);
        var y = Number(document.getElementById ("op-two").value);
        var sum = x+y;
        alert ("The sum of Operand One and Operand Two is : " + sum);

    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        var x = Number(document.getElementById("op-one").value);
        var y = Number(document.getElementById ("op-two").value);
        var minus = x-y;
        alert ("The substration of Operand One and Operand Two is : " + minus);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        var x = Number(document.getElementById("op-one").value);
        var y = Number(document.getElementById ("op-two").value);
        var mult = x*y;
        alert ("The multiplication of Operand One and Operand Two is : " + mult);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        var x = Number(document.getElementById("op-one").value);
        var y = Number(document.getElementById ("op-two").value);
        var div = x/y;
        alert ("The division of Operand One and Operand Two is : " + div);
    });
})();