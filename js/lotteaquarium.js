$(document).ready(function(){
    
    $(".tab_n_01").click(function() {
        if($(".content.n_01").toggleClass("active")){
            $(".content.n_02").removeClass("active");
            $(".content.n_03").removeClass("active");
            $(".content.n_04").removeClass("active");
        } 
    });
    $(".tab_n_02").click(function() {
        if($(".content.n_02").toggleClass("active")){
            $(".content.n_01").removeClass("active");
            $(".content.n_03").removeClass("active");
            $(".content.n_04").removeClass("active");
        }
    });
    $(".tab_n_03").click(function() {
        if($(".content.n_03").toggleClass("active")){
            $(".content.n_01").removeClass("active");
            $(".content.n_02").removeClass("active");
            $(".content.n_04").removeClass("active");
        }
    });
    $("button.tab_n_04").click(function() {
        if($(".content.n_04").toggleClass("active")){
            $(".content.n_01").removeClass("active");
            $(".content.n_02").removeClass("active");
            $(".content.n_03").removeClass("active");
        }
    });


    
    $(".num a").click(function () {
        var num = Number($(this).text() - 1);
        $(this).addClass("on").siblings().removeClass("on");
        $(".notice section .post > ul").filter(":visible").stop(true).fadeOut("instant").end()
        .eq(num).stop(true).fadeIn("instant");
    });
    $(".num a").addClass("on").add(".note > ul:first").show();
   
});