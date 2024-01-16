// START

// SET function greeting (array, object)
//    combine array elements for a full name
//    combine object values for a job title

// PRINT greeting with name and job title

function greetings(array, object) {
  let name = '';
  let jobTitle = object.title + ' ' + object.occupation;

  for (let i = 0; i < array.length; i += 1) {
    name = name + ' ' + array[i];
  }
  
  console.log(`Hello,${name}! Nice to have a ${jobTitle} around.`);
}

greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber"});