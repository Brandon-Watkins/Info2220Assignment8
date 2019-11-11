$(document).ready(function () {
    //1
    $("#btnChangeSpan").on("click", function () {
        $("#spnOne").text("New Text for the Span");
    });

    //2
    $("#btnAppendToSpan").on("click", function () {
        $("#spnOne").append(" == Text at the back");
    });

    //3
    $("#btnPrependToSpan").on("click", function () {
        $("#spnOne").prepend("Text at the front -- ");
    });

    //4
    $("#btnBeforeSpan").on("click", function () {
        $("#spnOne").before("Text before ++ ");
    });

    //5
    $("#btnAfterSpan").on("click", function () {
        $("#spnOne").after(" @@ Text After");
    });

    //6
    $("#btnShowSpan").on("click", function () {
        alert($("#spnOne").text());
    });

    //7
    $("#btnNumberPs").on("click", function () {
        $.each($("#divNumbers p"), function (indexInArray) {
            $(this).prepend(indexInArray + 1 + ". ");
        });
    });

    //8
    $("#btnClassPSuccess").on("click", function () {
        $.each($("#divClass p").addClass("success"));
    });

    //9
    $("#btnClassPError").on("click", function () {
        $.each($("#divClass p"), function (index) {
            if (index % 2 === 0) {
                $(this).removeClass("success").addClass("error");
            }
        });
    });

    //10
    $("#btnClassPWarning").on("click", function () {
        $.each($("#divClass p"), function () {
            // This will remove the divClass class, as requested, but I expect that wasn't the intention.
            // Instead, I could remove specifically the success and error classes.
            $(this).removeAttr("class").addClass("warning");
        });
    });

    //11
    $("#btnAddLastNames").on("click", function () {
        var $barney = $(".bff");
        // i.
        $barney.prev().append("<strong>Flintstone </strong>");
        //ii.
        $barney.append($("<em></em>").text("Rubble "));
        //iii.
        $barney.next().append($("<del></del>").text("the Dinosaur "));
    });

    //12
    $("#btnRemoveLarry").on("click", function () {
        $("li.first").remove();
    });

    //13
    $("#btnClearCurly").on("click", function () {
        $("li.second").text("");
    });

    //14
    $("#btnRemoveMoeLastName").on("click", function () {
        $("li.third span").remove();
    });

    //15
    $("#btnRemoveShempLastName").on("click", function () {
        var $moe = $("li.third");
        $moe.next().children("span").remove();
    });

    //16
    $("#btnChangeText").on("click", function () {
        var $span2 = $("#spnTwo");
        $span2.parent().next().children().first().next().text("I was Changed.");
    });

    //17
    $("#btnTogglePs").on("click", function () {
        if ($("#btnTogglePs").text() === "Hide All Ps") {
            $("p").css("visibility", "hidden");
            $("#btnTogglePs").text("Show All Ps");
        }
        else {
            $("p").css("visibility", "visible");
            $("#btnTogglePs").text("Hide All Ps");
        }
    });

});