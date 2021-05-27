//Expand search box when clicked
$(document).click((e) => {
    $('.btn-buy').each(function() { $(this).text($(this).hasClass('bought') ? "Comprado" : "Comprar") })

    if ($(e.target).attr('class') && $(e.target).attr('class').startsWith('search')) {
        $('.search input').addClass('searching')
            //$('.search-btn').css('display', 'flex')
    } else {
        $('.search input').removeClass('searching')
            //$('.search-btn').css('display', 'none')
    }

})

// Banner Slider
$('.banner').slick({
    autoplay: false,
    autoplaySpeed: 5000,
    arrows: false
})
$('.banner-nav-title').text(db.banner_games[0].title);
$('.banner-nav-self  span').text(`1/${ db.banner_games.length}`)
$('.banner').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    $('.banner-nav-title').text(db.banner_games[nextSlide].title);
    $('.banner-nav-self  span').text(`${nextSlide+1}/${ db.banner_games.length}`)
});
if (!localStorage.getItem('cart')) localStorage.setItem('cart', '[]')
for (const game of JSON.parse(localStorage.getItem('cart'))) {
    $('game:contains(' + game.id + ')').parent().find('.btn-buy').addClass('bought')
}
$('.btn-buy').each(function() { $(this).text($(this).hasClass('bought') ? "Comprado" : "Comprar") })
$('.cart .badge').text(JSON.parse(localStorage.getItem('cart')).length)
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