// 01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation

(() => {
    // Don't bother with that, look at your browser's console(chrome), you can delete it afterwards ;)
    console.log('%c ', 'padding: 38px; background:url(https://becode.org/app/uploads/2020/03/bc_mailsign_seal.png) no-repeat;');
    console.log('Hello Keller programmer');

    // YOUR CODE HERE
    
    do {

    let age = prompt("how old are you?");
    let gender = prompt("what's your gender? Female/Male");
    let town = prompt("Where do you live?");
    var sim = confirm ("You are " + age + " years old. " + "You are a " + gender + " and you live in " + town + ".");
    }
    while (sim != 1);

    //window.alert ("You are " + age + " years old. " + "You are a " + gender + " and you live in " + town + ".");

})();