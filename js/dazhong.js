/**
 * Created by ¡˙…Ÿ on 2017/6/8.
 */

$(function(){

    var i=0;

    var Count=$(".page").length-1;

    $("body").swipeUp(
        function(){
            if(i<Count){
                $(".page").eq(i).addClass("pageUp");
                $(".page").eq(i).children().addClass("hide");
                i++;
                $(".page").eq(i).removeClass("pageDown");
                $(".page").eq(i).children().removeClass("hide");
            }

        }
    )

    $("body").swipeDown(
        function(){
            if(i>0){
                $(".page").eq(i).addClass("pageDown");
                $(".page").eq(i).children().addClass("hide");
                i--;
                $(".page").eq(i).removeClass("pageUp");
                $(".page").eq(i).children().removeClass("hide");
            }
        }
    )


    $(".page-2,.page-3,.page-4").swipeLeft(
        function(){
            $(this).children("div").eq(0).addClass("pageLeft");
            $(this).children("div").eq(1).removeClass("pageRight");

            $(this).children(".subpage").eq(0).addClass("hide");
            $(this).children(".subpage").eq(1).removeClass("hide");

        }
    )

    $(".page-2,.page-3,.page-4").swipeRight(
        function(){
            $(this).children("div").eq(0).removeClass("pageLeft");
            $(this).children("div").eq(1).addClass("pageRight");

            $(this).children(".subpage").eq(1).addClass("hide");
            $(this).children(".subpage").eq(0).removeClass("hide");
        }
    )

})
