// 02-maths/04-sort-numbers/script.js - 2.4: Sorting the numbers

(() => {

    // to get the value of an input: document.getElementById("element-id").value

    document.getElementById("run").addEventListener("click", () => {

        // your code here.
        
        var i = document.getElementById("numbers").value;
        var str = i.split(",");
        
          alert (str.sort(function(a,b){
              return a - b}));
    });

})();
