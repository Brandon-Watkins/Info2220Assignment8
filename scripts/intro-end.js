/*
Brandon Watkins
September 28, 2019
INFO 2220
Jon Holmes
Assignment 3
Purpose: This is a script for practicing js.
*/

var greeting = window.prompt("Enter a greeting.");
if (greeting === null) alert("You cancelled the prompt, " + name() + ".");
else if (greeting === "") alert("You didn't enter a greeting, " + name() + ".");
else alert(greeting + ", " + name() + ".");
loadLast = "I really am last.";