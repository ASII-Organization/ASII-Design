jQuery(document).ready(function ($) {
    setTimeout(function() {
        $('.loader').addClass('animated slideOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).hide();
        });
    }, 1000);
    var jssor_1_options = {
        $AutoPlay: true,
        $SlideDuration: 800,
        $SlideEasing: $Jease$.$OutQuint,
        $ArrowNavigatorOptions: {
            $Class: $JssorArrowNavigator$
        },
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$
        }
    };

    var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

    //responsive code begin
    //you can remove responsive code if you don't want the slider scales while window resizing
    function ScaleSlider() {
        var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
        if (refSize) {
            refSize = Math.min(refSize, 1920);
            jssor_1_slider.$ScaleWidth(refSize);
        }
        else {
            window.setTimeout(ScaleSlider, 30);
        }
    }
    ScaleSlider();
    $(window).bind("load", ScaleSlider);
    $(window).bind("resize", ScaleSlider);
    $(window).bind("orientationchange", ScaleSlider);
    //responsive code end
});
$(document).on('mouseenter', '.logo img', function() {
    $(this).addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
        $(this).removeClass('animated tada');
    });
});
$(document).on('click', '.veziMembrii', function() {
    $('.membriiAsii').modal('show');
});
$(document).on('click', '.ui.sidebar.inverted.vertical.menu a', function(e) {
    $('.ui.sidebar').sidebar('toggle');
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top-30
    }, 1500, 'swing', function () {
        window.location.hash = target;
    });
});
$('.prezentareEmbed').embed();
window.sr = new scrollReveal();
$(document).on('click', '.menuResponsive', function() {
    $('.ui.sidebar').sidebar('toggle');
});
$(document).on('mouseenter', '#departamente .row .column', function(e) {
    e.stopPropagation();
    var url = $(this).children('img').attr('src');
    $(this).children('img').attr('src', $(this).children('img').attr('data-change'));
    $(this).children('img').attr('data-change', url);
}).on('mouseleave', '#departamente .row .column', function(e) {
    e.stopPropagation();
    var url = $(this).children('img').attr('src');
    $(this).children('img').attr('src', $(this).children('img').attr('data-change'));
    $(this).children('img').attr('data-change', url);
});
$('.special.cards .image').dimmer({on: 'hover'});
$(document).on('click', '#departamente .row .column', function() {
    $('#'+$(this).attr('data-id')).modal('show');
});
$('.menu-header a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-50
    }, 500);
    return false;
});
var app = angular.module('asii', ['500tech.simple-calendar']);
app.controller('departamentModal', function($scope) {

});
app.controller('UsersIndexController', ['$scope', function($scope) {
    // ... code omitted ...
    // Dates can be passed as strings or Date objects
    $scope.calendarOptions = {
        defaultDate: new Date(),
        minDate: new Date(),
        maxDate: new Date([2020, 12, 31]),
        dayNamesLength: 9, // How to display weekdays (1 for "M", 2 for "Mo", 3 for "Mon"; 9 will show full day names; default is 1)
        eventClick: $scope.eventClick,
        dateClick: $scope.dateClick
    };
    $scope.modalInfo = {
        modalTitle: "Example Title",
        modalContent: "Example Content",
        modalWebsite: "http://example.com",
        modalOra: "12:23",
        modalDate: "23/12/2015"
    };

    $scope.events = [ //Year Month Day
        {
            title: 'Balul Bobocilor',
            date: new Date([2015, 12, 11]),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquam ligula quis aliquet. Nullam elementum non massa et fringilla. Suspendisse nec elit vel metus dictum vestibulum id eget velit. Nulla pellentesque tortor eu cursus pharetra. Donec a consectetur neque.",
            website: "http://balul-boocilor.asii.ro",
            ora: "20:00"
        },
        {
            title: 'Sedinta Deschisa',
            date: new Date([2015, 12, 21]),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquam ligula quis aliquet. Nullam elementum non massa et fringilla. Suspendisse nec elit vel metus dictum vestibulum id eget velit. Nulla pellentesque tortor eu cursus pharetra. Donec a consectetur neque.",
            website: false,
            ora: false
        },
        {
            title: 'Sedinte de departament',
            date : new Date([2015,12,27]),
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie aliquam ligula quis aliquet. Nullam elementum non massa et fringilla. Suspendisse nec elit vel metus dictum vestibulum id eget velit. Nulla pellentesque tortor eu cursus pharetra. Donec a consectetur neque.",
            website: false,
            ora: false
        }
    ];

    $scope.eventClick = function(event){
        alert(event.title);
    }
    $scope.dateClick = function(event){
        alert(event.title);
    }
    $scope.options = {
        eventClick : function(event){alert(event.title);},
        dateClick : function(event){alert(event.title);}
    }
}]);