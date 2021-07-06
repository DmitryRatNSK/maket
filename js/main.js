$(document).ready (function(){
    $(".navigation-item").toggleClass("transition_disabled");
    $(".first-section-left-content").toggleClass("_active");
    $(".first-section-right-content").toggleClass("_active");
    $(".easy-useful").toggleClass("_active");
})

// var service = document.getElementById("service");
// $("#navigation-extencion").click(function(){
//     service.scrollIntoView({block: "center", behavior: "smooth"});
// });


$("#navigation-service").bind("click", function(){
    $("html, body").animate({
        scrollTop: $("#service").offset().top
    }, 1000);
})
$("#navigation-extencion").bind("click", function(){
    $("html, body").animate({
        scrollTop: $("#what-our-customers").offset().top
    }, 1000);
})
$("#navigation-pricing").bind("click", function(){
    $("html, body").animate({
        scrollTop: $("#our-team").offset().top
    }, 1000);
})
$("#navigation-help").bind("click", function(){
    $("html, body").animate({
        scrollTop: $("#contact-us").offset().top
    }, 1000);
})

let change = document.querySelectorAll('.fourth-section-fold');
change.forEach(function(element){
    element.onclick = function(){
        $('#full-'+element['id']).toggleClass('hidden');
        $('#to-close-'+element['id']).toggleClass('to-close');
        $('#'+element['id']).toggleClass('rotating-fold');
    }
});

$(function(){
    $('.slick-vertical').slick({
        vertical: true,
        verticalSwiping: false,
        slidesToShow: 2,
        prevArrow: '<div class="fifth-section-fold" id="fifth-section-up"></div>',
        nextArrow: '<div class="fifth-section-fold" id="fifth-section-down"></div>',
    });
});