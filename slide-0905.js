
$(function(){
let slidewidth = $('#main_b ul li').width();
let dir = '-='; //빼서 대입해라 = 왼쪽으로 가라
let autoSlide = setInterval(slide, 3000);

function slide(){
    $('#main_b ul').animate({'marginLeft' : dir + slidewidth}, 3000, function(){ //복수쓸때 -없음
        $('li:first-child', this).appendTo($(this));//appendTo 보낼장소 속에 들어가서 주어를 마지막 자식으로 넣겠다 반복되게
        $(this).css('margin-Left','0'); //단수쓸때 -있음
    });//어떻게 움직일건지-스타일, duration-시간, 애니메이션이 끝난뒤 어떻게 할것인지-펑션


};

});