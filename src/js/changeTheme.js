import $ from "jquery";

$(document).ready(function () {
    $("#switch-theme").click(function () {
        $("body").toggleClass("bg-dark bg-light");
        $("#logo").toggleClass("logo-dark-mode logo-light-mode");
        $("#menu-links")
            .children("li")
            .children("a")
            .toggleClass("link-light link-dark");
        $("#switch-theme-icon").toggleClass("text-light text-dark");
        $(".presentation").toggleClass("text-light text-dark");
        $(".github").toggleClass("link-dark link-light");
        $("#home").toggleClass("dark light");
        $("#nombre").toggleClass("bg-dark-mode bg-light-mode")
        $("#cargo").toggleClass("bg-dark-mode bg-light-mode")
        $("#tecno").toggleClass("bg-dark-mode bg-light-mode")
        $("#github").toggleClass("bg-dark-mode bg-light-mode")
        $("#sobre_mi").toggleClass("text-light text-dark")
        $("#legend").toggleClass("text-light text-dark")
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
