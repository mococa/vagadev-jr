const MOBILE_LIMITE = 867;
var IS_MOBILE = false;
$(document).ready(function() {
    checkWidth();
});
$(window).on("resize", function() {
    checkWidth();
});
var cardslid;

function checkWidth() {
    if ($(window).width() < MOBILE_LIMITE) {
        $("#mobile_sheet").removeAttr("disabled");
        onlymobile()
        IS_MOBILE = true;

    } else {
        $("#mobile_sheet").attr("disabled", "disabled");
        IS_MOBILE = false;
        $('.banner').slick('unslick')
        for (const [i, game] of db.banner_games.entries()) {
            $('.banner-slide').eq(i).css('background-image', `url(${game.img})`)
        }
        $('.banner').slick({
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false
        })
        try {
            cardslid.destroy();
        } catch (err) {

        }

    }
}

function onlymobile() {
    cardslid = tns({
        container: '.games-card-container',
        autoplay: true,
        autoplaySpeed: 1500,
        autoplayButton: false,
        autoplayButtonOutput: false,
        controlsText: false,
        items: 1,
        center: true,
        nav: false,
        mouseDrag: true,
        preventScrollOnTouch: 'auto',
        responsive: {
            400: {
                items: 1,
                controls: true
            }
        }
    })
    $('.banner').slick('unslick')
    for (const [i, game] of db.banner_games.entries()) {
        $('.banner-slide').eq(i).css('background-image', `url(${game.img_mobile})`)
    }
    $('.banner').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    })

}