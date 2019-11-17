var textToFind = "Search for...";
var jsonData;
var temp;

/** for some reason, this function seems to be breaking once it finds a book that does not match
 * the search results. For example, if you search for "978", as soon as it hits the 4th book in
 * the JSON file, it stops. It should come up with 8 results. Also, it is currently not ever
 * touching the "else" statement, so it isn't searching for tags.
 */
var searchResults = function () {

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
                if (temp.tags[index].toLowerCase().includes(textToFind.toLowerCase())) {
                    appendResults()
                    found = true;
                }
                index++;
            }
        }

    }
};

var appendResults = function () {
    var name = temp.author.authorLastName + ", " + temp.author.authorFirstName;
    if (temp.author.authorMiddleName != null) {
        name += " " + temp.author.authorMiddleName;
    }

    var tags = "<ul>";
    for (var j = 0; j < temp.tags.length; j++) {
        tags += "<li>" + temp.tags[j] + "</li>";
    }
    tags += "</ul>";

    $("#books").append("<tr class id='temp'><td>" + temp.title + "</td>" +
        "<td>" + temp.ISBN + "</td>" +
        "<td>" + name + "</td>" +
        "<td>" + tags + "</td>" +
        "</tr>");
};

var clearTable = function () {
    $("#books").contents().nextAll($(".temp")).remove();
};

$(document).ready(function () {

    $.ajax({
        url: "data/books.json",
        dataType: "JSON",
        success: function (data) {
            jsonData = data;
        },
        fail: function () {
            alert("Failed to retrieve JSON file.");
        }
    });

    $("#btnSearch").on("click", function (e) {
        e.preventDefault();
        textToFind = $("#txtSearch").val();
        clearTable();
        searchResults();
    });

    $("#txtSearch").on("focus", function () {
        $("#txtSearch").val("");
    });

    $("#txtSearch").on("blur", function () {
        if ($("#txtSearch").val() === "") {
            $("#txtSearch").val("Search for...");
        }
    });
});
