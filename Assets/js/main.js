
let countDownDate = new Date("July 23, 2024 15:37:25").getTime();

$(document).ready(function () {
    $(".loader").fadeOut(500, function () {
        $(".loading").fadeOut(500, function () {
            $("body").removeClass("overflow-hidden")
            $(".loading").remove()
        })
    })
    let x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $(".days").html(days + " D")
        $(".hours").html(hours + " H")
        $(".min").html(minutes + " M")
        $(".sec").html(seconds + " S")
    }, 200);
    $("#leftMenu a").click(function () {
        var sectionId = $(this).attr("href");
        var positionOfSection = $(sectionId).offset().top;
        $("html , body").animate({ scrollTop: positionOfSection }, 500);

    })
    $("textarea").on("input", function (e) {
        $("#chars").html(100 - e.target.value.length);
        if ($("#chars").html() <= 0) {
            $("#chars").html("No More")
            $("#info").on("submit", function (e) {
                e.preventDefault();
            })
        }
    })
    $(".closebtn").on("click", function () {
        $("#leftMenu").toggleClass("expand")
        $(".openBtn").fadeIn();
    })
    $(".openBtn").on("click", function () {
        $("#leftMenu").toggleClass("expand", function () {
        })
        $(".openBtn").fadeOut();
    })
    $("#sliderDown .toggle").on("click", (function () {
        $('.inner').not($(this).next()).slideUp(500);
        $(this).next().slideToggle(500);
    }))
})