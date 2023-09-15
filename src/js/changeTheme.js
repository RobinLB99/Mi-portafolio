import $ from "jquery";

$(document).ready(function () {
    $("#toggleMode").click(function () {
        $("body").toggleClass("bg-dark bg-light");
        $("#toggleMode").toggleClass("text-light text-dark");
        $("#logo").toggleClass("logo-dark-mode logo-light-mode");
        $("#icon-theme").toggleClass("fa-moon fa-sun");
        $("#menu-nav").toggleClass("text-light text-dark");
    });
});
