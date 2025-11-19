let myLanguage = false;
let language = myLanguage || "js";
console.log("The language is: " + language);
// Output: The language is: js

let myLanguage1 = "c";
let language1 = myLanguage || "js";
console.log("The language is: " + language1);
// Output: The language is: c

let myLanguage2 = "php";
let language2 = myLanguage2 ? "php" : "c++";
console.log("The language is: " + language2);
// Output: The language is: php
