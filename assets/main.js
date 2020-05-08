// COMPLETE THE TODOs BELOW...
// Note: The primary TODOs for this Activity will not require 
// you to edit the HTML or CSS.

// On our HTML page, we have a #search-button, a #textbox input,
// box a #sentence, and a #search-results DIV.

let searchButton = document.querySelector('#search-button');
let input = document.querySelector('#textbox');
let results = document.querySelector('#search-results');
let paragraph = document.querySelector('#sentence');
let sentence = paragraph.innerText.toLowerCase();
let splitSentence = sentence.split(' ');
let wordCount = 0;

searchButton.addEventListener('click', function () {
  let inputFixed = input.value.trim().toLowerCase();
  let inv = input.value;
 if (sentence.includes(inputFixed)){
    if (inputFixed.includes(' ')){
      results.innerText = "A match was found!"
    } else {
      for (i = 0; i < splitSentence.length; i++){
        if (splitSentence[i] === inputFixed){
          wordCount++;
        }
      }
      results.innerText = input.value + " found " + wordCount + " time(s)!";
      wordCount = 0;
    };
    var re = new RegExp(inv, 'g');
    paragraph.innerHTML = paragraph.innerText.replace(re, '<mark>$&</mark>');
 } else {
   results.innerText = "No results. Too bad!";
 }
})

// STRETCH GOALS (easiest to hardest):
//
//  • Customize the CSS to your liking.
//  • Use .trim() to remove unnecessary whitespace from the
//    user-supplied string.
//  • Use .toLowerCase() on both the sentence and the user-
//    supplied string, so that your word search is 
//    NOT case-sensitive.
//  • Count the number of times the word appears.
//  • Display the word count for the user.
//  • Find a way to highlight the matching word(s). 
//    Hint: .split() and Iteration.
