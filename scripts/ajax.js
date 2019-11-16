var textToFind = "Search for...";
var jsonData = null;
var temp = null;

function searchResults() {

    for (var i = 0; i < jsonData.books.length; i++) {
        temp = jsonData.books[i];
        if (// Search for books with partially matching title
            temp.title.toLowerCase().includes(textToFind.toLowerCase()) ||
            // Search for books with partially matching ISBN
            temp.ISBN.includes(textToFind) ||
            // Search for books with partially matching author name
            temp.author.authorLastName.toLowerCase().includes(textToFind.toLowerCase()) ||
            temp.author.authorMiddleName.toLowerCase().includes(textToFind.toLowerCase()) ||
            temp.author.authorFirstName.toLowerCase().includes(textToFind.toLowerCase())) {

            // If a partial match was found, update the table
            appendResults();
        }
        // Check the books for partially matching tags
        else {
            found = false;
            index = 0;
            while (found === false && index < temp.tags.length) {
                if (temp.tags[index].toLowerCase().includes(textToFind.toLowerCase())){
                    found = true;
                }
                if (found) {
                    appendResults();
                }
            }
        }

    }
    jsonData = null;
    temp = null;
}

var appendResults = function () {
    var name = temp.author.authorLastName + ",\r\n" + temp.author.authorFirstName;
    if (temp.author.authorMiddleName != null) {
        name += "\r\n" + temp.author.authorMiddleName;
    }

    var tags = "<ul>";
    for (var j = 0; j < temp.tags.length; j++) {
        tags += "<li>" + temp.tags[j] + "</li>";
    }
    tags += "</ul>";

    $("#books thead").append("<tr class id='temp'><td>" + temp.title + "</td>" +
        "<td>" + temp.ISBN + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + tags + "</td>" +
        "</tr>");
}

var clearTable = function () {
    $.each($("#books .temp"), $("tr").remove());
};

$(document).ready(function () {

    $("#btnSearch").on("click", function (e) {
        e.preventDefault();
        textToFind = $("#txtSearch").val();
        tempTable = "";
        $.ajax({
            url: "data/books.json",
            dataType: "JSON",
            beforeSend: clearTable,
            success: function (data) {
                jsonData = data;
                searchResults();
            },
            fail: function () {
                alert("Failed to retrieve JSON file.");
            }
        });
    });

    $("#txtSearch").on("focus", function () {
        $("#txtSearch").val("");
    })

    $("#txtSearch").on("blur", function () {
        if ($("#txtSearch").val() === "") {
            $("#txtSearch").val("Search for...");
        }
    })
});
