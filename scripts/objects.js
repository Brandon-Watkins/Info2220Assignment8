/*
Brandon Watkins
September 18, 2019
INFO 2220
Jon Holmes
Assignment 4
Purpose: This is an objects script, to test JS, objects, and click events.
*/

var personHolder;
var characters;


function Person(FirstName, LastName) {// unsure why I needed to add "this" to everything in here for it to work. otherwise I couldn't access them through the objects
    this.firstName = FirstName;
    this.lastName = LastName;
    this.age;
    this.stepsToTake;

    this.TakeSteps = function () {// unsure why I couldn't use function TakeSteps() {...}
        var stepsTaken = "";
        for (var i = 1; i <= this.stepsToTake; i++) {
            stepsTaken = stepsTaken + i.toString() + " ";
        }
        return stepsTaken
    };

    this.SumAge = function () {
        var ageSum = 0;
        for (var i = 1; i <= this.age; i += 2) {
            ageSum += i;
        }
        return ageSum;
    };
}

function Converter() {
    //Utilizing https://www.mathsisfun.com/temperature-conversion.html for the equations.
    this.FToC = function (Fahrenheit) {
        return (Fahrenheit - 32) * 5.0 / 9
    };

    this.CToF = function () {
        var celsius = arguments[0];
        return (celsius * 9.0 / 5) + 32;
    };
}

function sayHello() {
    var name = window.prompt("Please enter your name.");
    alert("Hello, " + name + ".");
}

function greet(Greeting) {
    var name = window.prompt("Please enter your name.");
    alert(Greeting + ", " + name + ".");
}

function doMaths(firstNumber, secondNumber) {
    var maths = new Array();
    maths[0] = "" + firstNumber + secondNumber;
    maths[1] = (firstNumber + secondNumber);
    maths[2] = firstNumber - secondNumber;
    maths[3] = firstNumber * secondNumber;
    maths[4] = firstNumber / secondNumber;
    alert(maths.join("\n"));
}

function createPerson() {
    var first = window.prompt("Please enter your first name.");
    if (first === undefined || first === "") {
        alert("You cancelled the first name input.");
        return;
    }
    var last = window.prompt("Please enter your last name.");
    if (last === undefined || first === "") {
        alert("You cancelled the last name input.");
        return;
    }
    var age = enterAge();
    personHolder = new Person(first, last);
    this.personHolder.age = age;
    personHolder = this.personHolder;// needed "this", or it wouldn't update the global object with the one I just made.
}

function enterAge() {
    var age = "";
    age = window.prompt("Please enter your age, in years.");
    if (age === null) {
        alert("You cancelled the age input.");
    }
    else {
        if (age === "" + parseInt(age)) {
            age = parseInt(age);
            if (age < 1 || age > 120) {
                alert("Age entered was out of range (1-120).");
                age = enterAge();
            }
        }
        else {
            alert("Age entered was not a number.");
            age = enterAge();
        }
    }
    return age;
}

function showSteps() {
    if (personHolder === undefined) {
        alert("You must click the 'Fill Object' button first!")
    }
    else {
        this.personHolder.stepsToTake = 14;
        var str = this.personHolder.TakeSteps();
        alert(personHolder.firstName + " " + personHolder.lastName + " took steps: \n" + this.personHolder.TakeSteps()); 
    }
}

function getDegreesInC(fahrenheit) {
    var conv = new Converter();
    alert(conv.FToC(fahrenheit));
}

function getDegreesInF(celsius) {
    var conv = new Converter();
    alert(conv.CToF(celsius));
}

function fillCharacterArray() {
    var firstNameArray = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
    var lastNameArray = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
    var ageArray = [36, 34, 7, 34, 32, 8];

    characters = [];
    for (var i = 0; i < firstNameArray.length; i++) {
        var character = Object.create(new Person(firstNameArray[i], lastNameArray[i]));
        character.age = ageArray[i];
        characters[i] = character;
    }
}

function getCharacterAt(index) {
    if (characters === undefined) {
        alert("You must click the 'Fill Characters Array' button first!");
    }
    else {
        alert(characters[index].firstName + ", your odd age sum is " + characters[index].SumAge() + ".");
    }
}