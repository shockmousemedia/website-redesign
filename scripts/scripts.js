$(function () {
    $("#footer").load("templates/footer.html");
});

$(function () {
    $("#navigation").load("templates/navigation.html");
});

// Hamburger Menu
$('.menu-btn').on('click', function (e) {
    $(".menu-btn").toggleClass("active");
    $(".bars .bar").toggleClass("rotated");
    $(".header img").toggleClass("light");
    $(".navigation").toggleClass("active");
    $(".navigation ul li").toggleClass("active");
    $("body").toggleClass("overflow-hidden");
});

$('.toggle-btn-1').on('click', function (a) {
    $(".process-list .toggle-1").toggleClass("d-none");
});

$('.toggle-btn-2').on('click', function (a) {
    $(".process-list .toggle-2").toggleClass("d-none");
});

$('.toggle-btn-3').on('click', function (a) {
    $(".process-list .toggle-3").toggleClass("d-none");
});

$('.toggle-btn-4').on('click', function (a) {
    $(".process-list .toggle-4").toggleClass("d-none");
});