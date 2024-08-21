$(function(){
    $("open-btn").on('click',function(){
        $('#popup-box').addClass('.show');
    });
    $(function(){
        $("close-btn").on('click',function(){
            $('#popup-box').removeClass('.show');
        });
    });
});

function goTOPage (){
    let name = prompt('성함을 입력해 주세요');
    // alert('안녕하세요'+ name + '님 환영합니다.'); 엤날방식
    alert(`안녕하세요 ${name}님 환영합니다.`)//벡틱이라는걸 사용 ` 물결커서

    //${name} 이걸 플레이스 홀더라고부른다 인풋타입과같은넘
}