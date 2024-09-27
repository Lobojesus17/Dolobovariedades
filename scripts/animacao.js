// ações de navegação header-nav-menu

$('header nav#nav-esquerda ul.menu-principal li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section.solucao').offset().top}, 1000)
})

$('header nav#nav-esquerda ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.sobre').offset().top}, 1000)
})


// ações de navegação footer

$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(0)').click(function(){
    $('html, body').animate({scrollTop:$('header').offset().top}, 1000)
})

$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(1)').click(function(){
    $('html, body').animate({scrollTop:$('section.solucao').offset().top}, 1000)
})

$('footer div.footer-container nav.nav-footer ul.menu-principal li:eq(2)').click(function(){
    $('html, body').animate({scrollTop:$('section.sobre').offset().top}, 1000)
})


/* section sobre*/

/* elementos com opacidade 0
$('main div.sobre-mestre').css('opacity', 0);

$('main div.sobre-mestre').waypoint(function(direcao){
    if(direcao == 'down'){
        $('main div.sobre-mestre').addClass('animate_animated animate_fadeInUp animate_slow');
    }else{
        $('main div.sobre-mestre').removeClass('animate_animated animate_fadeInUp animate_slow');
    }
}, {
    offset:'550px;'
})*/

