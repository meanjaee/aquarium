$(document).ready(function () {

    
        $(".num a").click(function () {
            var num = Number($(this).text() - 1);
            $(this).addClass("active").siblings().removeClass("active");
            $(".notice section .post > ul").filter(":visible").stop(true).fadeOut("instant").end()
                .eq(num).stop(true).fadeIn("instant");
        });
        $(".num a").addClass("active").add(".note > ul:first").show();
        
   
});