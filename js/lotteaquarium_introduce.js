$(function(){
    $(".fadeOut").click(function(){
        $(".div.con").hide();
    })

    $(".div.button1.p_01").click(function () {
        $(".div.con.fade1").fadeIn("fast","swing",function (){
            if ($(this).css("display") == "none"){$(this).css("display:flex;")}
        });
    });
 
    $(".div.button1.p_03").click(function () {
        $(".div.con.fade2").fadeIn("fast","swing",function (){
            if ($(this).css("display") == "none"){$(this).css("display:flex;")}
        });
    });
   
    $(".div.button2.p_02").click(function () {
        $(".div.con.fade3").fadeIn("fast","swing",function (){
            if ($(this).css("display") == "none"){$(this).css("display:flex;")}
        });
    });
   
    $(".div.button3.p_01").click(function () {
        $(".div.con.fade4").fadeIn("fast","swing",function (){
            if ($(this).css("display") == "none"){$(this).css("display:flex;")}
        });
    });
    
    $(".div.button3.p_03").click(function () {
        $(".div.con.fade5").fadeIn("fast","swing",function (){
            if ($(this).css("display") == "none"){$(this).css("display:flex;")}
        });
    });
   

});