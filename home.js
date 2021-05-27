$(document).click((e) => {
        // ATUALIZANDO BOTÕES DE COMPRAR
        $('.btn-buy').each(function() { $(this).text($(this).hasClass('bought') ? "Comprado" : "Comprar") })

        if ($(e.target).attr('class')) {
            const classe = $(e.target).attr('class')
            switch (classe) {
                case "search":
                case "search-img":
                case "search-input":
                    return $('.search input').addClass('searching');
                case "hamburger":
                    if (!$('.header-games-overlay').hasClass('active')) return $('.header-games-overlay').addClass('active')
                default:
                    $('.search input').removeClass('searching')
                    $('.header-games-overlay').removeClass('active')

            }
            /*// NORMALIZANDO BUSCA
            if (classe.startsWith('search')) {
                $('.search input').addClass('searching')
            } //else if (classe == "hamburger") {
            //$('.header-games-overlay').addClass('active')
            //}
            // NORMALIZANDO O OVERLAY DO HAMURGUER
            else {
                $('.search input').removeClass('searching')
                    //if (classe != "hamburger")
                    //$('.header-games-overlay').removeClass('active')
            }*/
        }
    })
    //NORMALIZANDO BUSCA
$('.search input').on('keyup', function(e) {
        if (e.which === 13) {
            location.href = "/?search=" + ($(this).val())
        }
    })
    //HOVER HAMBURGUER
$('.hamburger').on('click mouseenter', function() {
    $('.header-games-overlay').addClass('active')

})

// BANNER SLIDER (SLICK)
$('.banner').slick({
        autoplay: false,
        autoplaySpeed: 5000,
        arrows: false
    })
    // NAVEGAÇÃO DO BANNER
$('.banner-nav-title').text(db.banner_games[0].title);
$('.banner-nav-self  span').text(`1/${ db.banner_games.length}`)
$('.banner').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.banner-nav-title').text(db.banner_games[nextSlide].title);
    $('.banner-nav-self  span').text(`${nextSlide+1}/${ db.banner_games.length}`)
});
// CARRINHO
if (!localStorage.getItem('cart')) localStorage.setItem('cart', '[]') // ADICIONA UM SE NÃO EXISTIR
    // AVISANDO O CLIENTE QUAIS ITENS ELE JÁ TEM NO CARRINHO
for (const game of JSON.parse(localStorage.getItem('cart'))) {
    $('game:contains(' + game.id + ')').parent().find('.btn-buy').addClass('bought')
}
$('.btn-buy').each(function() { $(this).text($(this).hasClass('bought') ? "Comprado" : "Comprar") })
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