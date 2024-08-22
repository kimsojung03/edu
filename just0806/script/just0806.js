$(".ck").click(function(){
    $(".popup").show();
});
$(".popup .button").click(function(){
    $(".popup").hide();
});


$('.tabmenu h2').click(function(){
    $('.tabmenu h2').removeClass('on')
    $(this).addClass('on')
});