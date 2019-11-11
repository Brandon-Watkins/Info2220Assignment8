/*
Brandon Watkins
September 28, 2019
INFO 2220
Jon Holmes
Assignment 3
Purpose: This is a script for practicing js.
*/

alert("The script in the header has run.");
var loadLast = "I loaded last";
var myFirstArray;
if (typeof myFirstArray === "undefined") {
    myFirstArray = [];
} else {
    alert("The array was not undefined");
}
myFirstArray = new Array(34, 5.5, 33.5, 46.5, 59, 64, 43, 64, 48, 49, 40, 59, 44, 54, 19.5, 25, 69, 23);
var average = 0;
for (var i = 0; i < myFirstArray.length; i++) {
    if (myFirstArray[i] !== 0) {
        average = (average + (myFirstArray[i] / myFirstArray.length));
    }
}
alert(average);
function name() {
    return "Brandon";
}