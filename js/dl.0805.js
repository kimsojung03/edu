$(function(){
    $('dl dt').on('click',function(){
        $('+dd',this).slideDown(800).siblings('dd').slideUp(500);

        });
    $('dl dd').on('click',function(){
        $(this).slideUp(500);
    });

});