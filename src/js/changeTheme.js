import $ from "jquery";

$(document).ready(function () {
    $("#switch-theme").click(function () {
        $("body").toggleClass("bg-dark bg-light");
        $(".navbar").toggleClass("dark light")
        $("#logo").toggleClass("logo-dark-mode logo-light-mode");
        $("#menu-links")
            .children("li")
            .children("a")
            .toggleClass("link-light link-dark");
        $("#switch-theme-icon").toggleClass("text-light text-dark");
        $(".presentation").toggleClass("text-light text-dark");
        $(".github").toggleClass("link-dark link-light");
        $("#home").toggleClass("dark light");
        $("#nombre").toggleClass("bg-dark-mode bg-light-mode");
        $("#cargo").toggleClass("bg-dark-mode bg-light-mode");
        $("#tecno").toggleClass("bg-dark-mode bg-light-mode");
        $("#github").toggleClass("bg-dark-mode bg-light-mode");
        $("#sobre_mi").toggleClass("text-light text-dark");
        $("#legend").toggleClass("text-light text-dark");
        /**Sección proyectos */
        $(".project-section-title").toggleClass("text-light text-dark");
        $(".project-section-border").toggleClass("border-light border-dark");
        $("#Projects").toggleClass("dark light");
        $(".card").toggleClass("card-dark card-light");
        $(".card-title").toggleClass("text-light text-dark");
        $(".card-text").toggleClass("text-light text-dark");
        $(".links>label>a").toggleClass("link-light link-dark");
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
