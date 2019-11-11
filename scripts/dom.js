/*
Brandon Watkins
September 24, 2019
INFO 2220
Jon Holmes
Assignment 5
Purpose: This is a script for practicing dom modifications.
*/

var arrFirstName = ["Fred", "Wilma", "Pebbles", "Barney", "Betty", "BamBam"];
var arrLastName = ["Flintstone", "Flintstone", "Flintstone", "Rubble", "Rubble", "Rubble"];
var arrAge = [36, 34, 7, 34, 32, 8];

function showInnerText() {
    var el = document.getElementById("pOne");
    alert(el.innerText);
}

function showInnerHTML() {
    var el = document.getElementById("pOne");
    alert(el.innerHTML);
}

function numberList() {
    var el = document.getElementsByTagName("li");
    for (var i = 1; i <= el.length; i++) {
        var tNode = document.createTextNode(" " + i);
        el[i - 1].appendChild(tNode);
    }
}

function markRows() {
    var el = document.getElementById("tblMarkRows").getElementsByTagName("tr");
    for (var i = 1; i <= el.length; i += 2) {
        el[i].className = "other";
    }
}

function addRows() {
    var el = document.getElementById("tblAddRows");
    for (var i = 0, j = 0; i < arrFirstName.length; i++) {
        var rowEl = document.createElement("tr");
        var firstNameEl = document.createElement("td");
        var lastNameEl = document.createElement("td");
        var ageEl = document.createElement("td");

        firstNameNode = document.createTextNode(arrFirstName[i]);
        lastNameNode = document.createTextNode(arrLastName[i]);
        ageNode = document.createTextNode(arrAge[i]);

        firstNameEl.appendChild(firstNameNode);
        lastNameEl.appendChild(lastNameNode);
        ageEl.appendChild(ageNode);

        rowEl.appendChild(firstNameEl);
        rowEl.appendChild(lastNameEl);
        rowEl.appendChild(ageEl);

        el.appendChild(rowEl);

        if (j % 2 === 0) {
            rowEl.className = "other";
        }
        j++;
    }
}

function addSuccess() {
    var divMessages = document.getElementById("divMessages");
    var divEl = document.createElement("div");
    divEl.className = "success";
    var divNode = document.createTextNode("This is a Success Message.");
    divEl.appendChild(divNode);
    divMessages.appendChild(divEl);
}

function addWarning() {
    var divMessages = document.getElementById("divMessages");
    var divEl = document.createElement("div");
    divEl.className = "warning";
    var divNode = document.createTextNode("This is a Warning Message.");
    divEl.appendChild(divNode);
    divMessages.appendChild(divEl);
}

function addError() {
    var divMessages = document.getElementById("divMessages");
    var divEl = document.createElement("div");
    divEl.className = "error";
    var divNode = document.createTextNode("This is an Error Message.");
    divEl.appendChild(divNode);
    divMessages.appendChild(divEl);
}