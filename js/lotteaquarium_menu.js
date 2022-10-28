$(document).ready(function () {
    var lastWidth = $(window).width();
     $(window).resize(function(){
         if($(window).width()!=lastWidth){
             location.reload();
             lastWidth = $(window).width();
             return false;
         }
     });

    $("header button").click(function () {
        $(".nav").slideToggle(400);
        // $("header button").text("CLOSE");
        $("header .material-symbols-outlined").text(function (e, text) {
            return text === 'CLOSE' ? 'MENU' : 'CLOSE';
        });
        $(this).children("span").eq(1).text(function (e, text) {
            return text === 'CLOSE' ? 'MENU' : 'CLOSE';
        });1
    });

    $("footer .right select").click(function () {
                $("select").css("border", "none");
            });

            $(".tab").click(function () {
                $(".tab .content").toggleClass("on");
                $(".img").css("display:none");
                $(this).css("display:none");
            });
        
            $("footer .left button").click(function () {
                $(".foot").toggleClass("active");
            });
            
            if($(window).width()<640){
                $(".global_02 h2").click(function(){
                $(this).next("ul").stop().slideToggle()
            })
            }

           
});