
$(function(){

    let count = 0;
    let bool = true;

    $('#main_b ul li').eq(count).fadeIn(300);

    let autoFade = setInterval(fadeInOut, 1500);

    $('#stop').on('click', function(){
        if(bool === true){
            clearInterval(autoFade); // clearInterval(변수명);
            bool = false;
        }
    });

    $('#play').on('click', function(){
        if(bool === false){
            autoFade = setInterval(fadeInOut, 1500);
            bool = true; // 이 값이 없으면 플레이버튼 중복이 터짐.
        }
    });

    function fadeInOut(){
        count++;
        count %= $('#main_b ul li').length; 
        $('#main_b ul li').eq(count).fadeIn(300).siblings().fadeOut(300);
    }
});