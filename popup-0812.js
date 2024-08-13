$(function(){
$('button').on('click',function(){
$('div').addClass('box');
});

$(function(){
$('span').on('click',function(){
    $('div').removeClass('box');
});
});
});