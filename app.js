console.log(window);
// window is a build in object
// it holds various properties and methods
// alert is also a method built inside window object
// as window is a global variable, we can access methods inside window without typing window.

// alert("Hello World!");
// window.alert("Hello World!");
// both of this code are the same.

// document is an object which is seated "inside" the window object
// this is known as a nested object
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

document.body.children[4].children[0].href = "https://google.com";
// this is how we drilling into the DOM to select & change html elements
// in here, we are trying to change the link we wrote in our html code through the DOM
// children[1] is the first paragraph
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
// anchorElement.href = "https://google.com";
// this is an alternative way to write the code on the 28th line.

document.querySelector("#external-link");
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

// -------------------------------------------------------------------------------------------------------------------------------

// there are three kinds of DOM manipulations
// --adding a new element
// --deleting an existing element
// --moving an existing element to another place

// -------------------------------------------------------------------------------------------------------------------------------

// ADD AN ELEMENT

// 1. Create the new element
let newAnchorElement = document.createElement("a");
newAnchorElement.href = "https://google.com";
newAnchorElement.textContent = "This leads to Google!";

// 2. Get access to the parent element that should hold the new element
// In here, we select the first <p> as our parent element.
let firstParagraph = document.querySelector("p");
// the querySelector selects the "first" <p> on the html code

// 3. Insert the new element into the parent element content
firstParagraph.append(newAnchorElement);

// -------------------------------------------------------------------------------------------------------------------------------

// REMOVE ELEMENTS

// 1. Select the element that should be removed
let firstH1Element = document.querySelector("h1");

// 2. Remove it!
firstH1Element.remove();

// firstH1Element.parentElement.removeChild(firstH1Element);
// This is an alternative way of removing elements.
// We use this alternative way if we also need to target super old browsers like Internet Explorer.

// -------------------------------------------------------------------------------------------------------------------------------

// MOVE ELEMENTS

// First we need to create a variable for the element that we need to move
// We have already created a variable for the first <p> element at the 85th line of code
firstParagraph.parentElement.append(firstParagraph);
// This will append the firstParagraph at the "end" of the parentElement (body)

// let secondParagraph = document.getElementById("second-paragraph-id");
// secondParagraph.parentElement.insertBefore();
// This is also another way to move elements. But this code is not complete yet.
// There's something that need to be added inside the parenthesis but I don't know what that is!

// -------------------------------------------------------------------------------------------------------------------------------

// innerHTML

console.log(firstParagraph.textContent);
console.log(firstParagraph.innerHTML);
// innerHTML is somewhat similar to textContent
// But textContent just output the text while innerHTML output the entire html element content (Text + other elements like <a>)

let newFirstParagraph = document.querySelector("p");
// As we pushed the firstParagraph to the bottom in the 110 line, the new first paragraph is actually the Second paragraph.
// So when we select a paragraph using querySelector it still selects the first paragraph but now actually the first paragraph
// is the Second paragraph.
let thirdParagraph = document.getElementById("third-paragraph-id");

newFirstParagraph.textContent = "Hi! This is <strong>important!</strong>";
// result = Hi! This is <strong>important!</strong>
thirdParagraph.innerHTML = "Hi! This is <strong>important!</strong>";
// result = Hi! This is important! (important! word has got bold.)
// This means the browser identifies the tags which sits inside innerHTML
// But the browser doesn't recognize the tags inside textContent

