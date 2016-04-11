/**
 * Created by 123 on 2016/1/31.
 */

$(document).ready(function () {
    $(".header-nav ul li").click(function () {
        $(this).css({
            "background-color": "white",
            "color": "black"
        })
    })

    $(".content2-botton").mouseover(function () {
        $(".content2-background").animate({
                height: "10.1%"
            }, 350)
            .html("learn more")

    })

    $(".content2-botton").mouseout(function () {
        $(".content2-background").animate({
            height: "0%"
        }, 350)
    })

    $(".content3-botton").mouseover(function () {
        $(".content3-background").animate({
                height: "9.2%"
            }, 350)
            .html("learn more")

    })
    $(".content3-botton").mouseout(function () {
        $(".content3-background").animate({
            height: "0%"
        }, 350)
    })


    var l=$(".banner-nav li").length
    var i=0;
      var play= function(){

            if(i==l){
                i=0;

                $(".banner-animate-container2").css({
                    left:0
                })
            }else {

                $(".banner-animate-container2").animate({
                    left:-(i*791.625)+"px"

                },300)
                $(".banner-nav li a").css({
                    color: "black"
                })
                $(".banner-nav li a").eq(i).css({
                    color: "#ba0c2f"
                })

                i++;

            }

        }

    var timer=setInterval(play,1100)

    $(".banner-nav li").mouseover(function () {

        var a = $(this).index();

        $(".banner-nav li a").css({
            color: "black"
        })
        $(".banner-nav li a").eq(a).css({
            color: "#ba0c2f"
        })

        $(".banner-animate-container2").css({
            left:-(a*791.625)+"px"
        })
        clearInterval(timer);

    })
    $(".banner-nav li").mouseout(function () {

         timer=setInterval(play,1100);
    })
})
