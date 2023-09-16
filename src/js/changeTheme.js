import $ from "jquery";

$(document).ready(function () {
    $("#switch-theme").click(function () {
        $("body").toggleClass("bg-dark bg-light");
        $("#logo").toggleClass("logo-dark-mode logo-light-mode");
        $("#menu-nav").toggleClass("text-light text-dark");
    });
});

$(document).ready(function () {
    $('.toggle input[type="checkbox"]').click(function () {
        $(this).parent().toggleClass("on");
    });

    $("input").focusin(function () {
        $(this).parent().addClass("focus");
    });

    $("input").focusout(function () {
        $(this).parent().removeClass("focus");
    });
});
