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

    $("li.index").show();
    $("button.p").click(function(){
        $(this).addClasss("on").siblings().removeclass("on");
        var idx = $(this).index();
        $("li.index").eq(index).stop(true).fadeIn(500)
        siblings().fadeOut(200);

    });
    
});