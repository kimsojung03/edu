$(function(){

    const hoverImg = [
        './img/img_04.png',
        './img/img_05.png',
        './img/img_06.png'
    ];

    //콜백함수: 다른함수에 인수로 전달되어 실행되는 함수
    //each : 지정된 함수가 각 요소에 대해 한번씩 호출됨.
    $('#img_list li a img').each(function(index, el){
        console.log(index, el);
        //index : 현재 순회중인 요소의 인덱스 (배열일땐 숫자로나옴/ 객체이면 key 값이 나옴-인덱스자리에)
        //value/element(el) : 현재 순회 중인 요소의 값(this) 

        const originalSrc = $(this).data('origin');
        $(this).on('mouseenter', function(){
            $(this).attr('src', hoverImg[index]);
        });

        $(this).on('mouseleve', function(){
            $(this).attr('src', originalSrc);
        });
    });
});