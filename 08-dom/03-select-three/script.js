// 08-dom/03-select-three/script.js - 8.3: select multiple elements by css selector


(() => {

    // your code here
    Array.from(document.getElementsByClassName("target")).forEach( item => {
        item.innerHTML = "owned";
    });
})();
