// 03-colors/03-change-bcg-three/script.js - 3.3: background color (3)


(() => {

    // your code here

    document.getElementById("run").addEventListener("click", () => {

        
        run.addEventListener("click", getRandom);
        function getRandom(){
            // 16777215 (decimal) == ffffff in hexidecimal
            var newColor = '#'+Math.floor(Math.random()*16777215).toString(16);
            
            // Convert hex to RGB:
            var rgbColor = newColor.replace('#','');
            var r = parseInt(rgbColor.substring(0,2), 16);
            var g = parseInt(rgbColor.substring(2,4), 16);
            var b = parseInt(rgbColor.substring(4,6), 16);
                        
            document.body.style.backgroundColor = newColor;
                      };
          
    }); 

})();