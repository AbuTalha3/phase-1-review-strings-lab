// Write your code in this file!
let currentUser = "AbuTalha";
// let welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
let welcomeMessage = `Welcome to Flatbook, ${currentUser}!`
console.log(welcomeMessage);

let excitedWelcomeMessage = welcomeMessage.toUpperCase();
console.log(excitedWelcomeMessage);

let  shortGreeting = `Welcome, ${currentUser[0]}!`
console.log(shortGreeting);

let  shortGreeting2 = `Welcome, ${currentUser.charAt(0)}!`
console.log(shortGreeting2);

let  shortGreeting3 = `Welcome, ${currentUser.slice(0,1)}!`
console.log(shortGreeting3);