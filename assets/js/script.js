$('.btn-iniciar').click(function () {
    $('.tela-1').fadeOut();
    setTimeout(function () {
        $('.tela-2').fadeIn();
    }, 500)
    $('.msg-1').fadeIn()
})

$('.btn-proximo').click(function () {
    let telaAtual = $(this).parents('.tela');
    let next = $(this).parents('.tela').next();
    console.log(telaAtual)
    if(next.length>0){
        telaAtual.fadeOut()
        setTimeout(()=>{
            next.fadeIn()
            console.log(next.hasClass('tela-3'))
            if(next.hasClass('tela-3')){
                setTimeout(() => {
                    $('.tela-3 .indio_small').addClass('anim');
                }, 1500);
            }
            if(next.hasClass('tela-4')){
                setTimeout(() => {
                    $('.tela-4 .indio_small').addClass('anim');
                }, 1500);
            }
        }, 500)
    } else {
        console.log('acabouse')
    }
})