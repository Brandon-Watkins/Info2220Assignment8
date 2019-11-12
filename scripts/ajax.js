var xhr = new XMLHttpRequest();

xhr.open("GET", "data/books.json", true);
xhr.onload = getResults;

var getResults = function () {
    if (xhr.responseText) showResults(xhr.responseText.parse());
}

var showResults = function (jsObject) {
    $.each("#books.temp").remove;
    for (var i = 0; i < xhr.responseText.parse()) {
        var temp = jsObject[i];// dont think this will work.
        $("#books thead").append(temp);
    }
}

$("#btnSearch").on("click", function () {
    var textToFind = $("txtSearch").text;
    if (textToFind !== "Search for...") xhr.send(textToFind);
})