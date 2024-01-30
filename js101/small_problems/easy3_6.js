// get a noun, a verb, an adjective, and an adverb from user
// insert them in story

const readline = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}

prompt("Enter a noun:");
let noun = readline.question();

prompt("Enter a verb:");
let verb = readline.question();

prompt("Enter an adjective:");
let adjective = readline.question();

prompt("Enter an adverb:");
let adverb = readline.question();

prompt(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`);