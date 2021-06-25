// 07-classes/03-inheritance/script.js - 7.3: inheritance


(() => {
    class Animal {
        sayHello() {
            return `${this.constructor.greeting}! I'm ${this.name}!`;
        }
    }
    // your code here
    class Cat extends Animal{
        constructor(name){
            super(),
            this.name=name
        }
        static greeting = "Miau"
    }
    class Dog extends Animal{
        constructor(name){
            super(),
            this.name = name
        }
        static greeting = "ouf ouf"
    }
    document.getElementById("run").addEventListener("click", () => {
        let nameCat = new Cat("Kalle");
        let nameDog = new Dog("Rex");
        alert(JSON.stringify(nameCat.sayHello()));
        alert(JSON.stringify(nameDog.sayHello()));
      });
})();
