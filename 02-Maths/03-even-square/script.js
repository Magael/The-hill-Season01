// 02-maths/03-even-square/script.js - 2.3: squares and pairs


(() => {

    document.getElementById("run").addEventListener("click", () => {

        // your code here
        function perfectSquares(l, r){
 
            //For every element from the range
            for (let i = l; i <= r; i++)
            {
           
                // If current element is
                // a perfect square
                if (Math.sqrt(i) == parseInt(Math.sqrt(i)))
                   alert(i + " ");
            }
        }
         
        // Driver code
        let l = 1;
        let r = 21;
        perfectSquares(l, r)
    });
        

})();