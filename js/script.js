$(function(){
    $(window).scroll(function(){
        var header = document.getElementById('header');
        var now = $(window).scrollTop();
        if (now > 0){
            $(header).addClass('js__header');
        }else{
            $(header).removeClass('js__header');
        }
    });
});