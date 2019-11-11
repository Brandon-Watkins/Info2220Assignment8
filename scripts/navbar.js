/*
Brandon Watkins
September 28, 2019
INFO 2220
Jon Holmes
Assignment 2
Purpose: This is a script for adding a navbar to the top of my page.
*/

$(document).ready(function () {
    $("body").prepend('<div class="navbar"><div class="drop-down"><button class="drop-down-list-button">Directory</button><div class="drop-down-list-items">'
        + '<a href="index.html">Assignments</a><a href="resume.html">Resume</a><a href="ass1form.html">Form</a><a href="csstest.html">CSS Test</a>'
        + '<a href="jsintro.html">JS Intro</a><a href="objects.html">Objects</a><a href="dom.html">DOM</a><a href="events.html">Events</a>'
        + '<a href="jQuery.html">jQuery</a></div></div></div>');
});
