// 02-maths/05-factorial/script.js - 2.5: Factorial

(() => {
    
    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        var number = document.getElementById("number").value;
        function factorial(number) {
            if (number === 0) 
                return 1;
            else {
                return (number * factorial(number - 1));
            }
          }
          alert (factorial(number));

    });

})();