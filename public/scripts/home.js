$(document).click((e) => {
    // ATUALIZANDO BOTÕES DE COMPRAR E HANDLING CLICKS
    $('.btn-buy').each(function() { $(this).text($(this).hasClass('bought') ? "Comprado!" : "Comprar") })
    const classe = $(e.target).attr('class')
    console.log(classe)

    if (!classe) return
    switch (true) {
        case classe.includes("search"):

            return $('.header, .search input').addClass('searching');

        case classe.includes("hamburger"):
            $('.header-games-overlay').toggleClass('active')
            if ($('.header-games-overlay').hasClass('active') && IS_MOBILE) {
                $('.hamburger').attr('src', '../svgs/close-burger.svg')
                $('.header')[0].style['background-color'] = 'var(--dark-blue)'
            } else {
                $('.hamburger').attr('src', '../svgs/icon_hamburguer.svg')
                $('.header')[0].style['background-color'] = null
                    //$('.header').css('background-color', 'unset')
            }
            return

        default:
            $('.header, .search input').removeClass('searching')
            $('.header-games-overlay').removeClass('active')

    }
})

//BUSCA
$('.search').click(() => {
    if ($('.search input').hasClass('searching')) {
        location.href = "/?search=" + $('.search input').val()
    }
}).children('input').click((e) => false);

$('.search input').on('keyup', function(e) {
    if (e.which === 13) {
        location.href = "/?search=" + $(this).val()
    }
}).on('focus', function() {
    $('.header, .search input').addClass('searching');
});

//HOVER HAMBURGUER
$('.hamburger').on('mouseenter', function() {
    $('.header-games-overlay').addClass('active')

});


// NAVEGAÇÃO DO BANNER
$('.banner-nav-title').text(db.banner_games[0].title);
$('.banner-nav-self  span').text(`1/${ db.banner_games.length}`)
$('.banner').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.banner-nav-title').text(db.banner_games[nextSlide].title);
    $('.banner-nav-self  span').text(`${nextSlide+1}/${ db.banner_games.length}`)
});

// CARRINHO
if (!localStorage.getItem('cart')) localStorage.setItem('cart', '[]')

for (const game of JSON.parse(localStorage.getItem('cart'))) {
    $('game:contains(' + game.id + ')').parent().find('.btn-buy').addClass('bought')
}
$('.btn-buy').each(function() { $(this).text($(this).hasClass('bought') ? "Comprado!" : "Comprar") })
$('.cart .badge').text(JSON.parse(localStorage.getItem('cart')).length)

// ADICIONAR OU REMOVER ITEM DO CARRINHO
$('.btn-buy').click(function() {
    const game_in_bag = {
        name: $(this).parent().find('.card-game-title').text(),
        price: moneyfy($(this).parent().find('.card-game-price').text()),
        amount: 1,
        id: $(this).parent().parent().find('game').text()
    }
    if (!$(this).hasClass('bought')) {
        $(this).addClass('bought')
        toggleModal(true)
        addToCart(game_in_bag)
    } else {
        removeFromCart(game_in_bag);
        $(this).removeClass('bought')
    }
    $('.cart .badge').text(JSON.parse(localStorage.getItem('cart')).length)
})