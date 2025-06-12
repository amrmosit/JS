/*
Task 1:
Write a function named letterFinder that accepts two parameters: word and match

Note: In JavaScript, strings can be treated similarly to arrays. 
You can access individual characters in a string using an index, 
just like you would with an array. Even though strings are not explicitly declared as arrays, 
they behave in a similar way when accessing their characters by index.

function letterFinder(word, match) {
    
    for (let i=0; i<word.length; i++){
        if (word[i] === match){
            console.log(`Found the ${match} at ${i}`);
        }
        else {
            console.log(`No match found at ${i}`);
        }
    }

}
// Example usage:
console.log("Test 1");
letterFinder("hello", "e"); // Should log: Found the e at 1
console.log("Test 2");
letterFinder("hello", "x"); // Should log: No match found at 0, No match found at 1, etc.
*/

  var bicycle = {
      wheels: 2,
      // method
      start: function() {
        console.log("start");
      },
      // method
      stop: function() {
        console.log("stop");
      }
  };
  bicycle.start();