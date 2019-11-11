/*
Brandon Watkins
September 28, 2019
INFO 2220
Jon Holmes
Assignment 6
Purpose: This is a script for practicing with event listeners.
*/

function moveMouse(e) {
    if (!e) e = window.event;
    var el = document.getElementById("mouseCoords");
    el.innerText = "x: " + e.pageX + " y: " + e.pageY;
}

function mousePressed(e) {
    if (!e) e = window.event;
    var ele = e.target || e.srcElement;
    if (this != ele) ele.setAttribute("class", "pressed");
}

function resetClass(e) {
    if (!e) e = window.event;
    var ele = e.target || e.srcElement;
    ele.setAttribute("class", "");
}

function mouseHeadOver() {
    this.setAttribute("class", "overHead");
}

function loadEvent(e) {
    var sec = document.getElementById("secMouser");
    sec.addEventListener("mousemove", moveMouse, false);
    sec.addEventListener("mousedown", mousePressed, false);
    sec.addEventListener("mouseup", resetClass, false);

    for (var i = 1; i < 7; i++) {
        var heads = document.getElementsByTagName("h" + i);
        for (var j = 0; j < heads.length; j++) {
            heads[j].addEventListener("mouseover", mouseHeadOver, false);
            heads[j].addEventListener("mouseout", resetClass, false);
        }
    }

    var btn = document.getElementById("btnSayHello");
    if (btn.addEventListener) {
        btn.addEventListener("click", function () {
            alert("Hello.");
        }, false);
    }
    else {
        btn.attachEvent("onclick", function () {
            alert("Hello.");
        });
    }

    btn.addEventListener("mousemove", function (e) {
        if (!e) e = window.event;
        if (e.stopPropogation) {
            e.stopPropogation();
        }
        else {
            e.cancelBubble = true;
        }
        document.getElementById("mouseCoords").innerText = "You are over the button.";
    }, false);
}

window.addEventListener("load", loadEvent, false);