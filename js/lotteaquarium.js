$(document).ready(function(){

    $(".container02 > button").click(function() {
        $(this).next('div').toggleClass('active').siblings("div").removeClass("active");
    });
    $(".span > button.p").click(function() {
        var num = $(this).index();
        $("ul.park > li").eq(num).toggleClass('active').siblings().removeClass("active");
    }); 
// 롯데월드 주소가 나오는 부분을 li에서 뺀다
// 따로 분류해서 교통수단과 형제로 만들지 않는다.
// 각 li가 .active를 만나면 보이게, 빠지면 안보이게 css 처리한다.
    
    $(".content.n_02 > .span > button").click(function() {
        $(this).toggleClass('active').siblings().removeClass('active');
    var num = $(this).index();
    $('li.map').eq(num).toggleClass('active').siblings().removeClass('active');
    });
    
    $(".content.n_03 > .span > button").click(function() {
        $(this).toggleClass('active').siblings().removeClass("active");
    var num = $(this).index();
    $("li.box").eq(num).toggleClass('active').siblings().removeClass("active");
    });
    
    $(".content.n_04 > .span > button").click(function() {
        $(this).toggleClass('active').siblings().removeClass('active');
    var num = $(this).index();
    $(".inner_2_01 > li.index").eq(num).toggleClass('active').siblings().removeClass('active');
    });

    
        $("#price").on("click",function(){
            $(".a_ticket_03_info").load("/aquarium/media/a_ticket_03_info.txt")
            $(this).addClass("on").siblings().removeClass("on");
        }).trigger("click");
        $("#request").on("click",function(){
            $(".a_ticket_03_info").load("/aquarium/media/a_ticket_03_check.txt")
            $(this).addClass("on").siblings().removeClass("on");
        })
        
        $("#warning").on("click",function(){
            $(".a_ticket_03_info").load("/aquarium/media/a_ticket_03_warning.txt")
            $(this).addClass("on").siblings().removeClass("on");
        })
        
    
        $(".index.parking > button").click(function(){
            $(this).toggleClass("active").siblings().removeClass("active");
            var num = $(this).ul();
        $("index.parking > ul").eq(num).toggleClass('active').siblings().removeClass('active');
        });
    
});