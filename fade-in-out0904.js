$(function(){
    let count = 0;
    $('#main_b ul li').eq(count).fadeIn(300);


    setInterval(function(){ //일정한 시간 간격으로 코드를 무한반복하는 함수
        count++;
        count %= $('#main_b ul li').length; //li의 갯수만큼 나누겠다 3으로(0,1,2반복)
        $('#main_b ul li').eq(count).fadeIn(300).siblings().fadeOut(300);
        //eq->index번호에 해당하는 요소를 찾아라 0부터 시작
    }, 1500);

});
