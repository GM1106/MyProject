
$(document).ready(function () {
    $("#showContentNY").click(function () {
        if ($("#contentNY").is(":hidden")) {
            $("#contentNY").show("slow");
        } else {
            $("#contentNY").hide("slow");
        }
        return false;
    });
});

$(document).ready(function () {
    $("#showContentHK").click(function () {
        if ($("#contentHK").is(":hidden")) {
            $("#contentHK").show("slow");
        } else {
            $("#contentHK").hide("slow");
        }
        return false;
    });
});

