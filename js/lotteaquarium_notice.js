$(document).ready(function () {

    
        $(".num a").click(function () {
            var num = Number($(this).text() - 1);
            $(this).addClass("on").siblings().removeClass("on");
            $(".notice section .post > ul").filter(":visible").stop(true).fadeOut("instant").end()
                .eq(num).stop(true).fadeIn("instant");
        });
        $(".post > ul:first").addClass("on").show();
   
});