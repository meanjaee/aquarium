$(document).ready(function(){
    
    // $(".tab_n_01").click(function() {
    //     if($(".content.n_01").toggleClass("active")){
    //         $(".content.n_02").removeClass("active");
    //         $(".content.n_03").removeClass("active");
    //         $(".content.n_04").removeClass("active");
    //     } 
    // });
    // $(".tab_n_02").click(function() {
    //     if($(".content.n_02").toggleClass("active")){
    //         $(".content.n_01").removeClass("active");
    //         $(".content.n_03").removeClass("active");
    //         $(".content.n_04").removeClass("active");
    //     }
    // });
    // $(".tab_n_03").click(function() {
    //     if($(".content.n_03").toggleClass("active")){
    //         $(".content.n_01").removeClass("active");
    //         $(".content.n_02").removeClass("active");
    //         $(".content.n_04").removeClass("active");
    //     }
    // });
    // $("button.tab_n_04").click(function() {
    //     if($(".content.n_04").toggleClass("active")){
    //         $(".content.n_01").removeClass("active");
    //         $(".content.n_02").removeClass("active");
    //         $(".content.n_03").removeClass("active");
    //     }
    // });
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
    
    $(".num a").click(function () {
        var num = Number($(this).text() - 1);
        $(this).addClass("on").siblings().removeClass("on");
        $(".notice section .post > ul").filter(":visible").stop(true).fadeOut("instant").end()
        .eq(num).stop(true).fadeIn("instant");
    });
    $(".num a").addClass("on").add(".note > ul:first").show();
   
});