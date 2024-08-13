

    $(function(){
        $('#stop-btn').on('click',function(){
            $('.any').css({'animationPlayState' : 'paused', 'backgroundColor' : '#fff'});
        });
        $('#strat-btn').on('click',function(){
            $('.any').css({'animationPlayState' : 'running', 'backgroundColor' : '#333'});
        });
    });