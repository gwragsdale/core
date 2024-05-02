/*

# Problem

- input: two arguments:
    1. a single-word string
    2. a string of text
- output:
    - an integer representing the number of times
      the word appears in the text

- explicit rules:
    - both arguments will always be provided
    - all word breaks are spaces
    - search is case insensitive

# Examples

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

searchWord('sed', text);      // 3

# Data Structures

- array

# Algorithm

1. set count = 0
2. split string into array of words
    - do I need to remove non-alpha characters, like ','?
3. iterate over array
4. for each word (to lower case!) that equals input word (to lower case)
    count += 1
5. return count

# Code

*/

let searchWord = (searchTerm, text) => {
  let count = 0;
  let textArray = text.split(' ')

  textArray.forEach(word => {
    if (word.toLowerCase() === searchTerm.toLowerCase()) count += 1});

  return count;
}

function highlightWord(searchTerm, text) {
  return text.split(" ")
             .map(word => {
              if (word.toLowerCase() === searchTerm.toLowerCase()) {
                return `**${word.toUpperCase()}**`;
              } else {
                return word;
              }
             })
             .join(" ");
}

const text = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';

console.log(highlightWord('sed', text));      // 3