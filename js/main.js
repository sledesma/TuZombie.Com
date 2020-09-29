$(document).ready(function(){
    $('#catalogo .item').each(function(i){
        console.log($(this).data('bg'));
        $(this).css('background-image', 'url('+$(this).data('bg')+')');
    });

    $('#mobile_boton').click(function(){
        $('nav').fadeIn(200);
        //$('nav').css('display', 'block');
    });

    $('#mobile_close').click(function(){
        $('nav').fadeOut(200);
        //$('nav').css('display', 'none');
    })
});

$(window).resize(function(){
    if($(window).width() >= 970) {
        $('nav').css('display', 'block');
    } else {
        $('nav').css('display', 'none');
    }
});