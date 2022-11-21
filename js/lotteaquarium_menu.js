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
        $("header .material-symbols-outlined.menu").text(function (e, text) {
            return text === 'close' ? 'menu' : 'close';
        });
        $(this).children("span").eq(1).text(function (e, text) {
            return text === 'CLOSE' ? 'MENU' : 'CLOSE';
        });1
    });
});