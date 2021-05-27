const MOBILE_LIMITE = 867;
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

    } else {
        $("#mobile_sheet").attr("disabled", "disabled");
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

}