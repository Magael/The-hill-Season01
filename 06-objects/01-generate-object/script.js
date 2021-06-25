// 06-objects/01-generate-object/script.js - 6.1: genererate an object


(() => {
    // your code here
    document.getElementById("run").addEventListener("click", () => {
        let me = {lastname: "da Silveira", name: "Elsa",age: 43,city: "Lisbon", country: "Portugal"}

        alert ("Hello, my name is " + me.name + " " + me.lastname + " i'm " + me.age + " i'm from " + me.city + "," + me.country);
    });
})();
