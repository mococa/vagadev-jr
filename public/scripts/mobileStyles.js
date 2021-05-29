const MOBILE_LIMITE = 867;
var IS_MOBILE = false;
$(document).ready(function() {
    checkWidth();
});
$(window).on("resize", function() {
    checkWidth();
});


function checkWidth() {
    if ($(window).width() < MOBILE_LIMITE) {
        onlymobile()
        IS_MOBILE = true;

    } else {
        IS_MOBILE = false;
        try {
            for (const [i, game] of db.banner_games.entries()) {
                $('.banner-slide').eq(i).css('background-image', `url(${game.img})`)
            }
            reslick('.banner', {
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false
            })

        } catch (e) {}
        try {
            reslick('.banner', {
                autoplay: true,
                autoplaySpeed: 5000,
                arrows: false
            })
            try { $('.games-card-container').slick('unslick') } catch (er) {}
        } catch (err) {

        }

    }
}

function onlymobile() {
    reslick('.games-card-container', {
        adaptiveHeight: true,
        arrows: false,
    })
    for (const [i, game] of db.banner_games.entries()) {
        $('.banner-slide').eq(i).css('background-image', `url(${game.img_mobile})`)
    }
    reslick('.banner', {
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    })


}