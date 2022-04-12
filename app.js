console.log(window);
// window is a build in object
// it holds various properties and methods
// alert is also a method built inside window object
// as window is a global variable, we can access methods inside window without typing window.

// alert("Hello World!");
// window.alert("Hello World!");
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

// document.body.children[1].children[0].href = "https://google.com";
// this is how we drilling into the DOM to select & change html elements
// in here, we are trying to change the link we wrote in our html code through the DOM
// children[1] is the paragraph
// children[0] is the a element
// but when we run this code, it shows an error if the <script src ="app.js"></script> code sits "before" the <a> tag.
// one way to fix this is to place the <script src ="app.js"></script> code "after" the <a> tag.
// another way to do this is to add a defer attribute to the script tag

console.log(document.body.firstElementChild);
// result = <h1>Hi there!</h1>
// this is another way of drilling into DOM

console.log(document.body.firstChild);
// result = #text
// by using .firstChild we actually access the firstChild node

console.log(document.body.children[0]);
// result = <h1>Hi there!</h1>

let anchorElement = document.getElementById("external-link");
anchorElement.href = "https://google.com";
// this is an alternative way to write the code on the 28th line.

document.querySelector("#external-id");
// this is an alternative to getElementById
// we write code inside the parenthesis similar to the code we write in CSS
// getElementById definitely need an id to get executed
// but querySelector can be accessed even without an id
// which means we can access it in many ways as we did in CSS
document.querySelector("a");
// this is like the CSS code we write like this.
// a {
//  color: red;
// }
document.querySelector("p a");

// querySelector selects the "first" <a> tag in the HTML file
// if there's more than one <a> tag and we need to access all <a> tags we can do that by using document.querySelectorAll()
document.querySelectorAll("p a");
