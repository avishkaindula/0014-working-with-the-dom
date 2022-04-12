console.log(window);
// window is a build in object
// it holds various properties and methods
// alert is also a method built inside window object
// as window is a global variable, we can access methods inside window without typing window.

alert("Hello World!");
window.alert("Hello World!");
// both of this code are the same.

// document is an objects which is seated inside the window object
// this is known as a desktop object
// document object holds information and functionality related to the loaded website "content"
// this document object gives us the functionality to reach out to certain HTML elements.
// document object is related to DOM
// DOM means Document Object Model
// Out HTML code gets translated into bunch of JavaScript objects when loading the website
// That nested structure of JavaScript objects of our HTML code is known as DOM
// We access DOM through document object

console.log(window.document);
console.log(document);
// both of this code are the same

console.dir(document);
// This is how we see the real representation of JavaScript objects of the DOM inside the console
