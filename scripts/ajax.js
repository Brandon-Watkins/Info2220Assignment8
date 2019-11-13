﻿var textToFind = "Search for...";

var showResults = function (jsonData) {
    $.each("#books.temp").remove;
    var jqObject = JSON.parse(jsonData.responseText);
    var tempTable;
    for (var i = 0; i < jqObject.books.length; i++) {
        var temp = jqObject.books[i];
        if (temp.title.contains(textToFind) || temp.ISBN.contains(textToFind) ||
            temp.author.contains(textToFind) || temp.tags.contains(textToFind)) {

            var tempRow = "";
            var name = temp.author.authorLastName + ",\r\n" + temp.author.authorFirstName;
            if (temp.author.authorMiddleName != null) name += "\r\n" + temp.author.authorMiddleName;

            var tags = "<ul>";
            for (var j = 0; j < temp.tags.length; j++) {
                tags += "<li>" + temp.tags[j] + "</li>";
            }
            tags += "</ul>";

            tempRow += "<tr class id='temp'><td>" + temp.title + "</td>" +
                "<td>" + temp.ISBN + "</td>" +
                "<td>" + name + "</td>" +
                "<td>" + tags + "</td>" +
                "</tr";

            tempTable += tempRow;
        }
    }
    if (tempTable != null && tempTable != undefined) $("#books thead").append(tempTable);
}

$("#txtSearch").on("blur", function () {
    textToFind = $("#txtSearch").val();
});

$("#btnSearch").on("click", function (e) {
    e.preventDefault();
    $.getJSON("data/books.json", showResults(data));
});
