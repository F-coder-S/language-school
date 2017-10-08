(function( $ ) {
    $.fn.selectbox = function() {
        var selectDefaultHeight = $('.selectboxss').height();
        $('.selectboxss .selectboxssvalue').click(function() {
            var currentHeight = $(this).closest(".selectboxss").height();
            if (currentHeight < 100 || currentHeight == selectDefaultHeight) {
                $(this).closest(".selectboxss").attr("style", "position:absolute !important; z-index:100;height:250px;");

                $(this).find('.s-arr').removeClass('fa-angle-down');
                $(this).find('.s-arr').addClass('fa-angle-up');
            }
            if (currentHeight >= 250) {

                $(this).closest(".selectboxss").attr("style", "position:absolute !important; z-index:1;height:"+selectDefaultHeight+"px;");

                $(this).find('.s-arr').removeClass('fa-angle-up');
                $(this).find('.s-arr').addClass('fa-angle-down');
            }
        });
        $('li.selectoption').click(function() {
            $(this).closest(".selectboxss").attr("style", "position:absolute !important; z-index:1;height:"+selectDefaultHeight+"px;");
            $(this).closest(".selectboxss").find('.s-arr').removeClass('fa-angle-up');
            $(this).closest(".selectboxss").find('.s-arr').addClass('fa-angle-down');

            $(this).closest(".selectboxss").find('.selectboxssvalue span').text($(this).text());
            $(this).closest(".selectboxss").find('.selectboxssvalue span').attr("style", "color:#333;");

            var v = $(this).data('value');
            $(this).closest(".selectboxss").find('.hds').val(v);
        });
    };
})( jQuery );

/* map */

function init(){
    var myMap;

    myMap = new ymaps.Map("map", {
        center: [55.763655,  37.642348],
        zoom: 15,
        controls: []
    });

    myMap.behaviors.disable('scrollZoom');

    myMap.controls.add(
        new ymaps.control.ZoomControl()
    );
}



$(document).ready(function() {

    $('#selectBoxCountry #selectBoxProgramm').selectbox();

    $("#begun-age").slider({
        value: 23,
        min: 3,
        max: 40,
        step: 1,
        create: function (event, ui) {
            var val = $('#begun-age').slider("value");
            $("#begun-age .ui-slider-handle").html('<div class="view-slider">' + val + '</div>');
            $('#inp-age').val(val);
        },
        slide: function (event, ui) {
            var val = ui.value;

            if (val == 40) val = '40+';

            $("#begun-age .ui-slider-handle").html('<div class="view-slider">' + val + '</div>')
        },
        change: function (event, ui) {
            $('#inp-age').attr('value', ui.value);
        }
    });

    $("#carousel-1").owlCarousel({
        autoplay: true,
        items: 1,
        dots: true,
        loop: true
    });

    $("#carousel-2").owlCarousel({
        autoplay: true,
        items:1,
        dots: false,
        loop: true,
        nav: true,
        navText: ["<"][">"]
    });

    $("#question-link-1").click(function() {
        $(".question-answer-1").toggleClass("active-block");
    });

    $("#question-link-2").click(function() {
        $(".question-answer-2").toggleClass("active-block");
    });

    $("#question-link-3").click(function() {
        $(".question-answer-3").toggleClass("active-block");
    });

    $(".new-caption").click(function () {
        $(".new-caption").addClass("active-news-caption");
        $(".state-caption").removeClass("active-news-caption");
        $(".news").addClass("active-news");
        $(".states").removeClass("active-news");
    });

    $(".state-caption").click(function () {
        $(".state-caption").addClass("active-news-caption");
        $(".new-caption").removeClass("active-news-caption");
        $(".states").addClass("active-news");
        $(".news").removeClass("active-news");
    });


});
