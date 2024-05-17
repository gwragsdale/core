/*

# Problem

- input: a template
- output: a string
    - with randomly selected nouns, adjectives, and adverbs
      plugged into the text
  
- find the right way to structure the templates

*/

let words = {
  adjectives: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
  nouns: ['fox', 'dog', 'head', 'leg', 'tail', 'cat'],
  verbs: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
  adverbs: ['easily', 'lazily', 'noisily', 'excitedly'],
}

let template1 = 
  `The ADJECTIVE brown NOUN ADVERB 
  VERB the ADJECTIVE yellow 
  NOUN, who ADVERB VERB his
  NOUN and looks around.`

let template2 = 
  `The ${words.nouns} ${words.verbs} the ${words.nouns}'s ${words.nouns}.`

function getRandomIdx(max) {
  return Math.floor(Math.random() * max);
}

function madlibs(template) {
  let adj = words.adjectives;
  let noun = words.nouns;
  let verb = words.verbs;
  let adv = words.adverbs;
  let newSentence = template
                      .split(" ")
                      .map(word => {
                        switch(word) {
                          case "ADJECTIVE": return adj[getRandomIdx(adj.length - 1)];
                          case "NOUN": return noun[getRandomIdx(noun.length - 1)];
                          case "VERB": return verb[getRandomIdx(verb.length - 1)];
                          case "ADVERB": return adv[getRandomIdx(adv.length - 1)];
                          default: return word;
                        }
                      })
                      .join(" ");

  console.log(newSentence);
}

madlibs(template1);