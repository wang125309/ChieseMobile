require("../../bower_components/zepto/zepto.js");
require("../../bower_components/zeptojs/src/touch.js");
require("../../bower_components/velocity/velocity.min.js");
require("../../bower_components/swiper/dist/js/swiper.min.js");
require("../js/share.min.js");

window.onload = function(){

    w = $(window).width();
    h = $(window).height();
    $(document).on("touchmove",function(){
        return false;
    });
    on = false;
    $("#audio").attr({"src":"/static/image/background.mp3"});
    $("#audio")[0].play();
    $(".music").on("click",function(){
        if(on) {
            on = false;
            document.getElementById("audio").pause();
            $(".music").removeClass("music-play");
        }   
        else {
            on = true;
            document.getElementById("audio").play();
            $(".music").addClass("music-play");
        }
    });
    var clearAnimation = function(fun) {
        $(".title").hide();
        $(".sound").hide();
        $(".main4-text").hide();
        fun();
    };
    var page1Show = function() {
        i = 1;
        car = setInterval(function(){
            $(".page1 > .car"+i%3).show();
            $(".page1 > .car"+(i-1)%3).hide();
            i += 1;
            console.log((i-1)%3);
        },100);
    };
    var page2Show = function() {
        clearInterval(car);
        $(".p2-text1").velocity("fadeIn");
        var tabActive = function(tab) {
            for(i=1;i<=3;i++) {
                $(".p"+i).removeClass("active");
                $(".p2-text"+i).velocity("fadeOut");
            }
            $(".p"+tab).addClass("active");
            $(".p2-text"+tab).velocity("fadeIn");
        };
        $(".p1").on('tap',function(){
            tabActive(1);   
        });
        $(".p2").on('tap',function(){
            tabActive(2);   
        });
        $(".p3").on('tap',function(){
            tabActive(3);   
        });
    };
    var page3Show = function() {
        $(".page3 .title").velocity("fadeIn");
    };
    var page4Show = function() {
        $(".page4 .first").hide();
        $(".page4 .second").hide();
        $(".page4 .third").hide();
        $(".page4 .title").show();
        $(".page4 .sub-title").show();
        $(".page4 .main4-text").velocity("fadeIn");
        $(".page4 .first").show();
        $(".page4 .second").show();
        $(".page4 .third").show();
    };
    var page5Show = function() {
        $(".page5 .title").show();
        $(".page5 .sub-title").show();
    };
    var car;
    var swiper = new Swiper('.swiper-container', {
        direction:'vertical',
        speed:500,
        onInit: function() {
            clearAnimation(page1Show);
        },
        onSlideChangeEnd: function(swiper){
            if(swiper.activeIndex == 0) {
                clearAnimation(page1Show);
            }
            else if(swiper.activeIndex == 1) {

                clearAnimation(page2Show);
            }
            else if(swiper.activeIndex == 2) {
                clearAnimation(page3Show);
            }
            else if(swiper.activeIndex == 3) {
                clearAnimation(page4Show);
            }
            else if(swiper.activeIndex == 4) {
                clearAnimation(page5Show);
            }
        }
    });
}
