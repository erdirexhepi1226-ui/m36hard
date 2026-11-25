if (window.jQuery) {
    alert("jQuery loaded successfully!");
}

$(document).ready(function() {

    $("#highlight").click(function() {

        $("li:visible").css("background-color", "yellow");

    });

});

$(document).ready(function() {

    $("#animate").click(function() {

        $("#box")
            .animate({ width: "300px" })
            .animate({ backgroundColor: "green" })
            .slideUp()
            .delay(2000)
            .slideDown();

    });

});