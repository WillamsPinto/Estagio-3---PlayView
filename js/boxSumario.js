jQuery.fn.toggleText = function(a,b) {
return this.html(this.html().replace(new RegExp("("+a+"|"+b+")"),function(x){return(x==a)?b:a;}));
}

$(document).ready(function(){
    $('.box_1modulo').before('<span>1º Modulo: Mostrar conteúdo</span>');
    $('.box_1modulo').css('display', 'none')
    $('span', '#box_geral').click(function() {
    $(this).next().slideToggle('slow')
    .siblings('.tgl:visible').slideToggle('fast');
    // aqui começa o funcionamento do plugin
    $(this).toggleText('Mostrar','Esconder')
    .siblings('span').next('.tgl:visible').prev()
    .toggleText('Mostrar','Esconder')
    });
    })

$(document).ready(function(){
    $('.box_2modulo').before('<span>2º Modulo: Mostrar conteúdo</span>');
    $('.box_2modulo').css('display', 'none')
    $('span', '#box_geral').click(function() {
    $(this).next().slideToggle('slow')
    .siblings('.tgl:visible').slideToggle('fast');
    // aqui começa o funcionamento do plugin
    $(this).toggleText('Mostrar','Esconder')
    .siblings('span').next('.tgl:visible').prev()
    .toggleText('Mostrar','Esconder')
    });
    })

    $(document).ready(function(){
        $('.box_sumario').before('<span>3º Modulo: Mostrar conteúdo</span>');
        $('.box_sumario').css('display', 'none')
        $('span', '#box_geral').click(function() {
        $(this).next().slideToggle('slow')
        .siblings('.tgl:visible').slideToggle('fast');
        // aqui começa o funcionamento do plugin
        $(this).toggleText('Mostrar','Esconder')
        .siblings('span').next('.tgl:visible').prev()
        .toggleText('Mostrar','Esconder')
        });
    })

$(function(){
    $(".button-collapse").sideNav();
});
