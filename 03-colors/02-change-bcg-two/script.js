// 03-colors/02-change-bcg-two/script.js - 3.2: Bcg 2

(() => {

    // your code here
    document.getElementById("run").addEventListener("click", () => {

        // your code here
        var color = document.getElementById("color").value;
        
        function changeColor(color) {
            document.body.style.background = color;
        }
          
        
            changeColor(color);
        
    });

})();