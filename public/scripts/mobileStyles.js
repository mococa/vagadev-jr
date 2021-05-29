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
        try {
            for (const [i, game] of db.banner_games.entries()) {
                $('.banner-slide').eq(i).css('background-image', `url(${game.img})`)
            }
            $('.banner').slick({
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false
            })
            $('.games-card-container').slick('unslick')
        } catch (e) {}
        try {
            cardslid.destroy();
        } catch (err) {

        }

    }
}

function onlymobile() {
    $('.games-card-container').slick({
        adaptiveHeight: true,
        arrows: false,
    })
    for (const [i, game] of db.banner_games.entries()) {
        $('.banner-slide').eq(i).css('background-image', `url(${game.img_mobile})`)
    }
    $('.banner').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
    })

}