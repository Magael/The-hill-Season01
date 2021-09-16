// 06-objects/04-from-entries/script.js - 6.4: fromEntries


(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Kalle", "cat", 11, "male", "grey"];
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let double = Object.fromEntries(keys.map((_, i) => [keys[i], values[i]]));
        alert(JSON.stringify(double));
    });
})();
