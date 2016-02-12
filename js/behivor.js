jQuery(document).ready(function ($) {
    setTimeout(function() {
        $('.loader').addClass('animated slideOutUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
            $(this).hide();
        });
    }, 1000);
    $('.selectDept').dropdown({
        placeholder: false
    });
    $('.selectDept .text').html('Staff');
    $('.skypebutton').popup();
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
app.controller('membrii', function($scope, $http) {
    $scope.membrii = {};
    $scope.load = false;
    var request = $http({
        method: "post",
        url: 'backend/membrii.php',
        data: "departament=Staff",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    });
    request.then(function(response) {
        $scope.membrii = response.data.membrii;
    });
    $scope.update = function() {
        $scope.load = true;
        var request = $http({
            method: "post",
            url: 'backend/membrii.php',
            data: "departament="+$scope.departament,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
        });
        $scope.load = false;
        request.then(function(response) {
            $scope.membrii = response.data.membrii;
            $scope.load = false;
            jQuery(document).ready(function() {
                $scope.load = false;
            });
        });
    }
});
app.controller('UsersIndexController', ['$scope', function($scope) {
    // ... code omitted ...
    // Dates can be passed as strings or Date objects
    var oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    $scope.calendarOptions = {
        defaultDate: new Date(),
        minDate: oneWeekAgo,
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
            title: 'Balul de caritate',
            date: new Date([2015, 12, 7]),
            description: 'Luni, 7 decembrie 2015, incepand cu ora 18:00, ne vedem la Balul de Caritate "Craciun din Inima de Student" - https://www.facebook.com/events/192488591091013/! Haideti sa ajutam o mana de copilasi sa aiba un Craciun calduros si luminos!',
            website: "",
            ora: "18:00"
        },
        {
            title: 'Excursieee!',
            date: new Date([2015, 12, 1]),
            description: '',
            website: "",
            ora: ""
        },
        {
            title: 'Sedinta generala',
            date: new Date([2015, 12, 9]),
            description: 'Pe data de 9 decembrie la ora 20:00 in C2 va avea loc o sedinta generala la care vom alege si noul coordonator al proiectului LAN Party. Avem doi candidati, Ciprian si Daniel. O sa atasez planurile manageriale la aceasta postare. Va rog sa le cititi si sa va pregatiti sa puneti intrebari, chiar daca nu aveti drept de vot.',
            website: "",
            ora: "20:00"
        },
        {
            title: 'Sedinta de departament',
            date: new Date([2015, 12, 8]),
            description: '',
            website: "",
            ora: "20:00"
        },
        {
            title: 'Sedinta de departament',
            date: new Date([2015, 12, 15]),
            description: '',
            website: "",
            ora: "20:00"
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