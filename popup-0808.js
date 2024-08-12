$(function(){
    $('#open-btn').on('click',function(){
        // $('#popup-box').show(1000);
        // $('#popup-box').fadeIn(1000);
        $('#popup-box').slideDown(1000);
        // $('#popup-box').addClass('show');
    });
    $('#popup-box > span').on('click',function(){
        // $('#popup-box').hide(1000);
        // $('#popup-box').fadeOut(1000);
        $('#popup-box').slideUp(1000);
        // $('#popup-box').removeClass('show')
    });
    
});