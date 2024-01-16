// START

// GET user's name

// IF userName.length is '!'
//    PRINT HELLO userName. WHY ARE WE SCREAMING?
// ELSE 
//    PRINT Hello userName.

const readline = require('readline-sync');

console.log('What is your name?')
let userName = readline.question();

if (userName[userName.length - 1] === '!') {
  userName = userName.slice(0, (userName.length - 1));
  
  console.log(`HELLO ${userName.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello, ${userName}.`);
}